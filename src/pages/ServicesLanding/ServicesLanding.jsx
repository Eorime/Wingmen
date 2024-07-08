import React from "react";
import { Container, ServicesLandingContainer } from "./style";
import ServicesTicker from "../../components/LandingComponents/servicesLandingTickerTape/ServicesTicker";

const ServicesLanding = () => {
  return (
    <Container>
      <ServicesLandingContainer id="servicesLanding">
        <ServicesTicker></ServicesTicker>
      </ServicesLandingContainer>
    </Container>
  );
};

export default ServicesLanding;
