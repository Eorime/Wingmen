import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  position: relative;
  top: 900px;
  left: -110px;
`;

export const WorkCarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 40px;
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
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const PrevButton = styled(Button)`
  left: 10px;
`;

export const NextButton = styled(Button)`
  right: 10px;
`;
