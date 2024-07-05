import { routes } from "../constants/routes";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import ServicesLanding from "../pages/ServicesLanding/ServicesLanding";
import Admin from "../pages/Admin/Admin";
import AdminPosts from "../pages/AdminPosts/AdminPosts";
import AdminAddPost from "../pages/AdminAddPost/AdminAddPost";
import AdminOnePost from "../pages/AdminOnePost/AdminOnePost";
import AdminEditPost from "../pages/AdminEditPost/AdminEditPost";
import AdminMessages from "../pages/AdminMessages/AdminMessages";
import AdminAddMessage from "../pages/AdminAddMessage/AdminAddMessage";
import Login from "../pages/Login/Login";
import RequireAuth from "../components/requireAuth/RequireAuth";

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
  {
    path: routes.admin,
    Component: () => (
      <RequireAuth>
        <Admin />
      </RequireAuth>
    ),
  },
  {
    path: routes.adminPosts,
    Component: () => (
      <RequireAuth>
        <AdminPosts />
      </RequireAuth>
    ),
  },
  {
    path: routes.adminOnePost,
    Component: () => (
      <RequireAuth>
        <AdminOnePost />
      </RequireAuth>
    ),
  },
  {
    path: routes.addPost,
    Component: () => (
      <RequireAuth>
        <AdminAddPost />
      </RequireAuth>
    ),
  },
  {
    path: routes.editProject,
    Component: () => (
      <RequireAuth>
        <AdminEditPost />
      </RequireAuth>
    ),
  },
  {
    path: routes.messages,
    Component: () => (
      <RequireAuth>
        <AdminMessages />
      </RequireAuth>
    ),
  },
  {
    path: routes.addMessage,
    Component: () => (
      <RequireAuth>
        <AdminAddMessage />
      </RequireAuth>
    ),
  },
  {
    path: routes.login,
    Component: Login,
  },
];
