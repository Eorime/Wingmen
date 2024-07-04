import React, { useEffect, useState } from "react";
import {
  Container,
  Logo,
  NavbarContainer,
  NavbarElement,
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
        <Logo src={LogoNew} />
        <StyledLink>
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
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
