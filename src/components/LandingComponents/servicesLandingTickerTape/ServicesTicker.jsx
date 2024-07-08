import React from "react";
import { Container, TickerImg, TickerText } from "./style";
import ServicesTickerImg from "../../../assets/images/icons/star_white-16.png";

const ServicesTicker = () => {
  return (
    <Container>
      <TickerText>
        <TickerImg src={ServicesTickerImg} />
        WINGMEN SERVICES <TickerImg src={ServicesTickerImg} />
        WINGMEN SERVICES <TickerImg src={ServicesTickerImg} />
        WINGMEN SERVICES <TickerImg src={ServicesTickerImg} />
        WINGMEN SERVICES
      </TickerText>
      <TickerText>
        <TickerImg src={ServicesTickerImg} />
        WINGMEN SERVICES <TickerImg src={ServicesTickerImg} />
        WINGMEN SERVICES <TickerImg src={ServicesTickerImg} />
        WINGMEN SERVICES <TickerImg src={ServicesTickerImg} />
        WINGMEN SERVICES
      </TickerText>
    </Container>
  );
};

export default ServicesTicker;
