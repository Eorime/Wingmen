import React, { useState } from "react";
import { Container, Logo } from "./style";
import LogoWhite from "../../assets/images/Logo.png";
import LogoBlue from "../../assets/images/Logo-blue.png";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const Navbar = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = () => {
    navigate(routes.home);
  };

  return (
    <Container>
      <Logo
        onClick={handleNavigate}
        src={isHovered ? LogoBlue : LogoWhite}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </Container>
  );
};

export default Navbar;
