import React from "react";
import { Container, StickyMessageContainer, StickyMessageText } from "./style";

const StickyMessage = () => {
  return (
    <Container>
      <StickyMessageContainer>
        <StickyMessageText>I'm a sticky message</StickyMessageText>
      </StickyMessageContainer>
    </Container>
  );
};

export default StickyMessage;
