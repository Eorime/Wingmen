import styled from "styled-components";

export const Container = styled.div`
  margin-top: 350vh;
  font-size: 25px;
  margin-left: 60vw;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const EmailInput = styled.input`
  width: 35%;
  border: solid 1px;
  padding: 1%;
  padding-left: 2%;
  font-size: 24px;
`;

export const InquiryInput = styled.textarea`
  width: 60%;
  font-size: 24px;
  padding-left: 2%;
  padding-top: 2%;
  padding-bottom: 40%;
  border: solid 1px;
  z-index: 1;
  resize: vertical;
`;

export const SendButton = styled.button`
  position: absolute;
  z-index: 2;
  margin-top: 28%;
  margin-left: 20.5%;
  background-color: transparent;
  border: none;
  font-size: 20px;

  &: hover {
    cursor: pointer;
  }
`;

export const EmailFormatError = styled.p`
  position: absolute;
  color: red;
`;

export const SuccessMessage = styled.p`
  position: absolute;
`;
