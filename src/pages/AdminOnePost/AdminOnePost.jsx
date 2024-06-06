import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import {
  Container,
  OneProjectContainer,
  ProjectDate,
  ProjectDescription,
  ProjectName,
} from "./style";
import AdminNavigation from "../../components/adminComponents/adminNavigation/AdminNavigation";
import { useNavigate, useParams } from "react-router-dom";

const AdminOnePost = () => {
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEditProject = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchOnePost = async () => {
      try {
        const response = await fetchData(
          `http://localhost:5000/projects/${id}`
        );
        setProjectData(response);
        console.log(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOnePost();
  }, [id]);

  return (
    <Container>
      <AdminNavigation />
      {loading ? (
        <p>Loading...</p>
      ) : (
        projectData && (
          <OneProjectContainer>
            <ProjectName>{projectData.name}</ProjectName>
            <ProjectDate>{projectData.date}</ProjectDate>
            <ProjectDescription>{projectData.description}</ProjectDescription>
            <button>Edit Project</button>
            <button>Delete Project</button>
          </OneProjectContainer>
        )
      )}
      {error && <p>Error: {error}</p>}
    </Container>
  );
};

export default AdminOnePost;
