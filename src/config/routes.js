import { routes } from "../constants/routes";
import Home from "../pages/Home/Home";
import About from "../pages/About/Services";
import Contact from "../pages/Contact/Contact";
import Work from "../pages/Work/Work";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.services,
    Component: About,
  },
  {
    path: routes.contact,
    Component: Contact,
  },
  {
    path: routes.work,
    Component: Work,
  },
];
