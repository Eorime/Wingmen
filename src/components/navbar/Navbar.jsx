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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const scrollToElement = (element) => {
    if (window.location.pathname !== routes.home) {
      navigate(routes.home, { replace: true });
      setTimeout(() => {
        scroller.scrollTo(element, {
          duration: 500,
          smooth: true,
          offset: -70,
        });
      }, 100);
    } else {
      scroller.scrollTo(element, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }
  };

  return (
    <Container>
      <RouterLink to={routes.home}>
        <Logo
          src={isHovered ? LogoBlue : LogoWhite}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </RouterLink>
      <NavbarContainer>
        <StyledLink
          to="home"
          smooth={true}
          duration={500}
          onClick={() => scrollToElement("home")}
        >
          <NavbarElement>HOME</NavbarElement>
          <Line></Line>
        </StyledLink>
        <StyledLink
          to="work"
          smooth={true}
          duration={500}
          onClick={() => scrollToElement("work")}
        >
          <NavbarElement>WORK</NavbarElement>
          <Line></Line>
        </StyledLink>
        <StyledLink
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => scrollToElement("contact")}
        >
          <NavbarContact>CONTACT</NavbarContact>
          <Line></Line>
        </StyledLink>
        <StyledLink
          to="services"
          smooth={true}
          duration={500}
          onClick={() => scrollToElement("services")}
        >
          <NavbarServices>SERVICES</NavbarServices>
          <Line></Line>
        </StyledLink>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
