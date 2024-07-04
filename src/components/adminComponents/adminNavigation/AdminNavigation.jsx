import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AdminElement,
  AdminLogo,
  AdminNavigationContainer,
  Container,
  LogOutButton,
  StyledLink,
} from "./style";
import Logo from "../../../assets/images/logos/Logo.png";
import { routes } from "../../../constants/routes";
import { useAuth } from "../../../context/AuthContextProvider";

const AdminNavigation = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  //functions for handling clicks
  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogOut = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <Container>
      <AdminNavigationContainer>
        <AdminLogo onClick={handleLogoClick} src={Logo} />
        <StyledLink to={routes.admin}>
          <AdminElement>ADMIN PANEL</AdminElement>
        </StyledLink>
        <StyledLink to={routes.adminPosts}>
          <AdminElement>PROJECTS</AdminElement>
        </StyledLink>
        <StyledLink to={routes.addPost}>
          <AdminElement>ADD PROJECT</AdminElement>
        </StyledLink>
        <LogOutButton onClick={handleLogOut}>LOG OUT</LogOutButton>
      </AdminNavigationContainer>
    </Container>
  );
};

export default AdminNavigation;
