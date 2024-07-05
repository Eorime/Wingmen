import styled from "styled-components";

export const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  position: relative;
  top: 900px;
  left: 70px;
`;

export const WorkCarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

export const WorkContainer = styled.div`
  flex: 0 0 100%;
  transition: transform 0.8s ease;
  transform: translateX(${(props) => props.offset}%);
`;

export const WorkTitle = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const WorkImage = styled.img`
  width: 764px;
  height: 954px;
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
