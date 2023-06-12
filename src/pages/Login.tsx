import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useForm,
  useSubmit,
  useUserAuthContext,
  useAppDispatch,
  useAppSelector,
} from "../hooks";
import { validateLogin } from "../helpers/validation";
import { loginEndpoint } from "../helpers/utils";
import { initialLoginData } from "../data/initial-states";
import { setReduxUser } from "../redux/features/user/userSlice";
import type { LoginApi, LoginStateHook } from "../types";
import { Form, Input, Button, Typography, message, Spin } from "antd";

export const Login = () => {
  const { state: loginData, handleInputChange }: LoginStateHook =
    useForm(initialLoginData);
  const submit = useSubmit();
  const navigate = useNavigate();
  const { setUser } = useUserAuthContext();
  const dispatch = useAppDispatch();
  const reduxUser = useAppSelector((state) => state.slices.user);

  function handleLoginSubmit() {
    const validLogin = validateLogin(loginData);
    if (validLogin) {
      submit.startSubmit();
      loginEndpoint(loginData)
        .then((loginResponse) => {
          submit.fetchSuccess();
          setUser({
            authenticated: loginResponse.authenticated,
            token: loginResponse.token,
            username: loginResponse.username,
          });
          dispatch(setReduxUser(loginResponse));
          // persistLogin(loginResponse);
          navigate("/home");
        })
        .catch((error: LoginApi) => {
          message.error(error.msg);
          submit.fetchFailure();
        })
        .finally(() => submit.endSubmit());
      return;
    }
    message.warning("Fill all form inputs.");
  }

  useEffect(() => {
    reduxUser.authenticated && navigate("/home", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="login-page">
      <section className="login-form">
        <Typography.Title className="text-center text-upper">
          Welcome
        </Typography.Title>
        <Form layout="vertical">
          <Form.Item label="Username" required>
            <Input
              placeholder="Enter your username"
              value={loginData.username}
              name="username"
              onChange={handleInputChange}
              autoFocus
            />
          </Form.Item>
          <Form.Item label="Password" required>
            <Input.Password
              placeholder="Enter your password"
              value={loginData.password}
              name="password"
              onChange={handleInputChange}
            />
          </Form.Item>
          <div className="flex-cc">
            {submit.isSubmitting ? (
              <Spin />
            ) : (
              <Button type="primary" onClick={handleLoginSubmit}>
                Log In
              </Button>
            )}
          </div>
        </Form>
      </section>
    </div>
  );
};
