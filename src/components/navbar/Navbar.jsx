import React, { useEffect, useState } from "react";
import {
  Container,
  Logo,
  NavbarContainer,
  NavbarElement,
  NavbarLine,
  NavClock,
  NavClockContainer,
  NavClockZone,
  StyledLink,
} from "./style";
import LogoNew from "../../assets/images/logos/wingmen_new_logo-15.png";
import NavbarClock from "../navbarClock/NavbarClock";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  });

  const timeFormat = (date) => {
    const options = {
      timeZone: "Asia/Tbilisi",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return date.toLocaleTimeString("en-US", options);
  };

  return (
    <Container>
      <NavbarContainer>
        <StyledLink to="home" smooth={true} duration={600}>
          <Logo src={LogoNew} />
        </StyledLink>
        <StyledLink to="work" smooth={true} duration={600}>
          {" "}
          <NavbarElement>WORK</NavbarElement>
        </StyledLink>
        <StyledLink>
          {" "}
          <NavbarElement>SERVICES</NavbarElement>
        </StyledLink>
        <StyledLink>
          {" "}
          <NavbarElement>CONTACT</NavbarElement>
        </StyledLink>
        <NavClockContainer>
          <NavbarClock />
          <NavClock>{timeFormat(time)}</NavClock>
          <NavClockZone>Tbilisi</NavClockZone>
        </NavClockContainer>
        <NavbarLine />
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
