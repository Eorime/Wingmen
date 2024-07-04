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
  margin-top: 13px;
  font-family: "NexaRegular", sans-serif;
  display: inline-block;
  font-size: 40px;
  animation: ${tickerScroll} 30s linear infinite;
  animation-fill-mode: both;
  color: #ffffff;
`;

export const TickerImg = styled.img`
  width: 50px;
  height: 29px;
  margin-left: 15px;
  margin-right: 15px;
`;
