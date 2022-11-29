import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const HeaderLayout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default HeaderLayout;
