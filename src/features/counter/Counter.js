import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  reset,
  selectCount,
} from "./counterSlice";
// import styles from "./Counter.module.css";
import { ButtonWrapper, CustomButton, DisplayCounter, Input } from "./styled";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("3");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <ButtonWrapper>
        <CustomButton onClick={() => dispatch(decrement())}> - </CustomButton>
        <CustomButton onClick={() => dispatch(increment())}> + </CustomButton>
        <DisplayCounter>{count}</DisplayCounter>
        <CustomButton onClick={() => dispatch(reset())}> Reset </CustomButton>

        <ButtonWrapper>
          <Input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          ></Input>
          <CustomButton
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            {" "}
            Add Amount
          </CustomButton>

          <CustomButton
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            {" "}
            Add Async
          </CustomButton>
          <CustomButton
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            {" "}
            Add if Odd
          </CustomButton>
        </ButtonWrapper>
      </ButtonWrapper>
    </>
  );
}
