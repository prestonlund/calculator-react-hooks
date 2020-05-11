import React, { useState } from "react";

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState("");
  const [storedNumber, setStoredNumber] = useState("");
  const [functionType, setFunctionType] = useState("");

  const handleSetDisplayValue = num => {
    if ((!number.includes(".") || num !== ".") && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, "")}`);
    }
  };

  const handleClearValue = () => {
    setNumber("");
    setStoredNumber("");
    setFunctionType("");
  };

  return (
    <NumberContext.Provider
      value={{
        handleSetDisplayValue,
        handleClearValue
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
