import { useLogout, useUserAuthContext } from "../../hooks";
import { Layout, Dropdown } from "antd";
import type { MenuProps } from "antd";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  const logout = useLogout();
  const { user } = useUserAuthContext();

  const items: MenuProps["items"] = [
    {
      key: "logout",
      label: (
        <span className="text-red" onClick={logout}>
          Logout
        </span>
      ),
    },
  ];

  return (
    <AntdHeader className="layout-header">
      <div className="header-content">
        <div className="app-logo">app_logo.jpeg</div>
        <div className="user-controls">
          <Dropdown menu={{ items }}>
            <span>{user.username || "unknown"}</span>
          </Dropdown>
        </div>
      </div>
    </AntdHeader>
  );
};
