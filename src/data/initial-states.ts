import type { AuthUser, LoginData } from "../types";

export const initAuthUser: AuthUser = {
  username: "",
  authenticated: false,
  token: "",
};

export const initialLoginData: LoginData = {
  username: "",
  password: "",
};
