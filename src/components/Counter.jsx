import React, { useReducer, useState } from "react";
import { counterReducer, initialState } from "../counterReducer";
import "./Counter.css";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState("");
  const [arrayInput, setArrayInput] = useState("");

  const dispatchAction = (type, payload = null) => {
    dispatch({ type, payload: payload ? Number(payload) : undefined });
    setInputValue("");
  };

  const handleArrayAction = (type) => {
    const array = arrayInput
      .split(",")
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num));
    dispatch({ type, payload: array });
    setArrayInput("");
  };

  return (
    <div className="counter-app">
      <header>
        <h1>🌟Counter Application🌟</h1>
        <p>Do math, look at numbers, and more easily!</p>
      </header>

      <main>
        <section className="display">
          <h2>Current Value: {state.count}</h2>
        </section>

        <section className="actions">
          <h3>Basic Operations</h3>
          <div className="button-group">
            <button onClick={() => dispatchAction("increment")}>+</button>
            <button onClick={() => dispatchAction("decrement")}>-</button>
            <button onClick={() => dispatchAction("reset")}>Reset</button>
          </div>
        </section>

        <section className="input-actions">
          <h3>With Input</h3>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a value"
          />
          <div className="button-group">
            <button
              onClick={() => dispatchAction("incrementByAmount", inputValue)}
            >
              Add
            </button>
            <button
              onClick={() => dispatchAction("decrementByAmount", inputValue)}
            >
              Subtract
            </button>
            <button
              onClick={() => dispatchAction("multiplyByAmount", inputValue)}
            >
              Multiply
            </button>
            <button
              onClick={() => dispatchAction("divideByAmount", inputValue)}
            >
              Divide
            </button>
            <button onClick={() => dispatchAction("percentageOf", inputValue)}>
              % Of
            </button>
          </div>
        </section>

        <section className="advanced-operations">
          <h3>Advanced Functions</h3>
          <div className="button-group">
            <button onClick={() => dispatchAction("factorial")}>
              Factorial
            </button>
            <button onClick={() => dispatchAction("fibonacciUpTo")}>
              Fibonacci
            </button>
            <button onClick={() => dispatchAction("isPrime")}>
              Prime Check
            </button>
            <button onClick={() => dispatchAction("convertToBinary")}>
              Binary
            </button>
            <button onClick={() => dispatchAction("logarithm")}>Log</button>
            <button onClick={() => dispatchAction("exponential")}>Exp</button>
            <button onClick={() => dispatchAction("sin")}>Sin</button>
            <button onClick={() => dispatchAction("cos")}>Cos</button>
            <button onClick={() => dispatchAction("tan")}>Tan</button>
            <button onClick={() => dispatchAction("generatePrimes")}>
              Generate Primes
            </button>
            <button onClick={() => dispatchAction("rollDice", 6)}>
              Roll Dice
            </button>
          </div>
        </section>

        <section className="array-input">
          <h3>Array-Based Operations</h3>
          <input
            type="text"
            value={arrayInput}
            onChange={(e) => setArrayInput(e.target.value)}
            placeholder="Enter comma-separated numbers"
          />
          <div className="button-group">
            <button onClick={() => handleArrayAction("mean")}>
              Calculate Mean
            </button>
          </div>
        </section>
      </main>

      <footer>
        <p>Counter App © 2025 | Built with ReactJs & CSS3</p>
      </footer>
    </div>
  );
};

export default Counter;
