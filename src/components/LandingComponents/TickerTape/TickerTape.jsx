import React from "react";
import { Container, TickerImg, TickerText } from "./style";
import TickerIcon from "../../../assets/images/icons/star_white-16.png";

const TickerTape = () => {
  return (
    <Container>
      <TickerText>
        <TickerImg src={TickerIcon} />
        WINGMEN IS A DESIGN STUDIO
        <TickerImg src={TickerIcon} />
        WINGMEN IS A DESIGN STUDIO
        <TickerImg src={TickerIcon} />
        WINGMEN IS A DESIGN STUDIO
        <TickerImg src={TickerIcon} />
        WINGMEN IS A DESIGN STUDIO
      </TickerText>
      <TickerText>
        <TickerImg src={TickerIcon} />
        WINGMEN IS A DESIGN STUDIO
        <TickerImg src={TickerIcon} />
        WINGMEN IS A DESIGN STUDIO
        <TickerImg src={TickerIcon} />
        WINGMEN IS A DESIGN STUDIO
        <TickerImg src={TickerIcon} />
        WINGMEN IS A DESIGN STUDIO
      </TickerText>
    </Container>
  );
};

export default TickerTape;
