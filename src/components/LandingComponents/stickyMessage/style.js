import styled from "styled-components";

export const Container = styled.div``;

export const StickyMessageContainer = styled.div`
  height: auto;
  width: 215px;
  position: sticky;
  right: 20px;
  z-index: 10;
  background-color: transparent;
  border: 1px solid #000000;
  backdrop-filter: blur(20px);
`;

export const StickyMessageText = styled.p`
  max-width: 160px;
  font-family: "NexaRegular";
  font-size: 16px;
`;
