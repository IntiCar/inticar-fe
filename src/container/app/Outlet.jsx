import React from "react";
import { Outlet } from "react-router-dom";

import PageContainer from "@/components/templates/PageContainer";

export const PageContainerLayout = () => {
  return (
    <React.Fragment>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </React.Fragment>
  );
};
