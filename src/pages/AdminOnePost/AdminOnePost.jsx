import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import {
  Container,
  ImagesContainer,
  OneProjectContainer,
  ProjectDate,
  ProjectDescription,
  ProjectImg,
  ProjectName,
} from "./style";
import AdminNavigation from "../../components/adminComponents/adminNavigation/AdminNavigation";
import { useNavigate, useParams } from "react-router-dom";

const AdminOnePost = () => {
  const [projectData, setProjectData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchOnePost = async () => {
      try {
        const response = await fetchData(
          `http://localhost:5000/projects/${id}`
        );
        setProjectData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOnePost();
  }, [id]);

  const handleEditProject = () => {
    navigate(`/projects/${id}/edit`);
  };

  return (
    <Container>
      <AdminNavigation />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <OneProjectContainer>
          <ProjectName>{projectData.name}</ProjectName>
          <ProjectDate>{projectData.date}</ProjectDate>
          <ProjectDescription>{projectData.description}</ProjectDescription>
          <ImagesContainer>
            {projectData.image && projectData.image.length > 0 ? (
              projectData.image.map((img, index) => (
                <ProjectImg
                  key={index}
                  src={img}
                  alt={`Project Image ${index}`}
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </ImagesContainer>
          <button onClick={handleEditProject}>Edit Project</button>
        </OneProjectContainer>
      )}
      {error && <p>Error: {error}</p>}
    </Container>
  );
};

export default AdminOnePost;
