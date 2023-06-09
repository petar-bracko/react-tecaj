import { useNavigate } from "react-router-dom";
import { useAppDispatch, useUserAuthContext } from ".";
import { initAuthUser } from "../data/initial-states";
import { clearLocalStorage } from "../helpers/utils";
import { resetState as resetCounterState } from "../redux/features/counter/counterSlice";
import { message } from "antd";
import { persistor } from "../redux/redux-store";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useUserAuthContext();
  const dispatch = useAppDispatch();

  function logout() {
    setUser({ ...initAuthUser });
    dispatch(resetCounterState());
    persistor.purge();
    navigate("/login", { replace: true });
    clearLocalStorage();
    message.success("Successfully logged out!");
  }

  return logout;
};
