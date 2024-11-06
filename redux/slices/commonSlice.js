import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    showLoader:false,
    buttonLoader:false,
    openSidebar:false
}

export const commonSlice = createSlice({
    name:'common',
    initialState,
    reducers:{
        setShowLoader(state,action){
            state.showLoader = action.payload;
        },
        setButtonLoader(state,action){
            state.buttonLoader = action.payload;
        },
        setOpenSidebar(state,action){
            state.openSidebar = action.payload;
        }
    }
})

export const { setShowLoader, setButtonLoader,setOpenSidebar } = commonSlice.actions;

export default commonSlice.reducer;
