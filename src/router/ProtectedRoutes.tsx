import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserAuthContext } from "../hooks";
import { initAuthUser } from "../data/initial-states";
import { Content, Footer, Header, MainMenu } from "../components/layout";
import type { AuthUser } from "../types";
import { Layout as AntdLayout, message } from "antd";

export const ProtectedRoutes = () => {
  const { user, setUser } = useUserAuthContext();
  const location = useLocation();

  const lsUser = localStorage.getItem("rt-user");

  useEffect(
    function rehydrateContext() {
      if (!lsUser) {
        // ls delete
        message.error("No user data found.");
        setUser({ ...initAuthUser });
        return;
      }
      if (!user.authenticated) {
        // full page reload
        if (lsUser) {
          const parsedLsUser: AuthUser = JSON.parse(lsUser);
          setUser({ ...parsedLsUser });
        } else {
          message.error("No user data found.");
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location]
  );

  return lsUser ? (
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
