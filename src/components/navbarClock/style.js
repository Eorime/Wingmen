import styled, { keyframes } from "styled-components";

export const Container = styled.div``;

export const ClockContainer = styled.div`
  position: absolute;
  top: 35px;
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
`;

export const ClockHand = styled.div`
  position: absolute;
  top: 51%;
  left: 45%;
  transform-origin: center bottom;
  background: #000000;
`;

export const HourHand = styled(ClockHand)`
  width: 1px;
  height: 6px;
  transform: ${(props) =>
    `translate(-50%, -100%) rotate(${props.rotation}deg)`};
`;

export const MinuteHand = styled(ClockHand)`
  width: 1px;
  height: 7px;
  transform: ${(props) =>
    `translate(-50%, -100%) rotate(${props.rotation}deg)`};
`;
