import { routes } from "../constants/routes";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Services from "../components/LandingComponents/services/Services";
import ServicesLanding from "../pages/ServicesLanding/ServicesLanding";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.services,
    Component: ServicesLanding,
  },
  {
    path: routes.portfolio,
    Component: Portfolio,
  },
];
