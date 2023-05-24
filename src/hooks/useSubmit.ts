import { useState } from "react";

export function useSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const startSubmit = () => {
    setValidFetch(false);
    setIsSubmitting(true);
  };
  const endSubmit = () => setIsSubmitting(false);

  const [validFetch, setValidFetch] = useState(false);
  const fetchSuccess = () => setValidFetch(true);
  const fetchFailure = () => setValidFetch(false);

  return {
    isSubmitting,
    startSubmit,
    endSubmit,
    validFetch,
    fetchSuccess,
    fetchFailure,
  };
}
