import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: -1;
`;

export const WorkHeaderText = styled.p`
  background-color: #d9d9d9;
  font-size: 48px;
  color: black;
  padding: 10px;
  position: absolute;
  top: 300px;
  left: 180px;
  padding-right: 60px;
`;

export const WorkContainer = styled.div`
  position: absolute;
  top: 450px;
  left: 250px;
  height: 671px;
  width: 1460px;
  background-color: #d9d9d9;
`;

export const MoreWorkButton = styled.button`
  font-size: 48px;
  background-color: #d9d9d9;
  padding: 15px;
  left: 1600px;
  position: absolute;
  font-weight: bold;
  top: 1200px;
  border: none;
  padding-right: 60px;

  &:hover {
    cursor: pointer;
  }
`;
