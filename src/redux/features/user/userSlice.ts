import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthUser, LoginApi } from "../../../types";

const initialState: AuthUser = {
  authenticated: false,
  token: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setReduxUser: (_, action: PayloadAction<LoginApi>) => ({
      authenticated: action.payload.authenticated,
      token: action.payload.token,
      username: action.payload.username,
    }),
    resetUserData: () => ({ ...initialState }),
  },
});

export const { resetUserData, setReduxUser } = userSlice.actions;

export default userSlice.reducer;
