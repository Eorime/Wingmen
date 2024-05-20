import React from "react";
import ServicesHeader from "../../components/ServicesComponents/servicesHeader/ServicesHeader";
import ServiceList from "../../components/ServicesComponents/serviceList/ServiceList";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./style";

const ServicesLanding = () => {
  return (
    <Container>
      <Navbar />
      <ServicesHeader />
      <ServiceList />
    </Container>
  );
};

export default ServicesLanding;
