import React, { useState } from "react";
import { Container } from "./style";
import AdminNavigation from "../../components/adminComponents/adminNavigation/AdminNavigation";

const AdminAddPost = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <Container>
      <AdminNavigation />
    </Container>
  );
};

export default AdminAddPost;
