import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  z-index: -1;
  left: 0;
  height: 63px;
  bottom: 0;
  background-color: #171717;
  padding-top: 5px;
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
  font-size: 40px;
  animation: ${tickerScroll} 30s linear infinite;
  animation-fill-mode: both;
  color: #ffffff;
`;

export const TickerImg = styled.img`
  width: 120px;
  margin-bottom: -35px;
  margin-top: -10px;
  height: auto;
`;
