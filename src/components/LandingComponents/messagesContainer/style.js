import styled from "styled-components";

export const Container = styled.div``;

export const MessagesContainerStyle = styled.div`
  min-height: 100%;
  background-color: #cecac146;
  width: 265px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -3;
`;

export const OneMessageContainer = styled.div`
  height: auto;
  width: 205px;
  padding-left: 6px;
  margin-left: 35px;
  background-color: white;
  margin-top: 180px;
  gap: 27px;
  border: 1px solid #aeaeae;
  position: absolute;
`;

export const MessageText = styled.p`
  max-width: 120px;
  font-family: "NexaRegular";
  font-size: 11px;
`;
