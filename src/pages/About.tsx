import { useAppSelector, useUserAuthContext } from "../hooks";
import { Typography } from "antd";

export const About = () => {
  const { user } = useUserAuthContext();
  const reduxUser = useAppSelector((state) => state.slices.user);

  return (
    <>
      <Typography.Title className="text-center">About</Typography.Title>
      <div>
        <p>Context: {JSON.stringify(user, null, 2)}</p>
        <p>Redux: {JSON.stringify(reduxUser, null, 2)}</p>
      </div>
    </>
  );
};
