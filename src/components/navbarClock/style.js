import styled, { keyframes } from "styled-components";

export const Container = styled.div``;

export const ClockContainer = styled.div`
  position: absolute;
  margin-top: 13px;
  right: 233px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ClockFace = styled.div`
  width: 18px;
  height: 18px;
  border: solid 1px #000000;
  border-radius: 50%;
  position: relative;
  animation: ${rotate} infinite;
`;

export const ClockHand = styled.div`
  position: absolute;
  bottom: 50%;
  top: 50%;
  transform-origin: 50% 100%;
  background: #000000;
`;

export const HourHand = styled(ClockHand)`
  width: 10px;
  height: 1px;
  transform: ${(props) => `translateX(-50%) rotate(${props.rotation}deg)`};
`;

export const MinuteHand = styled(ClockHand)`
  width: 15px;
  height: 1px;
  transform: ${(props) => `translateX(-50%) rotate(${props.rotation}deg)`};
`;
