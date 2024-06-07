import React, { useState } from "react";
import {
  Button,
  Container,
  ErrorMessage,
  Form,
  FormGroup,
  Input,
  Label,
} from "./style";
import AdminNavigation from "../../components/adminComponents/adminNavigation/AdminNavigation";
import { postData } from "../../api";

const AdminAddPost = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await postData(
        "http://localhost:5000/projects/newProject",
        formData
      );
      setSuccessMessage("Project added successfully");

      setFormData({ name: "", date: "", description: "" });
    } catch (error) {
      setError("Couldn't create project");
    }
  };

  return (
    <Container>
      <AdminNavigation />
      <Form onSubmit={handleChange}>
        <FormGroup>
          <Label>Project Name:</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Date:</Label>
          <Input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Description:</Label>
          <Input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit" onClick={handleSubmit}>
          Create
        </Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {successMessage && <p>{successMessage}</p>}
    </Container>
  );
};

export default AdminAddPost;
