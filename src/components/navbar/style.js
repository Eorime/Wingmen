import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: transparent;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 2;
  z-index: 2;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 18px;
  padding-left: 210px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &: hover {
    cursor: pointer;
  }
`;

export const NavbarElement = styled.p`
  font-size: 18px;
  margin-right: 175px;
`;

export const NavClockContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4px;
`;

export const NavClock = styled.p`
  font-size: 16px;
  position: absolute;
  right: 165px;
`;

export const NavClockZone = styled.p`
  font-size: 16px;
  position: absolute;
  margin-left: 115px;
  right: 44px;
`;

export const Logo = styled.img`
  width: 100px;
  position: absolute;
  top: 3px;
  left: 70px;
  cursor: pointer;
`;

export const NavbarLine = styled.div`
  width: 73%;
  height: 1px;
  position: absolute;
  background-color: #000000;
  left: 210px;
  bottom: 0;
  z-index: 3;
`;
