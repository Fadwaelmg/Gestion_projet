import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProjectModal from "./components/AddProject";
import UpdateProjectForm from "./components/UpdateProjectForm";
import ProjectList from "./components/ProjectList"; 

const App = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets :", error);
      }
    };

    fetchProjects();
  }, []);

  // Ajouter un nouveau projet
  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
    setShowModal(false);
  };

  // Supprimer un projet
  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // Ouvrir la modale de update
  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowUpdateModal(true);
  };

  // Update un projet
  const handleUpdateProject = (updatedProject) => {
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
    setShowUpdateModal(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Projects</h1>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Project
        </button>
      </div>

      {}
      <ProjectList
        projects={projects}
        onEdit={handleEditProject}
        onDelete={handleDeleteProject}
      />

      {}
      {showModal && (
        <AddProjectModal
          onClose={() => setShowModal(false)}
          onSave={handleAddProject}
        />
      )}

      {}
      {showUpdateModal && (
        <UpdateProjectForm
          project={editingProject}
          onClose={() => setShowUpdateModal(false)}
          onSave={handleUpdateProject}
        />
      )}
    </div>
  );
};

export default App;