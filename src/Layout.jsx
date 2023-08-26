import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "@components/Navigation";

import "@styles/index.scss";

const Layout = () => (
  <Fragment>
    <Navigation />
    <Outlet />
  </Fragment>
);

export default Layout;