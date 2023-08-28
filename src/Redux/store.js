import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Slice/AdminSlice";
import UserSlice from "./Slice/UserSlice";
export const Store = configureStore({
  reducer: {
    users: UserSlice,
    admin: AdminSlice,
  },
});
