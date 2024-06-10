import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Element } from "react-scroll";
import TickerTape from "../../components/LandingComponents/tickerTape/TickerTape";
import Purpose from "../../components/LandingComponents/purpose/Purpose";
import Description from "../../components/LandingComponents/description/Description";
import WhatsAppContact from "../../components/LandingComponents/whatsAppContact/WhatsAppContact";
import Work from "../../components/LandingComponents/work/Work";
import Contact from "../../components/LandingComponents/contact/Contact";
import Services from "../../components/LandingComponents/services/Services";
import { Container } from "./style";
import Footer from "../../components/footer/Footer";
import InquiryForm from "../../components/LandingComponents/inquiryForm/InquiryForm";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Element name="home">
        <TickerTape />
      </Element>
      <Element name="description">
        <Description />
      </Element>
      <Element name="purpose">
        <Purpose />
      </Element>
      <Element name="whatsAppContact">
        <WhatsAppContact />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <InquiryForm />
      <Footer />
    </Container>
  );
};

export default Home;
