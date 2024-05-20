import { routes } from "../constants/routes";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Services from "../pages/Services/Services";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.services,
    Component: Services,
  },
  {
    path: routes.portfolio,
    Component: Portfolio,
  },
];
