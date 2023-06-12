import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";

const { Sider } = Layout;

export const MainMenu = () => {
  const items: MenuProps["items"] = [
    {
      key: "home-page",
      label: <NavLink to="/home">Home</NavLink>,
    },
    {
      key: "about-page",
      label: <NavLink to="/about">About</NavLink>,
    },
    {
      key: "forms-page",
      label: <NavLink to="/forms">Forms</NavLink>,
    },
    {
      key: "pokemon-page",
      label: <NavLink to="/pokemon">Pokemon API</NavLink>,
    },
    {
      key: "redux-page",
      label: <NavLink to="/redux">Redux</NavLink>,
    },
    {
      key: "zustand-page",
      label: <NavLink to="/zustand">Zustand</NavLink>,
    },
  ];

  return (
    <Sider className="layout-sider">
      <Menu items={items} theme="dark" />
    </Sider>
  );
};
