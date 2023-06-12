import { useZustandStore } from "../zustand/zustand-store";
import { Typography, Button, Space } from "antd";

export const ZustandConsumer = () => {
  const counter = useZustandStore((state) => state.counter);
  const incrementCounter = useZustandStore((state) => state.incrementCounter);
  const resetCounter = useZustandStore((state) => state.resetCounter);
  const incByFive = useZustandStore((state) => state.incrementBy);
  const zStore = useZustandStore();

  return (
    <>
      <Typography.Title className="text-center">Zustand</Typography.Title>
      <div>{zStore.name}</div>
      <div>
        <p>Counter: {counter}</p>
        <Space className="mt-1">
          <Button type="primary" onClick={incrementCounter}>
            Increment
          </Button>
          <Button onClick={resetCounter}>Reset</Button>
          <Button onClick={() => incByFive(5)}>Inc by 5</Button>
        </Space>
      </div>
    </>
  );
};
