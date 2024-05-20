import React, { useState } from "react";
import {
  Container,
  Line,
  Logo,
  NavbarContact,
  NavbarContainer,
  NavbarElement,
  NavbarServices,
  StyledLink,
} from "./style";
import LogoWhite from "../../assets/images/Logo.png";
import LogoBlue from "../../assets/images/Logo-blue.png";
import { Link } from "react-scroll";
import { routes } from "../../constants/routes";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <Logo
        src={isHovered ? LogoBlue : LogoWhite}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        to={routes.home}
      />
      <NavbarContainer>
        <StyledLink to="home" smooth={true} duration={500}>
          <NavbarElement>HOME</NavbarElement>
          <Line></Line>
        </StyledLink>
        <StyledLink to="work" smooth={true} duration={500}>
          <NavbarElement>WORK</NavbarElement>
          <Line></Line>
        </StyledLink>
        <StyledLink to="contact" smooth={true} duration={500}>
          <NavbarContact>CONTACT</NavbarContact>
          <Line></Line>
        </StyledLink>
        <StyledLink to="services" smooth={true} duration={500}>
          <NavbarServices>SERVICES</NavbarServices>
          <Line></Line>
        </StyledLink>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
