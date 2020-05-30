import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const FunctionButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);

  return (
    <button
      className="function-button"
      type="button"
      onClick={() => handleSetCalcFunction(buttonValue)}
    >
      {/* {buttonValue} === '*' ? 'X' : {buttonValue} */}
      {(() => {
        switch (buttonValue) {
          case "*":
            return "x";
          case "/":
            return "÷";
          default:
            return buttonValue;
        }
      })()}
    </button>
  );
};

export default FunctionButton;
