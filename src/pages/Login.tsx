import { useNavigate } from "react-router-dom";
import { useForm, useSubmit, useUserAuthContext } from "../hooks";
import { validLogin } from "../helpers/validation";
import { loginEndpoint, persistLogin } from "../helpers/utils";
import { initialLoginData } from "../data/initial-states";
import type { LoginApi, LoginStateHook } from "../types";
import { Form, Input, Button, Typography, message, Spin } from "antd";

export const Login = () => {
  const { state: loginData, handleInputChange }: LoginStateHook =
    useForm(initialLoginData);
  const submit = useSubmit();
  const navigate = useNavigate();
  const { setUser } = useUserAuthContext();

  function handleLoginSubmit() {
    const isValid = validLogin(loginData);
    if (isValid) {
      submit.startSubmit();
      loginEndpoint(loginData)
        .then((loginResponse) => {
          submit.fetchSuccess();
          setUser({
            authenticated: loginResponse.authenticated,
            token: loginResponse.token,
            username: loginResponse.username,
          });
          persistLogin(loginResponse);
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
