import React from "react";
import {
  Container,
  EmailInput,
  Form,
  FormGroup,
  InquiryInput,
  Label,
  SendButton,
} from "./style";

const InquiryForm = () => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label>Email</Label>
          <EmailInput type="text"></EmailInput>
        </FormGroup>
        <FormGroup>
          <Label>Inquiry</Label>
          <InquiryInput type="text"></InquiryInput>
        </FormGroup>
        <SendButton>SEND</SendButton>
      </Form>
    </Container>
  );
};

export default InquiryForm;
