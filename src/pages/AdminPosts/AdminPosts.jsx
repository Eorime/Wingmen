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

const AdminPosts = () => {
  const [postsData, setPostsData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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
