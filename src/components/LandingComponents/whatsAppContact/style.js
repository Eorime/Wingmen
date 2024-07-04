import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: auto;
  position: absolute;
  left: 220px;
  top: 800px;
  z-index: 1;
`;

export const WhatsAppContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: inherit;
  font-size: 24px;
  font-family: "NexaHeavy", sans-serif;
  cursor: pointer;
  position: relative;
`;

export const WhatsAppLogo = styled.img`
  width: 32px;
  height: 33px;
`;
