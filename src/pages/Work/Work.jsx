import React from "react";
import { Container, WorkContainer, WorkHeader, WorkIcon } from "./style";
import WorkImg from "../../../src/assets/images/icons/TapeIcon.png";

const Work = () => {
  return (
    <Container>
      <WorkContainer>
        <WorkHeader>WORK</WorkHeader>
        <WorkIcon src={WorkImg} />
      </WorkContainer>
    </Container>
  );
};

export default Work;
