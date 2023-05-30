import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "./Services/Action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    dispatch(decrementAction());
  };
  const handleReset = () => {
    dispatch(resetAction());
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleReset}>RESET</button>
      <button onClick={handleDecrement}>DECREMENT</button>
    </div>
  );
};

export default Counter;
