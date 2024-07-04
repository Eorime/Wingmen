import React from "react";
import {
  Container,
  DescriptionContainer,
  DescriptionHeader,
  DescriptionSubHeader,
  DescriptionText,
} from "./style";

const Description = () => {
  return (
    <Container>
      <DescriptionContainer>
        <DescriptionHeader>WINGMEN</DescriptionHeader>
        <DescriptionSubHeader>/ˈwɪŋmən/</DescriptionSubHeader>
        <DescriptionText>
          in the skies of entrepreneurship full of ups and downs, [wingman],
          represents your helper who supports from behind, below, above, and to
          the side.
        </DescriptionText>
      </DescriptionContainer>
    </Container>
  );
};

export default Description;
