import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TickerTape from "../../components/LandingComponents/tickerTape/TickerTape";
import Description from "../../components/LandingComponents/description/Description";
import WhatsAppContact from "../../components/LandingComponents/whatsAppContact/WhatsAppContact";
import Contact from "../../components/LandingComponents/contact/Contact";
import { Container } from "./style";
import Footer from "../../components/footer/Footer";
import InquiryForm from "../../components/LandingComponents/inquiryForm/InquiryForm";
import MotionContainer from "../../components/LandingComponents/motionContainer/MotionContainer";
import MessagesContainer from "../../components/LandingComponents/messagesContainer/MessagesContainer";
import Work from "../Work/Work";
import ServicesLanding from "../ServicesLanding/ServicesLanding";
import StickyMessage from "../../components/LandingComponents/stickyMessage/StickyMessage";
import StickyMessageContainer from "../../components/LandingComponents/stickyMessageContainer/StickyMessageContainer";

const Home = () => {
  return (
    <Container id="home">
      <Navbar />
      <TickerTape />
      <Description />
      <MotionContainer />
      <WhatsAppContact />
      <MessagesContainer />
      <Work />
      <StickyMessageContainer />
      <ServicesLanding />
      <Contact />
      <InquiryForm />
      <Footer />
    </Container>
  );
};

export default Home;
