import type { LoginApi } from "../../types";

export function persistLogin({ authenticated, token, username }: LoginApi) {
  localStorage.setItem(
    "rt-user",
    JSON.stringify({ authenticated, token, username })
  );
}
