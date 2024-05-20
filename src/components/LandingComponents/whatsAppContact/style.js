import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: auto;
  position: absolute;
  left: 120px;
  top: 1200px;
  background-color: #d9d9d9;
  font-size: 48px;
  padding: 5px;
  z-index: -1;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
