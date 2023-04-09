import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../counter/createSlice";
import { msgState } from "../msg/reducer";
import { workersSlice } from "../Worker/reducer";
import { translatorSlice } from "../translator/reducer";

export default configureStore({ 
    reducer: {
        counter: counterSlice.reducer,
        msg: msgState.reducer,
        workers: workersSlice.reducer,
        translator: translatorSlice.reducer,
    },
});