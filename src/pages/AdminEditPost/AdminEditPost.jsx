import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  ErrorMessage,
  Form,
  FormGroup,
  Input,
  Label,
  ProjectImg,
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
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/projects/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        setFormData({
          ...data,
          images: data.image.map((imageUrl) => ({ src: imageUrl, file: null })), // Existing images
          video: null,
        });
      } catch (error) {
        setError(`Failed to fetch project data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      const imagesArray = Array.from(files).map((file) => ({
        src: URL.createObjectURL(file),
        file,
      }));
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...imagesArray],
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

    formData.images.forEach((image) => {
      if (image.file) {
        formDataToSend.append("images", image.file);
      }
    });

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

      setSuccessMessage("Project updated successfully");
      navigate(`/projects/${id}`);
    } catch (error) {
      setError(`Failed to update project: ${error.message}`);
    }
  };

  const handleRemoveImage = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: prevFormData.images.filter((_, i) => i !== index),
    }));
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
          <Button type="submit">Save</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {successMessage && <p>{successMessage}</p>}
          <FormGroup>
            {formData.images.length > 0 && (
              <div>
                <h2>Selected Images:</h2>
                {formData.images.map((image, index) => (
                  <div key={index}>
                    <ProjectImg src={image.src} alt={`Image ${index}`} />
                    <Button onClick={() => handleRemoveImage(index)}>
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </FormGroup>
        </Form>
      )}
    </Container>
  );
};

export default AdminEditPost;
