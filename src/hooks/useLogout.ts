import { useNavigate } from "react-router-dom";
import { useUserAuthContext } from ".";
import { initAuthUser } from "../data/initial-states";
import { clearLocalStorage } from "../helpers/utils";
import { message } from "antd";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useUserAuthContext();

  function logout() {
    setUser({ ...initAuthUser });
    navigate("/login", { replace: true });
    clearLocalStorage();
    message.success("Successfully logged out!");
  }

  return logout;
};
