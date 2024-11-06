import { auth } from "@/lib/firebase";


export const axiosInstance = axios.create({
    baseURL: 'https://fdor-api-uat.el.r.appspot.com/',
    timeout: 1000,
    headers: {
        ContentType: "application/json",
        "x-app-name": "droppies/app",
      },
  });


axiosInstance.interceptors.request.use(
 async(config) => {
 const user =  auth.currentUser;
    if (user) {
        const token = await user.getIdToken(true);
        config.headers.Authorization = `Bearer ${token}`;
        console.log(token);
    }
    return config;
 },
 (error)=>{
    console.log(error);
    return Promise.reject(error);
 }
)