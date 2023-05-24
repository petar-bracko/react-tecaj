import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = (initialState: any) => {
  const [state, setState] = useState({ ...initialState });

  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, [name]: value });

  const handleSelectChange = (name: string) => (value: string) =>
    setState({ ...state, [name]: value });

  const handleSelectClear = (prop: string) =>
    setState({ ...state, [prop]: null });

  const resetState = () => setState({ ...initialState });

  return {
    state,
    handleInputChange,
    handleSelectChange,
    handleSelectClear,
    resetState,
  };
};
