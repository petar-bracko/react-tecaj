export type InputChange = ({
  target: { name, value },
}: React.ChangeEvent<HTMLInputElement>) => void;

export type LoginData = {
  username: string;
  password: string;
};

export type AuthUser = {
  username: string;
  token: string;
  authenticated: boolean;
};

export type LoginApi = {
  msg: string;
  username: string;
  token: string;
  authenticated: boolean;
};
