import { useState } from "react";
import { UserAuthContext } from "./UserAuthContext";
import type { AuthUser } from "../../types";
import { initAuthUser } from "../../data/initial-states";

type Props = {
  children: JSX.Element;
};

export const UserAuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthUser>({ ...initAuthUser });

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};
