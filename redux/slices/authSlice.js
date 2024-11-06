import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    otp:false,
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setOtp(state,action){
            state.otp = action.payload;
        }
    }
})

export const { setOtp } = AuthSlice.actions;

export default AuthSlice.reducer;