import { useState } from "react";

const useInput = () => {
  const [isVisible, setIsVisible] = useState(false);

  return {
    isVisible,
    setIsVisible,
  };
};

export default useInput;
