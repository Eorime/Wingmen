import React from "react";
import { Container, WorkContainer, WorkHeader, WorkIcon } from "./style";
import WorkImg from "../../../src/assets/images/icons/TapeIcon.png";
import WorkCarousel from "../../components/workComponents/workCarousel/WorkCarousel";

const Work = () => {
  return (
    <Container>
      <WorkContainer>
        <WorkHeader id="work">WORK</WorkHeader>
        <WorkIcon src={WorkImg} />
        <WorkCarousel />
      </WorkContainer>
    </Container>
  );
};

export default Work;
