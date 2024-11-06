import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import {
  Drawer,  
  DrawerContent,
  DrawerTitle,
} from "./ui/drawer";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CustomOtp from "./CustomOtp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "@/hooks/use-toast";
import { auth, RecaptchaVerifier  } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

import { setOtp } from "@/redux/slices/authSlice";
import { setButtonLoader } from "@/redux/slices/commonSlice";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { signInWithPhoneNumber } from "firebase/auth";

const LoginSchema = z.object({
  phone: z
    .string()
    .length(10, { message: "Please enter a valid 10-digit number" })
    .regex(/^\d{10}$/, { message: "Please enter only numbers" }),
});

const LoginPhoneDrawer = ({ open, onClose }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery("(min-width: 768px)");
 
  let phoneNumberRef = useRef();

  const [resentCounter,setResendCounter] = useState(60);
  const [isMobile, setIsMobile] = useState(true);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [recaptchaVerifier, setrecaptchaVerifier] = useState(null);

  const otp = useSelector((state) => state.auth.otp);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      phone: "",
      otp: "",
    },
  });

  const handleAuthErrorCase = () => {
    onClose(false);
    setIsMobile(false);
  };

  useEffect(()=>{
    let timer;
    if(!isMobile && resentCounter > 0){
      timer = setTimeout(() => {
        setResendCounter(resentCounter - 1)
      }, 1000);
    }
    return () => clearTimeout(timer); 
  },[resentCounter,isMobile])

  useEffect(() => {
    if (auth) {
      // Ensure auth is available
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container", // The ID of the element for reCAPTCHA
        {
          size: "invisible", // Can be 'invisible' or 'normal'
          callback: (response) => {
            console.log("Recaptcha Resolved");
          },
          "expired-callback": () => {
            console.log("Recaptcha expired");
          },
        }
      );

      setrecaptchaVerifier(recaptchaVerifier);

      return () => {
        recaptchaVerifier.clear();
      };
    }
  }, [auth]);

  const handlePhoneSubmit = async (values) => {
     
    if(values.phone){
      phoneNumberRef.current = `+91${values.phone}`;
    }

    const phoneNumber = phoneNumberRef.current;

    try {
      const response = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );
      setConfirmationResult(response); // Store the confirmation result to verify the OTP later
      dispatch(setButtonLoader(false));

      if(isMobile){ // reopen the drawer for OTP and show otp- details
        onClose(true);
        setIsMobile(false);
      }else{
        toast({
          title: "OTP Sent Succesfully",
        })
      }
    } catch (error) {
      // Firebase error handling based on error codes
      let errorMessage = "An unknown error occurred, please try again.";
      if (error.code) {
        switch (error.code) {
          case "auth/invalid-phone-number":
            errorMessage =
              "The phone number is not valid, please check and try again.";
            break;
          case "auth/missing-phone-number":
            errorMessage = "Please enter a valid phone number.";
            break;
          case "auth/quota-exceeded":
            errorMessage =
              "SMS quota for this phone number has been exceeded. Try again later.";
            break;
          case "auth/too-many-requests":
            errorMessage = "Too many attempts. Please try again later.";
            break;
          case "auth/captcha-check-failed":
            errorMessage = "reCAPTCHA verification failed. Please try again.";
            break;
          case "auth/user-disabled":
            errorMessage =
              "This account has been disabled. Please contact support.";
            break;
          case "auth/app-not-authorized":
            errorMessage =
              "This app is not authorized to use Firebase Authentication.";
            break;
          case "auth/network-request-failed":
            errorMessage =
              "Network error occurred. Please check your internet connection.";
            break;
          default:
            errorMessage = "Phone authentication failed. Please try again.";
        }
      }

      // Dispatch actions to stop loading and reset states
      dispatch(setButtonLoader(false));

      // Show toast with error message
      toast({
        variant: "destructive",
        title: "Phone Authentication Error",
        description: errorMessage,
      });
    }
    // Validate phone number and then switch to OTP step
  };

  const submitOtp = async () => {
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: "Please enter the full 6-digit OTP.",
      });
      dispatch(setButtonLoader(false));
      return; // Do not proceed if the OTP is not complete
    }
    try {
      // const code = otp.join('')
      const result = await confirmationResult.confirm(otp); // Await confirmation result
      const user = result.user;

      const token = await user.getIdToken(); // Await token retrieval
      console.log(token);
      console.log(user.uid);

      // dispatch(setOtpTab(false));

      // const userData = await dispatch(fetchUserDetails()).unwrap();

      // const userId = userData._id;

      // if(userId){
      //   await dispatch(fetchSubscriptionData({ userId })).unwrap();
      // }
      // else{
      //   console,log('error')
      // }

      // Await user details
      // dispatch(setUser(userData));

      router.push("/");
    } catch (error) {
      console.log("Error during OTP verification:", error);

      // Firebase error handling based on error codes
      let errorMessage = "An unknown error occurred, please try again.";

      if (error.code) {
        switch (error.code) {
          case "auth/invalid-verification-code":
            errorMessage = "Invalid OTP, please check and try again.";
            break;
          case "auth/code-expired":
            errorMessage = "The OTP has expired, please request a new one.";
            handleAuthErrorCase();
            break;
          case "auth/user-disabled":
            errorMessage =
              "This account has been disabled. Please contact support.";
            handleAuthErrorCase();
            break;

          case "auth/user-not-found":
            errorMessage = "No user found with this phone number.";
            handleAuthErrorCase();
            break;

          case "auth/too-many-requests":
            errorMessage = "Too many attempts, please try again later.";
            break;
          case "auth/invalid-phone-number":
            errorMessage = "Invalid phone number, please enter a valid one.";
            handleAuthErrorCase();
            break;
          default:
            errorMessage = "Authentication failed, please try again.";
        }
      }

      // Dispatch actions for loading states and resetting OTP
      dispatch(setButtonLoader(false));
      // dispatch(setOtpTab(false));

      // Show toast with proper error message
      toast({
        variant: "destructive",
        title: "Authentication Error",
        description: errorMessage,
      });
    }
    dispatch(setOtp(""));
  };

  const handleResendOtp = () =>{
     handlePhoneSubmit(phoneNumberRef.current)
     setResendCounter(60);
  }

  function onSubmit(values) {
    dispatch(setButtonLoader(true));
    if (isMobile) {
      onClose(false);
      handlePhoneSubmit(values);
    } else {
      submitOtp();
    }
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col py-[20px] gap-[18px] px-[18px]">
            {/* Drawer Title */}
            <div className="w-full text-left">
              <DrawerTitle className="text-left w-full text-20 text-mediumdark font-semibold uppercase">
                {isMobile ? "Login" : "Verify Details"}
              </DrawerTitle>

              {/* Content based on the step */}
              <p className="text-10 text-secondarytext font-semibold mt-[4px]">
                {isMobile
                  ? "Enter your phone number to proceed."
                  : `OTP has been sent to your phone.`}
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 "
              >
                <FormInput form={form} isMobile={isMobile} />
                <div className="flex flex-center">
                  <CustomButton
                    title={isMobile ? "Send OTP" : "Verify Now"}
                    className="w-fit min-w-[165px]"
                  />
                </div>
              </form>
            </Form>

            {/* Button */}
            <div className="w-full text-center">
              <p className="text-10 text-[#606060]">
                By Clicking, I accept{" "}
                <span className="font-semibold">Terms and Conditions</span> &{" "}
                <span className="font-semibold">Privacy Policy</span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="">
        <div className="flex flex-col py-[20px] gap-[18px] px-[18px]">
          {/* Drawer Title */}
          <div className="w-full text-left">
            <DrawerTitle className="text-left w-full text-20 text-mediumdark font-semibold uppercase">
              {isMobile ? "Login" : "Verify Details"}
            </DrawerTitle>

            {/* Content based on the step */}
            <p className="text-10 text-secondarytext font-semibold mt-[4px]">
              {isMobile
                ? "Enter your phone number to proceed."
                : `OTP has been sent to your phone.`}
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={`${isMobile && 'space-y-8'}`}>
              <FormInput form={form} isMobile={isMobile} />
              {
                !isMobile && (
                  <div className="flex-center my-[8px]">
                        <Button type='button' onClick={handleResendOtp} disabled={resentCounter > 0 } className=' bg-transparent text-mediumdark'>{resentCounter > 0 ? `Resend OTP in ${resentCounter}` : 'Resend OTP'}</Button>
                  </div>
                )
              }

              <div className="flex flex-center">
                <CustomButton
                  title={isMobile ? "Send OTP" : "Verify Now"}
                  className="w-fit min-w-[165px] "
                />
              </div>
            </form>
          </Form>

          {/* Button */}
          <div className="w-full text-center">
            <p className="text-10 text-[#606060]">
              By Clicking, I accept{" "}
              <span className="font-semibold">Terms and Conditions</span> &{" "}
              <span className="font-semibold">Privacy Policy</span>
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default LoginPhoneDrawer;

const FormInput = ({ form, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <div className="flex flex-center w-full flex-col mt-[18px] ">
              <FormLabel className="text-[16px] font-semibold text-[#717171]">
                PHONE NUMBER
              </FormLabel>
              <FormControl className="mt-[4px] w-full flex-center">
                <Input
                  maxLength={10}
                  placeholder=""
                  {...field}
                  className="w-fit max-w-[210PX] mx-auto border-b-2 border-b-[#223A78] text-mediumdark rounded-none text-[30px] font-semibold tracking-widest"
                />
              </FormControl>
              <FormMessage />
            </div>
          )}
        />
      ) : (
        <div className="w-full text-center flex-center flex-col mt-[18px] gap-[16px]">
          <p className="text-[16px] font-semibold text-[#717171]">ENTER OTP</p>

          <CustomOtp control={form.control} className="text-[30px]" />
        </div>
      )}
    </>
  );
};
