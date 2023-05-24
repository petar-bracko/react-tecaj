type InputChange = ({
  target: { name, value },
}: React.ChangeEvent<HTMLInputElement>) => void;

type SelectChange = (name: string) => (value: string) => void;

type SelectClear = (prop: string) => void;

type VoidFunction = () => void;

export type LoginData = {
  username: string;
  password: string;
};

export type AuthUser = {
  username: string;
  token: string;
  authenticated: boolean;
};

export type LoginStateHook = {
  state: LoginData;
  handleInputChange: InputChange;
};

export type LoginApi = {
  msg: string;
  username: string;
  token: string;
  authenticated: boolean;
};

export type StateForm = {
  ime: string;
  prezime: string;
  pozicija: string | null;
  work: string;
};

export type StateFormHook = {
  state: StateForm;
  handleInputChange: InputChange;
  handleSelectChange: SelectChange;
  handleSelectClear: SelectClear;
  resetState: VoidFunction;
};
