import { routes } from "../constants/routes";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Work from "../pages/Work/Work";
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
    path: routes.contact,
    Component: Contact,
  },
  {
    path: routes.work,
    Component: Work,
  },
];
