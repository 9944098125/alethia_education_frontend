import Header from "./Header";
import { Outlet } from "react-router-dom";

const HeaderLayout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default HeaderLayout;
