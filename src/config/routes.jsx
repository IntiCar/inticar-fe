import { pathnameConfig } from "@/constant/pathnameConfig";
import { ExamplePages } from "@/container/pages/index";

export const BeforeLoginRoutes = [];

export const AppRoutes = [
  {
    path: pathnameConfig.ROOT_URL,
    component: <ExamplePages />,
    exact: true,
  },
];
