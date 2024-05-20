import React from "react";
import {
  Container,
  MoreWorkButton,
  WorkContainer,
  WorkHeaderText,
} from "./style";

const WorkDisplay = () => {
  return (
    <Container>
      <WorkHeaderText>WORK</WorkHeaderText>
      <WorkContainer></WorkContainer>
      <MoreWorkButton>MORE</MoreWorkButton>
    </Container>
  );
};

export default WorkDisplay;
