import React from "react";
import Navbar from "../../navbar/Navbar";
import { Container } from "./style";
import WorkHeader from "../../WorkComponents/workHeader/WorkHeader";
import WorkDisplay from "../../WorkComponents/workDisplay/WorkDisplay";

const Work = () => {
  return (
    <Container>
      <Navbar />
      <WorkHeader />
      <WorkDisplay />
    </Container>
  );
};

export default Work;
