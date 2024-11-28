import React from "react";
import axios from "axios";
import "./ProjectList.css";

const DeleteProject = ({ projectId, onDelete }) => {
  const handleDeleteProject = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/projects/${projectId}`);
      onDelete(projectId);
    } catch (error) {
      console.error("Erreur lors de la suppression du projet :", error);
    }
  };

  return (
    <button
      className="btn btn-danger btn-sm"
      onClick={handleDeleteProject}
    >
      <i className="fas fa-trash-alt"></i> 
    </button>
  );
};

export default DeleteProject;
