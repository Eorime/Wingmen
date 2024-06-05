import React, { useEffect, useState } from "react";
import { Container } from "./style";
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
        <div>
          <h2>Projects:</h2>
          <ul>
            {postsData.map((project, index) => (
              <li key={index}>
                <p>{project.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <p>Error: {error}</p>}{" "}
    </Container>
  );
};

export default AdminPosts;
