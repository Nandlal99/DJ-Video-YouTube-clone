import { createSlice } from "@reduxjs/toolkit";


const searchVideoSlice = createSlice({
    name:'searchVideo',
    initialState:{
        text:"",
    },
    reducers:{
        addText:(state,action) => {
            state.text=action.payload;
        },
    },
});

export const {addText} = searchVideoSlice.actions;

export default searchVideoSlice.reducer;