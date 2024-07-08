import React, { useState, useEffect } from "react";
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
import ImageCarousel from "../../../assets/image (17).png";
import ImageCarousel2 from "../../../assets/image (17).png";
import ImageCarousel3 from "../../../assets/image (17).png";
import LeftButton from "../../../assets/images/icons/carouselButtons/leftArrow.png";
import RightButton from "../../../assets/images/icons/carouselButtons/rightArrow.png";

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: ImageCarousel, title: "TITLE 1" },
    { image: ImageCarousel2, title: "TITLE 2" },
    { image: ImageCarousel3, title: "TITLE 3" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <WorkCarouselContainer>
        {slides.map((slide, index) => (
          <WorkContainer key={index} offset={(index - currentIndex) * 5}>
            <WorkImage src={slide.image} alt={slide.title} />
            <WorkTitle>{slide.title}</WorkTitle>
          </WorkContainer>
        ))}
      </WorkCarouselContainer>
      <PrevButton onClick={prevSlide}>
        <ButtonImage src={LeftButton} />
      </PrevButton>
      <NextButton onClick={nextSlide}>
        {" "}
        <ButtonImage src={RightButton} />
      </NextButton>
    </Container>
  );
};

export default WorkCarousel;
