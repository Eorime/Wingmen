import styled from "styled-components";

export const Container = styled.div`
  background-color: #d9d9d9;
  position: absolute;
  font-size: 48px;
  width: 100vw;
  height: 130px;
  padding-top: 85px;
  padding-left: 500px;
  left: 0;
  top: 1500px;
  z-index: -1;
`;

export const WorkHead = styled.p`
  background-color: #d9d9d9;
  font-size: 48px;
  padding-right: 50px;
  position: absolute;
  left: 120px;
  top: 250px;
`;

export const WorksContainer = styled.div`
  background-color: #d9d9d9;
  height: 600px;
  width: 1400px;
  position: absolute;
  top: 420px;
  left: 250px;
`;

export const MoreButton = styled.button`
  background-color: #d9d9d9;
  padding-right: 50px;
  position: absolute;
  left: 1550px;
  font-size: 48px;
  font-weight: bold;
  border: none;
  top: 1100px;

  &: hover {
    cursor: pointer;
  }
`;
