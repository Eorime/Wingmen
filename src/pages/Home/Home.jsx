import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Element } from "react-scroll";
import TickerTape from "../../components/LandingComponents/tickerTape/TickerTape";
import Purpose from "../../components/LandingComponents/purpose/Purpose";
import Description from "../../components/LandingComponents/description/Description";
import WhatsAppContact from "../../components/LandingComponents/whatsAppContact/WhatsAppContact";
import Work from "../../pages/Work/Work";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
