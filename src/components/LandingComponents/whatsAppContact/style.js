import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: auto;
  position: absolute;
  left: 75px;
  top: 880px;
  z-index: -1;
`;

export const WhatsAppContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 1.5px #000000;
  background-color: white;
  padding-bottom: 2px;
  padding-right: 24px;
  padding-left: 13px;
  gap: 15px;
  position: relative;
  box-shadow: 8px -8px 0px 0px black;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: inherit;
  font-size: 24px;
  font-family: "NexaHeavy", sans-serif;
  padding-top: 17px;
  cursor: pointer;
  position: relative;
`;

export const WhatsAppLogo = styled.img`
  width: 32px;
  height: 33px;
  padding-bottom: 11px;
  padding-top: 16px;
`;
