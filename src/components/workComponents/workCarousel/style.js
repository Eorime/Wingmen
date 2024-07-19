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
  width: 700px;
  height: 700px;
`;

export const TitleCategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 83%;
`;

export const WorkTitle = styled.h3`
  margin-top: 40px;
  font-size: 20px;
  // margin-left: -345px;
`;

export const WorkCategory = styled.h3`
  margin-top: 40px;
  font-size: 15px;
  // margin-right: -300px;
`;

export const ButtonImage = styled.img`
  width: 60px;
  height: 85px;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  top: -102px;
  left: 400px;
  z-index: 1;
`;

export const PrevButton = styled.div`
  position: absolute;
  left: 90px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const NextButton = styled.div`
  position: absolute;
  left: 200px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const CustomSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .slick-slide > div {
    padding: 0 2px;
    margin-right: -100px;
  }
`;
