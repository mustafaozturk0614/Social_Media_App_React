import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./features";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export default store;
