import styled from "styled-components";

export const Container = styled.div``;

export const MessagesContainerStyle = styled.div`
  min-height: 100%;
  background-color: transparent;
  width: 265px;
  position: fixed;
  right: 0px;
  top: -93px;
  z-index: 2;
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const OneMessageContainer = styled.div`
  height: auto;
  width: 215px;
  padding-left: 6px;
  margin-left: 0px;
  background-color: transparent;
  border: 1px solid #000000;
  backdrop-filter: blur(20px);
`;

export const MessageText = styled.p`
  max-width: 160px;
  font-family: "NexaRegular";
  font-size: 16px;
`;
