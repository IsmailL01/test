import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  {
    path: "/",
    text: "home",
  },
  {
    path: "/about",
    text: "about",
  },
  {
    path: "/contactWithMe",
    text: "contactWithMe",
  },
];

const Layout = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        {navItems.map(({ path, text }) => {
          return <NavLink to={path}>{text}</NavLink>;
        })}
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
