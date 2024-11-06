
  import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
  } from "@/components/ui/input-otp";
  
  import { FormField } from "./ui/form";
import { setOtp } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";

  const CustomOtp = ({ control }) => {
    const dispatch = useDispatch();
    return (
        <FormField
            control={control}
            name="otp"
            render={({ field }) => {
                const handleChange = (value) => {
                    field.onChange(value);
                    console.log(value)
                    dispatch(setOtp(value));
                };

                return (
                    <InputOTP
                        maxLength={6}
                        onChange={(value) => handleChange(value)}
                        value={field.value || ""}
                        
                    >
                        <InputOTPGroup>
                            {Array.from({ length: 6 }, (_, index) => (
                                <InputOTPSlot
                                    key={index}
                                    index={index}
                                    value={field.value ? field.value[index] : ''}
                                    className="text-[30px] text-mediumdark"
                                />
                            ))}
                        </InputOTPGroup>
                    </InputOTP>
                );
            }}
        />
    );
  };

  export default CustomOtp