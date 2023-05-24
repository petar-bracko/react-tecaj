import { LoginData } from "../../types";

export function validLogin(submittedLoginData: LoginData) {
  const { username, password } = submittedLoginData;

  if (!username || !password) return false;

  return true;
}
