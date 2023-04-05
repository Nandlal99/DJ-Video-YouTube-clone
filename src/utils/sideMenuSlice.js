import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
    },
});

export const {toggleMenu , closeMenu} = sideMenuSlice.actions;
export default sideMenuSlice.reducer;