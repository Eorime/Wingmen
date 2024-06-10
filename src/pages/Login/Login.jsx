import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { postData } from "../../api";
import { useAuth } from "../../context/AuthContextProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //functions with hooks
  const auth = useAuth();
  const navigate = useNavigate();

  //functions for handling clicks
  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogin = async () => {
    try {
      await postData("http://localhost:5000/signIn", {
        email: email,
        password: password,
      });

      setEmail("");
      setPassword("");
      navigate("/admin");
    } catch (error) {
      setError("Couldn't sign in. Please try again with valid credentials");
    }
    auth.login();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Container>
      <LogoContainer>
        <LoginLogo src={Logo} onClick={handleLogoClick} />
      </LogoContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <LoginButton type="submit">Log In</LoginButton>
      </Form>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default Login;
