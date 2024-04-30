import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
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
  display: inline-block;
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
