import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const tickerScroll = keyframes`
0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(calc(-100% + 100vw));
  }
`;

export const TickerText = styled.p`
  display: inline-block;
  white-space: nowrap;
  margin-top: 210px;
  font-size: 48px;
  animation: ${tickerScroll} 15s linear infinite;
  animation-fill-mode: both;
`;

export const TickerImg = styled.img`
  width: 50px;
  height: 45px;
  margin-left: 15px;
  margin-right: 15px;
`;
