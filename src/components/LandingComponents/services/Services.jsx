import React from "react";
import Navbar from "../../navbar/Navbar";
import {
  Container,
  ServiceContainer,
  ServiceElement,
  ServicesHeader,
} from "./style";

const Services = () => {
  return (
    <Container>
      <ServiceContainer>
        <ServicesHeader>SERVICES</ServicesHeader>
        <ServiceElement></ServiceElement>
        <ServiceElement></ServiceElement>
        <ServiceElement></ServiceElement>
        <ServiceElement></ServiceElement>
      </ServiceContainer>
    </Container>
  );
};

export default Services;
