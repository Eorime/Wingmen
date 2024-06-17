import React, { useState } from "react";
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

const AdminAddPost = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    images: [],
    video: null,
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      const imagesArray = Array.from(files);
      setFormData({
        ...formData,
        images: [...formData.images, ...imagesArray],
      });
    } else {
      setFormData({ ...formData, [name]: value });
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

    try {
      const resp = await fetch("http://localhost:5000/projects/newProject", {
        method: "POST",
        body: formDataToSend,
      });

      if (!resp.ok) {
        throw new Error("Failed to create project");
      }

      setSuccessMessage("Project added successfully");
      setFormData({
        name: "",
        date: "",
        description: "",
        images: [],
      });
    } catch (error) {
      setError("Couldn't create project");
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);
    setFormData({ ...formData, images: updatedImages });
  };

  return (
    <Container>
      <AdminNavigation />
      <Form onSubmit={handleSubmit}>
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
          <TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Images:</Label>
          <Input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Create</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {successMessage && <p>{successMessage}</p>}
      <FormGroup>
        {formData.images.length > 0 && (
          <div>
            <h2>Selected Images:</h2>
            {formData.images.map((image, index) => (
              <div key={index}>
                <ProjectImg
                  src={URL.createObjectURL(image)}
                  alt={`Image ${index}`}
                />
                <Button onClick={() => handleRemoveImage(index)}>Remove</Button>
              </div>
            ))}
          </div>
        )}
      </FormGroup>
    </Container>
  );
};

export default AdminAddPost;
