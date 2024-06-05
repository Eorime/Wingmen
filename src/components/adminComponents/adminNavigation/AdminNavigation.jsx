import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AdminElement,
  AdminLogo,
  AdminNavigationContainer,
  Container,
  StyledLink,
} from "./style";
import Logo from "../../../assets/images/Logo.png";
import { routes } from "../../../constants/routes";

const AdminNavigation = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
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
      </AdminNavigationContainer>
    </Container>
  );
};

export default AdminNavigation;
