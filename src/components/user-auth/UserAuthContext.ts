import { createContext } from "react";
import type { AuthUser } from "../../types";

export const UserAuthContext = createContext<{
  user: AuthUser;
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
} | null>(null);
