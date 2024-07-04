import React from "react";
import {
  Container,
  StyledLink,
  WhatsAppContainerStyle,
  WhatsAppLogo,
} from "./style";
import WALogo from "../../../assets/images/logos/whatsappLogo.png";

const WhatsAppContact = () => {
  return (
    <Container>
      <WhatsAppContainerStyle>
        <WhatsAppLogo src={WALogo} />
        <StyledLink as="a" href="http://wa.me/995599783532" target="_blank">
          {" "}
          WhatsApp
        </StyledLink>
      </WhatsAppContainerStyle>
    </Container>
  );
};

export default WhatsAppContact;
