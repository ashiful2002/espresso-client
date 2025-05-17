import React from "react";
import Navabr from "../Layout/Header/NAvabr";
import { Outlet } from "react-router";
import Footer from "../Layout/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navabr />
      <div className="container mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
