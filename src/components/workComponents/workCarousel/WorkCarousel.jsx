import React from "react";
import {
  Container,
  NextButton,
  PrevButton,
  WorkCarouselContainer,
  WorkContainer,
  WorkImage,
  WorkTitle,
} from "./style";
import { useEffect } from "react";
import { useState } from "react";
import ImageCarousel from "../../../assets/image (17).png";
import ImageCarousel2 from "../../../assets/image (17).png";
import ImageCarousel3 from "../../../assets/image (17).png";

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
          <WorkContainer key={index} offset={100 * (index - currentIndex)}>
            <WorkImage src={slide.image} alt={slide.title} />
            <WorkTitle>{slide.title}</WorkTitle>
          </WorkContainer>
        ))}
      </WorkCarouselContainer>
      <PrevButton onClick={prevSlide}>&lt;</PrevButton>
      <NextButton onClick={nextSlide}>&gt;</NextButton>
    </Container>
  );
};

export default WorkCarousel;
