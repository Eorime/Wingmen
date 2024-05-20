import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ServicesHeader from "../../components/ServicesComponents/servicesHeader/ServicesHeader";
import { Container } from "./style";
import ServiceList from "../../components/ServicesComponents/serviceList/ServiceList";

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
