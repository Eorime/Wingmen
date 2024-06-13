import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  SaveButton,
  TextArea,
} from "./style";
import AdminNavigation from "../../components/adminComponents/adminNavigation/AdminNavigation";

const AdminEditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/projects/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        setError("Failed to fetch project data");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update project");
      }
      navigate(`/projects/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <AdminNavigation />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Date:</Label>
            <Input type="text" value={formData.date} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <TextArea value={formData.description} onChange={handleChange} />
          </FormGroup>
          <SaveButton type="submit">Save</SaveButton>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Form>
      )}
    </Container>
  );
};

export default AdminEditPost;
