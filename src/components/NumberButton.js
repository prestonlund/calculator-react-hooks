import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const CalculatorButton = ({ buttonValue }) => {
  // useContext React hook
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default CalculatorButton;
