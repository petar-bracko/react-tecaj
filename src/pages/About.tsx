import { useUserAuthContext } from "../hooks";
import { Typography } from "antd";

export const About = () => {
  const { user } = useUserAuthContext();

  return (
    <>
      <Typography.Title>About</Typography.Title>
      <div>
        <p>{JSON.stringify(user, null, 2)}</p>
      </div>
    </>
  );
};
