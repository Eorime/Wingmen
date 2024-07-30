import styled from "styled-components";
import { keyframes } from "styled-components";

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const TickerContainerWrapper = styled.div`
  margin-top: -300px;
`;

export const TickerContainerHeader = styled.h1`
  font-size: 115px;
  font-family: "NexaBold", sans-serif;
  max-width: 1090px;
  color: #0600ff;
  margin-left: 75px;
`;

export const Container = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
`;

export const ClientsTickerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  animation: 20s ${slide} infinite linear;
  display: inline-block;
`;

export const LogoImg = styled.img`
  margin: 0 105px;
`;

export const ClientTickerLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: black;
  margin-top: 50px;
  margin-bottom: -20px;
`;
