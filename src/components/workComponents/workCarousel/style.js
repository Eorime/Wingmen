import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  width: 82%;
  margin: auto;
  position: absolute;
  left: 70px;
  top: 1330px;
`;

export const WorkCarouselContainer = styled.div`
  position: relative;
`;

export const WorkContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
`;

export const WorkImage = styled.img`
  width: 710px;
  height: 710px;
`;

export const WorkTitle = styled.h3`
  margin-top: 10px;
`;

export const ButtonImage = styled.img`
  width: 65px;
  height: 90px;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  top: -106px;
  left: 400px;
`;

export const PrevButton = styled.div`
  position: absolute;
  left: 90px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
`;

export const NextButton = styled.div`
  position: absolute;
  left: 200px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
`;

export const CustomSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .slick-slide > div {
    padding: 0 5px;
  }
`;
