import React from "react";
import NumberButton from "./NumberButton";
import ClearButton from "./ClearButton";
import Display from "./Display";

const Calculator = () => (
  <div>
    <div className="display">
      <h1>Calculator</h1>
      <Display />
    </div>
    <div className="number-pad">
      <NumberButton buttonValue={9} />
      <NumberButton buttonValue={8} />
      <NumberButton buttonValue={7} />
      <NumberButton buttonValue={6} />
      <NumberButton buttonValue={5} />
      <NumberButton buttonValue={4} />
      <NumberButton buttonValue={3} />
      <NumberButton buttonValue={2} />
      <NumberButton buttonValue={1} />
      <NumberButton buttonValue={0} />
      <button>.</button>
      <button>+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
      <button>=</button>
      <ClearButton />
      <button>+-</button>
      <button>&lt;</button>
    </div>
  </div>
);

export default Calculator;
