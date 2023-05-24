import type { AuthUser, LoginData, StateForm } from "../types";

export const initAuthUser: AuthUser = {
  username: "",
  authenticated: false,
  token: "",
};

export const initialLoginData: LoginData = {
  username: "",
  password: "",
};

export const stateFormInitValues: StateForm = {
  ime: "",
  prezime: "",
  pozicija: null,
  work: "office",
};

export const useStateHellInitValues: StateForm = {
  ime: "",
  prezime: "",
  pozicija: null,
  work: "remote",
};
