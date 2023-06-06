import { LoginData } from "../../types";

export function validateLogin(submittedLoginData: LoginData) {
  const { username, password } = submittedLoginData;

  if (!username || !password) return false;

  return true;
}
