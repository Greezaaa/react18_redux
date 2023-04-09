import { createSlice } from "@reduxjs/toolkit";


export const msgState = createSlice({
    name: "msg",
    initialState: {
      msg: "",
      state: false,
    },
    reducers: {
      showMsg: (state) => {
        state.msg = "Hello World";
        state.state = true;
      },
      hideMsg: (state) => {
        state.msg = "";
        state.state = false;
      },
      setMsg: (state, action) => {
        state.msg = action.payload;
        state.state = true;
      }
    },
  });
export const selectMsg = (state) => state.msg
export const { showMsg, hideMsg, setMsg } = msgState.actions