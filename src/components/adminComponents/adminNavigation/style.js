import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const AdminNavigationContainer = styled.div`
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &: hover {
    cursor: pointer;
  }
`;

export const AdminElement = styled.p`
  color: white;
  margin-left: 50px;
  font-size: 18px;
  margin-top: 30px;
`;

export const AdminLogo = styled.img`
  width: 150px;
  margin-top: 20px;
  align-self: center;
  margin-bottom: 20px;

  &: hover {
    cursor: pointer;
  }
`;

export const LogOutButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  padding: 0px;
  font-family: "FHWA", Arial, Helvetica, sans-serif;
  margin-top: 80%;
  margin-left: -35%;

  &:hover {
    cursor: pointer;
  }
`;
