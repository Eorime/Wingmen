import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TickerTape from "../../components/LandingComponents/tickerTape/TickerTape";
import Purpose from "../../components/LandingComponents/purpose/Purpose";
import Description from "../../components/LandingComponents/description/Description";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TickerTape />
      <Description />
      <Purpose />
    </div>
  );
};

export default Home;
