import { pathnameConfig } from "@/constant/pathnameConfig";
import { Home } from "@/container/pages/index";

export const BeforeLoginRoutes = [];

export const AppRoutes = [
  {
    path: pathnameConfig.ROOT_URL,
    component: <Home />,
    exact: true,
  },
];
