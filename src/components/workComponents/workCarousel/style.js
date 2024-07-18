import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  position: absolute;
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
  width: 100%;
  height: auto;
`;

export const WorkTitle = styled.h3`
  margin-top: 10px;
`;

export const ButtonImage = styled.img`
  width: 65px;
  height: 90px;
`;

export const ButtonsContainer = styled.div``;

export const PrevButton = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
`;

export const NextButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
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
    padding: 0 10px;
  }
`;
