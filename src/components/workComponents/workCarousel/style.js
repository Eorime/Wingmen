import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
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
  width: 20px;
  height: 20px;
`;

export const PrevButton = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`;

export const NextButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`;
