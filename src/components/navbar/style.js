import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: #e8e7e2;
  position: fixed;
  left: 0px;
  top: 0px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 18px;
  padding-left: 340px;
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
  margin-right: 138px;
`;

export const NavClockContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4px;
`;

export const NavClock = styled.p`
  font-size: 16px;
  position: absolute;
  right: 155px;
`;

export const NavClockZone = styled.p`
  font-size: 16px;
  position: absolute;
  margin-left: 115px;
  right: 55px;
`;

export const NavbarContact = styled.p``;

export const NavbarServices = styled.p``;

export const Logo = styled.img`
  width: 100px;
  position: absolute;
  top: 3px;
  left: 70px;
`;
