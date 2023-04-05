import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import sideMenuSlice from "./sideMenuSlice";
import searchVideoSlice from "./searchVideoSlice";


const store = configureStore({
    reducer: {
        app: sideMenuSlice,
        search:searchSlice,
        chat:chatSlice,
        searchVideo:searchVideoSlice,
    }
});

export default store;