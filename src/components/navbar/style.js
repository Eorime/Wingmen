import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 86px;
  background-color: #cecac1;
  position: fixed;
  left: 0px;
  top: 0px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &: hover {
    cursor: pointer;
  }
`;

export const NavbarElement = styled.p`
  font-size: 16px;
`;

export const NavbarContact = styled.p``;

export const NavbarServices = styled.p``;

export const Logo = styled.img``;

export const LogoBlue = styled.img``;
