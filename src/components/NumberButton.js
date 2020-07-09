import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const CalculatorButton = ({ buttonValue }) => {
  // useContext React hook
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
      <span>{buttonValue}</span>
    </button>
  );
};

export default CalculatorButton;
