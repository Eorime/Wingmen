import React, { useState } from "react";
import {
  Container,
  EmailFormatError,
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

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const countWords = (text) => {
    return text.trim().split(/\s+/).length;
  };

  //functions to handle button clicks
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
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (countWords(inquiry) > 200) {
      setError("Inquiry cannot exceed 200 words");
      return;
    }

    setError("");
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
        {error && <EmailFormatError>{error}</EmailFormatError>}
        <SendButton type="submit">SEND</SendButton>
      </Form>
    </Container>
  );
};

export default InquiryForm;
