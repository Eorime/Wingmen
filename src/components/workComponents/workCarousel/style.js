import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  position: relative;
  top: 900px;
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
  margin-left: -650px;
  margin-top: 40px;
`;

export const WorkImage = styled.img`
  width: 750px;
  height: 940px;
`;

const Button = styled.button`
  position: absolute;
  top: -10%;
  transform: translateY(-50%);
  background-color: transparent;
  color: #000000;
  border: none;
  font-size: 100px;
  padding: 10px;
  cursor: pointer;
  font-family: "NexaLight", sans-serif;
  font-weight: 100;
`;

export const PrevButton = styled(Button)`
  right: 15%;
`;

export const NextButton = styled(Button)`
  right: 8%;
`;
