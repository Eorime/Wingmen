import React from "react";
import {
  Container,
  MessagesContainerStyle,
  MessageText,
  OneMessageContainer,
  StickyMessageContainer,
  StickyMessageText,
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
      <StickyMessageContainer>
        <StickyMessageText>Sticky vvvar gtxovv imushavee</StickyMessageText>
      </StickyMessageContainer>
    </Container>
  );
};

export default MessagesContainer;
