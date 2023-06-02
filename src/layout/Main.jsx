import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Main = () => {
  const location = useLocation();
  const noheaderFooter = location.pathname.includes("signin") ||location.pathname.includes("signup") ;
  return (
    <div>
      {noheaderFooter || <Navbar />}
      <Outlet />
      {noheaderFooter || <Footer />}
    </div>
  );
};

export default Main;
