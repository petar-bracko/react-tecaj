import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { Content, Footer, Header, MainMenu } from "../components/layout";
import { Layout as AntdLayout, message } from "antd";
import { useEffect } from "react";

export const ProtectedRoutes = () => {
  const reduxUser = useAppSelector((state) => state.slices.user);

  useEffect(() => {
    if (!reduxUser.authenticated) {
      message.warning("Unknown user data. Please login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return reduxUser.authenticated ? (
    <AntdLayout className="layout-parent">
      <Header />
      <AntdLayout>
        <MainMenu />
        <AntdLayout>
          <Content />
          <Footer />
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};
