import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import { Container } from "./style";
import AdminNavigation from "../../components/adminComponents/adminNavigation/AdminNavigation";
import { useParams } from "react-router-dom";

const AdminOnePost = () => {
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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
          <div>
            <p>{projectData.name}</p>
            <p>{projectData.date}</p>
            <p>{projectData.description}</p>
          </div>
        )
      )}
      {error && <p>Error: {error}</p>}
    </Container>
  );
};

export default AdminOnePost;
