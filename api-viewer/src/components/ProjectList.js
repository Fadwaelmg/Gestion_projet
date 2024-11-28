import React from "react";
import DeleteProject from "./DeleteProject";
import UpdateProjectForm from "./UpdateProjectForm";
import "./ProjectList.css";

const ProjectList = ({ projects, onEdit, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th className="mb-4 text-center">Name</th>
          <th className="mb-4 text-center">Description</th>
          <th className="mb-4 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {projects.length > 0 ? (
          projects.map((project) => (
            <tr key={project.id}>
              <td className="mb-4 text-center">{project.name}</td>
              <td className="mb-4 text-center">{project.description}</td>
              <td className="mb-4 text-center">
                <button
                  className="btn btn-warning btn-sm ms-2"
                  onClick={() => onEdit(project)}
                >
                  <i className="fas fa-edit"></i> {}
                </button>
                <DeleteProject projectId={project.id} onDelete={onDelete} />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No project found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProjectList;
