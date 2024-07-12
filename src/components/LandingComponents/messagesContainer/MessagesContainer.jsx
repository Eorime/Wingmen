import React from "react";
import {
  Container,
  MessagesContainerStyle,
  MessageText,
  OneMessageContainer,
} from "./style";

const MessagesContainer = () => {
  return (
    <Container>
      {/* <MessagesContainerStyle> */}
      <OneMessageContainer>
        <MessageText>WANNA HAVE A COOL MOTION VID????? </MessageText>
      </OneMessageContainer>
      {/* <OneMessageContainer>
          <MessageText>mesiji var magary da very fun </MessageText>
        </OneMessageContainer> */}
      {/* </MessagesContainerStyle> */}
    </Container>
  );
};

export default MessagesContainer;
