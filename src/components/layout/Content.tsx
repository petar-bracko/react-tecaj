import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const { Content: AntdContent } = Layout;

export const Content = () => (
  <AntdContent className="layout-content">
    <Outlet />
  </AntdContent>
);
