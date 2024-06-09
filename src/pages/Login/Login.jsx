import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  LoginButton,
  LoginLogo,
  LogoContainer,
} from "./style";
import Logo from "../../assets/images/Logo.png";

const Login = () => {
  return (
    <Container>
      <LogoContainer>
        <LoginLogo src={Logo} />
      </LogoContainer>
      <Form>
        <FormGroup>
          <Label>Email</Label>
          <Input></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input></Input>
        </FormGroup>
        <LoginButton>Log In</LoginButton>
      </Form>
    </Container>
  );
};

export default Login;

//admin iqneba protected route da roca signinis gareshe shemova am pageze gadmoadirectebs
