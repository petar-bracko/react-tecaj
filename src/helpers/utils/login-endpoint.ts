import type { LoginApi, LoginData } from "../../types";

export const loginEndpoint = (loginData: LoginData) =>
  new Promise<LoginApi>((resolve, reject) => {
    if (
      loginData.username !== "pbracko" ||
      loginData.password !== "lozinka123"
    ) {
      setTimeout(() => {
        reject({
          msg: "User not found.",
          username: "",
          token: "",
          authenticated: false,
        });
      }, 3000);
      return;
    }

    setTimeout(() => {
      resolve({
        msg: "Login successful",
        username: "pbracko",
        token: "qwer-1234-asdf-0987",
        authenticated: true,
      });
    }, 3000);
  });
