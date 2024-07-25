import React from "react";
import {
  Container,
  WorkCarouselContainer,
  WorkContainer,
  WorkImage,
  WorkTitle,
  PrevButton,
  NextButton,
  ButtonImage,
  CustomSlider,
  ButtonsContainer,
  WorkCategory,
  TitleCategoryContainer,
} from "./style"; // Ensure correct path to style.js
import ImageCarousel from "../../../assets/image (17).png";
import ImageCarousel2 from "../../../assets/image (17).png";
import ImageCarousel3 from "../../../assets/image (17).png";
import LeftButton from "../../../assets/images/icons/carouselButtons/leftArrow.png";
import RightButton from "../../../assets/images/icons/carouselButtons/rightArrow.png";
// Import slick-carousel css files from node_modules
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkCarousel = () => {
  const slides = [
    { image: ImageCarousel, title: "TITLE 1", category: "CATEGORY 1" },
    { image: ImageCarousel2, title: "TITLE 2", category: "CATEGORY 2" },
    { image: ImageCarousel3, title: "TITLE 3", category: "CATEGORY 3" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  let customSlider;

  const nextSlide = () => {
    customSlider.slickNext();
  };

  const previousSlide = () => {
    customSlider.slickPrev();
  };

  return (
    <Container>
      <WorkCarouselContainer>
        <CustomSlider {...settings} ref={(slider) => (customSlider = slider)}>
          {slides.map((slide, index) => (
            <WorkContainer key={index}>
              <WorkImage src={slide.image} alt={slide.title} />
              <TitleCategoryContainer>
                <WorkTitle>{slide.title}</WorkTitle>
                <WorkCategory>{slide.category}</WorkCategory>
              </TitleCategoryContainer>
            </WorkContainer>
          ))}
        </CustomSlider>
      </WorkCarouselContainer>
      <ButtonsContainer>
        <PrevButton onClick={previousSlide}>
          <ButtonImage src={LeftButton} />
        </PrevButton>
        <NextButton onClick={nextSlide}>
          <ButtonImage src={RightButton} />
        </NextButton>
      </ButtonsContainer>
    </Container>
  );
};

export default WorkCarousel;
