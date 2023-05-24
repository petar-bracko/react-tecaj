import { useContext } from "react";
import { UserAuthContext } from "../components/user-auth/UserAuthContext";

export const useUserAuthContext = () => {
  const userAuthCtx = useContext(UserAuthContext);

  if (!userAuthCtx) {
    throw new Error(
      "useUserAuthContext must be used within a UserAuthProvider"
    );
  }

  return userAuthCtx;
};
