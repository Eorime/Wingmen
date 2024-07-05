import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Element } from "react-scroll";
import TickerTape from "../../components/LandingComponents/tickerTape/TickerTape";
import Description from "../../components/LandingComponents/description/Description";
import WhatsAppContact from "../../components/LandingComponents/whatsAppContact/WhatsAppContact";
import Contact from "../../components/LandingComponents/contact/Contact";
import Services from "../../components/LandingComponents/services/Services";
import { Container } from "./style";
import Footer from "../../components/footer/Footer";
import InquiryForm from "../../components/LandingComponents/inquiryForm/InquiryForm";
import MotionContainer from "../../components/LandingComponents/motionContainer/MotionContainer";
import MessagesContainer from "../../components/LandingComponents/messagesContainer/MessagesContainer";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <TickerTape />
      <Description />
      <MotionContainer />
      <WhatsAppContact />
      <MessagesContainer />
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
