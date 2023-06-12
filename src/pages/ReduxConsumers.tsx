import { useAppDispatch, useAppSelector } from "../hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
import { Typography, Button, Space } from "antd";

export const ReduxConsumers = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography.Title className="text-center">
        Redux + Toolkit
      </Typography.Title>
      <div>
        <Space direction="vertical">
          <ConsumerOne />
          <ConsumerTwo />
        </Space>
      </div>
      <div>
        <Space className="mt-1">
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
          <Button onClick={() => dispatch(incrementByAmount(5))}>
            Inc by 5
          </Button>
        </Space>
      </div>
    </>
  );
};

function ConsumerOne() {
  const counter = useAppSelector((state) => state.slices.counter.value);

  return <div>Consumer one count: {counter}</div>;
}

function ConsumerTwo() {
  const counter = useAppSelector((state) => state.slices.counter.value);

  return <div>Consumer two count: {counter}</div>;
}
