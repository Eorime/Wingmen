const home = "/";
const services = "/services";
const portfolio = "/work";
const admin = "/admin";
const adminPosts = `${admin}/projects`;
const addPost = `${admin}/addProject`;
const adminOnePost = `projects/:id`;
const editProject = `projects/:id/edit`;

export const routes = {
  home,
  services,
  portfolio,
  admin,
  adminPosts,
  addPost,
  adminOnePost,
  editProject,
};
