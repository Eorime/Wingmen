import { routes } from "../constants/routes";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import ServicesLanding from "../pages/ServicesLanding/ServicesLanding";
import Admin from "../pages/Admin/Admin";
import { Component } from "react";
import AdminPosts from "../pages/AdminPosts/AdminPosts";
import AdminAddPost from "../pages/AdminAddPost/AdminAddPost";
import AdminOnePost from "../pages/AdminOnePost/AdminOnePost";

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
    Component: Admin,
  },
  {
    path: routes.adminPosts,
    Component: AdminPosts,
  },
  {
    path: routes.adminOnePost,
    Component: AdminOnePost,
  },
  {
    path: routes.addPost,
    Component: AdminAddPost,
  },
];
