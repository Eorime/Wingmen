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
      <MessagesContainerStyle>
        <OneMessageContainer>
          <MessageText>
            ooh fancy pants rich mcgill over here, fuck you
          </MessageText>
        </OneMessageContainer>
        <OneMessageContainer>
          <MessageText>
            ooh fancy pants rich mcgill over here, fuck you
          </MessageText>
        </OneMessageContainer>
      </MessagesContainerStyle>
    </Container>
  );
};

export default MessagesContainer;
