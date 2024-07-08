import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  position: relative;
  top: 830px;
  left: -120px;
`;

export const WorkCarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
`;

export const WorkContainer = styled.div`
  transition: transform 0.8s ease;
  transform: translateX(${(props) => props.offset}%);
`;

export const WorkTitle = styled.p`
  text-align: center;
  margin-left: -590px;
  margin-top: 40px;
`;

export const WorkImage = styled.img`
  width: 650px;
  height: 650px;
`;

const Button = styled.button`
  position: absolute;
  top: -20.2%;
  transform: translateY(-50%);
  background-color: transparent;
  color: transparent;
  border: none;
  cursor: pointer;
`;

export const ButtonImage = styled.img`
  width: 65px;
  height: 90px;
`;

export const PrevButton = styled(Button)`
  left: 32%;
`;

export const NextButton = styled(Button)`
  left: 40%;
`;
