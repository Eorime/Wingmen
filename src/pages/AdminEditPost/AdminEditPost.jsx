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
    images: [],
    video: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/projects/${id}`);
        const data = await response.json();
        setFormData({ ...data, images: [], video: null });
      } catch (error) {
        setError("Failed to fetch project data");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: files,
      }));
    } else if (name === "video") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        video: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("description", formData.description);

    for (const image of formData.images) {
      formDataToSend.append("images", image);
    }

    if (formData.video) {
      formDataToSend.append("video", formData.video);
    }

    try {
      const response = await fetch(`http://localhost:5000/projects/${id}`, {
        method: "PUT",
        body: formDataToSend,
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
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Date</Label>
            <Input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Images</Label>
            <Input
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input
              type="file"
              name="video"
              accept="video/*"
              onChange={handleChange}
            />
          </FormGroup>
          <SaveButton type="submit">Save</SaveButton>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Form>
      )}
    </Container>
  );
};

export default AdminEditPost;
