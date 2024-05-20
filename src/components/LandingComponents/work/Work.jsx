import React from "react";
import { Container, MoreButton, WorkHead, WorksContainer } from "./style";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();

  const handleMoreButton = function () {
    navigate("/portfolio");
  };

  return (
    <Container>
      COMPANIES WE'VE WORKED WITH
      <WorkHead>WORK</WorkHead>
      <WorksContainer></WorksContainer>
      <MoreButton onClick={handleMoreButton}>MORE</MoreButton>
    </Container>
  );
};

export default Work;
