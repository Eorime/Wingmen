import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";

const AdminOnePost = () => {
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOnePost = async () => {
      try {
        const response = await fetchData("http://localhost:5000/projects/:id");
        setProjectData(response);
        console.log(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOnePost();
  }, []);

  return <div>AdminOnePost</div>;
};

export default AdminOnePost;
