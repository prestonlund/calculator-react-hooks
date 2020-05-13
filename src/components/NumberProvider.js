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

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber("");
  };

  const handleClearValue = () => {
    setNumber("");
    setStoredNumber("");
    setFunctionType("");
  };

  const handleBackButton = () => {
    if (number !== "") {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  const handleSetCalcFunction = type => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setStoredNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  return (
    <NumberContext.Provider
      value={{
        handleSetDisplayValue,
        handleSetStoredValue,
        handleClearValue,
        handleBackButton,
        handleSetCalcFunction,
        handleToggleNegative
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
