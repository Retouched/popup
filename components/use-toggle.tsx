"use client";
import { useState, useCallback } from "react";

type UseToggleReturnType = [boolean, () => void];

function useToggle(initialValue = false): UseToggleReturnType {
  if (typeof initialValue !== "boolean") {
    console.warn("Invalid type for useToggle");
  }

  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggleValue];
}

export default useToggle;
