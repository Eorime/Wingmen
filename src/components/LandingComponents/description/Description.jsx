import React from "react";
import {
  Container,
  DescriptionContainer,
  DescriptionHeader,
  DescriptionIcon,
  DescriptionSubHeader,
  DescriptionText,
} from "./style";
import DescripIcon from "../../../assets/images/icons/TapeIcon.png";

const Description = () => {
  return (
    <Container>
      <DescriptionContainer>
        <DescriptionHeader>WINGMEN</DescriptionHeader>
        <DescriptionIcon src={DescripIcon} />
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
