import Home from "../page/Home";
import MainLayoutPage from "../page/MainLayoutPage";
import config from "../config";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path:config.routes.mainLayoutPage,
    component: MainLayoutPage,
    layout: null,
  },
];

export { publicRoutes };
