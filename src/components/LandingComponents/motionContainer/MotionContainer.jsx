import React from "react";
import { Container, MotionDesignContainer, TempImage } from "./style";
import TemporaryMotionImage from "../../../assets/images/image (13).png";

const MotionContainer = () => {
  return (
    <Container>
      <MotionDesignContainer>
        <TempImage src={TemporaryMotionImage} />
      </MotionDesignContainer>
    </Container>
  );
};

export default MotionContainer;
