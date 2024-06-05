import React, { useEffect, useState } from "react";
import {
  AllProjectsContainer,
  Container,
  ProjectContainer,
  ProjectDate,
  ProjectDescription,
  ProjectName,
  ProjectsHeader,
} from "./style";
import AdminNavigation from "../../components/adminComponents/adminNavigation/AdminNavigation";
import { fetchData } from "../../api";
import { useNavigate } from "react-router-dom";

const AdminPosts = () => {
  const [postsData, setPostsData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetchData("http://localhost:5000/projects");
        setPostsData(response);
        console.log(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  const handleViewProject = (id) => {
    navigate(`/projects/${id}`);
  };

  const handleEditProject = (id) => {
    navigate(`/projects/${id}/edit`);
  };

  return (
    <Container>
      <AdminNavigation />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProjectsHeader>PROJECTS</ProjectsHeader>
          <AllProjectsContainer>
            {postsData.map((project, index) => (
              <ProjectContainer key={index}>
                <ProjectName>{project.name}</ProjectName>
                <ProjectDate>{project.date}</ProjectDate>
                <ProjectDescription>{project.description}</ProjectDescription>
                <button onClick={() => handleViewProject(project._id)}>
                  See Project
                </button>
                <button onClick={() => handleEditProject(project._id)}>
                  Edit Project
                </button>
                <button>Delete Project</button>
              </ProjectContainer>
            ))}
          </AllProjectsContainer>
        </>
      )}
      {error && <p>Error: {error}</p>}{" "}
    </Container>
  );
};

export default AdminPosts;
