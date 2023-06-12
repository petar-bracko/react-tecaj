import { useNavigate } from "react-router-dom";
import { useAppDispatch, useUserAuthContext } from ".";
import { initAuthUser } from "../data/initial-states";
import { clearLocalStorage } from "../helpers/utils";
import { resetState as resetCounterState } from "../redux/features/counter/counterSlice";
import { persistor } from "../redux/redux-store";
import { resetUserData } from "../redux/features/user/userSlice";
import { message } from "antd";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useUserAuthContext();
  const dispatch = useAppDispatch();

  function logout() {
    setUser({ ...initAuthUser });
    dispatch(resetCounterState());
    dispatch(resetUserData());
    persistor.purge();
    navigate("/login", { replace: true });
    clearLocalStorage();
    message.success("Successfully logged out!");
  }

  return logout;
};
