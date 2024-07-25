import styled from "styled-components";

export const Container = styled.div`
  min-height: 1000vh;
`;

// export const MessagesContainerStyle = styled.div`
//   min-height: 100%;
//   background-color: transparent;
//   width: 265px;
//   position: fixed;
//   right: 0px;
//   top: -93px;
//   z-index: 2;
//   padding-top: 180px;
//   display: flex;
//   flex-direction: column;
//   gap: 27px;
// `;

export const OneMessageContainer = styled.div`
  height: auto;
  width: 215px;
  position: fixed;
  z-index: 2;
  top: 85px;
  right: 40px;
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

export const StickyMessageContainer = styled.div`
  position: sticky;
  height: auto;
  width: 215px;
  top: 220px;
  left: 86.2%;
  padding-left: 6px;
  margin-top: 650px;
  background-color: transparent;
  border: 1px solid #000000;
  backdrop-filter: blur(20px);
  z-index: 2;
`;

export const StickyMessageText = styled.p`
  max-width: 160px;
  font-family: "NexaRegular";
  font-size: 16px;
`;
