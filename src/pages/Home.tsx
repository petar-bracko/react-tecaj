import { useUserAuthContext } from "../hooks";
import { Typography } from "antd";

export const Home = () => {
  const { user } = useUserAuthContext();

  return (
    <>
      <Typography.Title className="text-center">Home</Typography.Title>
      <div>
        <p>{JSON.stringify(user, null, 2)}</p>
      </div>
    </>
  );
};
