import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => {
            setAmount(parseInt(e.target.value));
          }}
        />
        <button
          onClick={() => {
            setCount(amount);
          }}
        >
          set
        </button>
      </div>
    </>
  );
};

export default Counter;
