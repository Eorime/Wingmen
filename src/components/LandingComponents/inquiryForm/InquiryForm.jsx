import React, { useState } from "react";
import {
  Container,
  EmailInput,
  Form,
  FormGroup,
  InquiryInput,
  Label,
  SendButton,
} from "./style";
import { postData } from "../../../api";

const InquiryForm = () => {
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [error, setError] = useState("");

  const handleSend = async () => {
    try {
      await postData("http://localhost:5000/inquiry", {
        email: email,
        inquiry: inquiry,
      });

      setEmail("");
      setInquiry("");
    } catch (error) {
      setError("Couldn't send inquiry");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <EmailInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></EmailInput>
        </FormGroup>
        <FormGroup>
          <Label>Inquiry</Label>
          <InquiryInput
            type="text"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
          ></InquiryInput>
        </FormGroup>
        <SendButton type="submit">SEND</SendButton>
      </Form>
    </Container>
  );
};

export default InquiryForm;
