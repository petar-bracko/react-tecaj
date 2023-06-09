import { useAppDispatch, useAppSelector } from "../hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
import { Typography, Button } from "antd";

export const ReduxConsumers = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography.Title className="text-center">
        Redux + Toolkit
      </Typography.Title>
      <ConsumerOne />
      <ConsumerTwo />
      <br />
      <div>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(incrementByAmount(5))}>Inc by 5</Button>
      </div>
    </>
  );
};

function ConsumerOne() {
  const counter = useAppSelector((state) => state.counter.value);

  return <div>Consumer one count: {counter}</div>;
}

function ConsumerTwo() {
  const counter = useAppSelector((state) => state.counter.value);

  return <div>Consumer two count: {counter}</div>;
}
