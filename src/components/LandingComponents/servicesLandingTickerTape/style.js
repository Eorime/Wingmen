import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 210%;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  z-index: -1;
  left: 0;
  height: 126px;
  bottom: 0;
  background-color: #00ff38;
  padding-top: 15px;
`;

const tickerScroll = keyframes`
0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const TickerText = styled.p`
  margin-top: -5px;
  font-family: "NexaRegular", sans-serif;
  display: inline-block;
  font-size: 96px;
  animation: ${tickerScroll} 50s linear infinite;
  animation-fill-mode: both;
  color: #000000;
  margin-left: -2px;
`;

export const TickerImg = styled.img`
  width: 350px;
  margin-bottom: -105px;
  margin-top: -100px;
  height: auto;
  margin-left: -75px;
  margin-right: -70px;
`;
