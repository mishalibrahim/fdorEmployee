import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userData : ''
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetails(state,action){
            state.details = action.payload;
        }
    }
})

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;

