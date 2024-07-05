const home = "/";
const services = "/services";
const portfolio = "/work";
const admin = "/admin";
const adminPosts = `${admin}/projects`;
const addPost = `${admin}/addProject`;
const adminOnePost = `projects/:id`;
const editProject = `projects/:id/edit`;
const messages = `${admin}/messages`;
const addMessage = `${admin}/addMessage`;
const login = "/login";

export const routes = {
  home,
  services,
  portfolio,
  admin,
  adminPosts,
  addPost,
  adminOnePost,
  editProject,
  login,
  messages,
  addMessage,
};
