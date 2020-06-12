import React, { useState, useEffect } from "react";

let intervalID;
let timeoutID;

function App() {
  const [number, setNumber] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [isPlus, setIsPlus] = useState(null);

  useEffect(() => {
    if (!isClicking) return;
    calculateOne();
    timeoutID = setTimeout(() => {
      keepCalculate();
    }, 2000);
  }, [isClicking]);

  const plus = () => {
    setIsClicking(true);
    setIsPlus(true);
  };

  const minus = () => {
    setIsClicking(true);
    setIsPlus(false);
  };

  const calculateOne = () => {
    if (isPlus) {
      setNumber(number + 1);
    }
    if (!isPlus) {
      setNumber(number - 1);
    }
  };

  const keepCalculate = () => {
    intervalID = setInterval(() => {
      if (isPlus) setNumber(number => number + 1);
      else setNumber(number => number - 1);
    }, 100);
  };

  const stopCalculate = () => {
    setIsClicking(false);
    clearInterval(intervalID);
    clearTimeout(timeoutID);
  };

  return (
    <div>
      <div>{number}</div>
      <button
        onMouseDown={plus}
        onMouseUp={stopCalculate}
        onMouseLeave={stopCalculate}
      >
        +
      </button>
      <button
        onMouseDown={minus}
        onMouseUp={stopCalculate}
        onMouseLeave={stopCalculate}
      >
        -
      </button>
    </div>
  );
}

export default App;
