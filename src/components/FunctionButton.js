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
      {/* Division and multiplication signs switch statement */}
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
