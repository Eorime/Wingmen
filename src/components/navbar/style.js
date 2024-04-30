import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: black;
  position: fixed;
  left: 0px;
  top: 0px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -83px;
  margin-left: 490px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const NavbarElement = styled.p`
  font-size: 28px;
  color: #ffffff;
  margin-right: 255px;
  margin-right: 250px;
`;

export const Logo = styled.img`
  width: 120px;
  height: 87px;
  margin-left: 52px;
  margin-top: 8px;

  &: hover {
    cursor: pointer;
  }
`;

export const LogoBlue = styled.img`
  width: 120px;
  height: 87px;
  margin-left: 52px;
  margin-top: 8px;
`;

export const Line = styled.div`
  background-color: #ffffff;
  width: 3px;
  height: 36px;
  position: absolute;
  margin-left: 225px;
  margin-top: -63px;
`;
