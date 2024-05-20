import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./style";
import WorkHeader from "../../components/WorkComponents/asd/workHeader/WorkHeader";
import WorkDisplay from "../../components/WorkComponents/workDisplay/WorkDisplay";

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
