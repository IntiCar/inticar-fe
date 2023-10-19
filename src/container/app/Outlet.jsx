import React from "react";
import { Outlet } from "react-router-dom";

export const PageContainerLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};
