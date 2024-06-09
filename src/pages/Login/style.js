import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding-bottom: 1%;
  justify-content: center;
  align-items: center;
`;

export const LoginLogo = styled.img`
  width: 150px;
`;

export const Form = styled.form`
  margin-top: 25%;
  display: flex;
  flex-direction: column;
  margin-top: 15%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 15px;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const Input = styled.input`
  width: 85%;
  font-size: 25px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const LoginButton = styled.button`
  width: 85%;
  font-size: 18px;
  margin-top: 12%;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px;

  &: hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;
