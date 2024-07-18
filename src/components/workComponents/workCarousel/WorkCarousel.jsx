import React from "react";
import Slider from "react-slick";
import ImageCarousel from "../../../assets/image (17).png";
import ImageCarousel2 from "../../../assets/image (17).png";
import ImageCarousel3 from "../../../assets/image (17).png";
import LeftButton from "../../../assets/images/icons/carouselButtons/leftArrow.png";
import RightButton from "../../../assets/images/icons/carouselButtons/rightArrow.png";
// Import slick-carousel css files from node_modules
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ButtonImage,
  Container,
  NextButton,
  PrevButton,
  WorkCarouselContainer,
  WorkContainer,
  WorkImage,
  WorkTitle,
} from "./style";

const WorkCarousel = () => {
  const slides = [
    { image: ImageCarousel, title: "TITLE 1" },
    { image: ImageCarousel2, title: "TITLE 2" },
    { image: ImageCarousel3, title: "TITLE 3" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: (
      <NextButton>
        <ButtonImage src={RightButton} />
      </NextButton>
    ),
    prevArrow: (
      <PrevButton>
        <ButtonImage src={LeftButton} />
      </PrevButton>
    ),
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Container>
      <WorkCarouselContainer>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <WorkContainer key={index}>
              <WorkImage src={slide.image} alt={slide.title} />
              <WorkTitle>{slide.title}</WorkTitle>
            </WorkContainer>
          ))}
        </Slider>
      </WorkCarouselContainer>
    </Container>
  );
};

export default WorkCarousel;
