import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = (initialState: any) => {
  const [state, setState] = useState({ ...initialState });

  function handleInputChange({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [name]: value });
  }

  return {
    state,
    handleInputChange,
  };
};
