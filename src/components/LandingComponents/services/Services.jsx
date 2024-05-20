import React from "react";
import Navbar from "../../navbar/Navbar";
import ServicesHeader from "../../ServicesComponents/servicesHeader/ServicesHeader";
import { Container } from "./style";
import ServiceList from "../../ServicesComponents/serviceList/ServiceList";

const Services = () => {
  return (
    <Container>
      <Navbar />
      <ServicesHeader />
      <ServiceList />
    </Container>
  );
};

export default Services;
