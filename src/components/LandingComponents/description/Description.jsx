import React from "react";
import {
  Container,
  DescriptionContainer,
  DescriptionHeader,
  DescriptionIcon,
  DescriptionLineOne,
  DescriptionLineThree,
  DescriptionLineTwo,
  DescriptionSubHeader,
  DescriptionText,
  M19,
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
      <DescriptionLineOne />
      <DescriptionLineTwo />
      <DescriptionLineThree />
      <M19>M-19</M19>
    </Container>
  );
};

export default Description;
