import React from "react";
import {
  ClientsTickerContainer,
  Container,
  LogoImg,
  TickerContainerHeader,
  TickerContainerWrapper,
} from "./style";
import DBlock from "../../../assets/images/logos/clientLogos/dblock.png";
import Stamba from "../../../assets/images/logos/clientLogos/stamba.png";
import Cafe from "../../../assets/images/logos/clientLogos/cafe.png";
import Rooms from "../../../assets/images/logos/clientLogos/rooms.png";
import Lolita from "../../../assets/images/logos/clientLogos/lolita.png";
import Sabuko from "../../../assets/images/logos/clientLogos/sabuko.png";
import Tsur from "../../../assets/images/logos/clientLogos/tsur.png";
import Dovlati from "../../../assets/images/logos/clientLogos/dovlati.png";

const ClientsTickerTape = () => {
  return (
    <TickerContainerWrapper>
      <TickerContainerHeader>COMPANIES WE'VE WORKED WITH</TickerContainerHeader>
      <Container>
        <ClientsTickerContainer>
          <LogoImg src={DBlock} />
          <LogoImg src={Stamba} />
          <LogoImg src={Cafe} />
          <LogoImg src={Rooms} />
          <LogoImg src={Lolita} />
          <LogoImg src={Sabuko} />
          <LogoImg src={Tsur} />
          <LogoImg src={Dovlati} />
        </ClientsTickerContainer>
        <ClientsTickerContainer>
          <LogoImg src={DBlock} />
          <LogoImg src={Stamba} />
          <LogoImg src={Cafe} />
          <LogoImg src={Rooms} />
          <LogoImg src={Lolita} />
          <LogoImg src={Sabuko} />
          <LogoImg src={Tsur} />
          <LogoImg src={Dovlati} />
        </ClientsTickerContainer>
      </Container>
    </TickerContainerWrapper>
  );
};

export default ClientsTickerTape;
