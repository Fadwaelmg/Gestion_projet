package com.example.CRUD.service;

import org.springframework.stereotype.Service;
import com.example.CRUD.model.Project;
import com.example.CRUD.repository.ProjectRepository;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
    
    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }
    
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
    
    public Optional<Project> updateProject(Long id, Project projectDetails) {
        return projectRepository.findById(id).map(existingProject -> {
            existingProject.setName(projectDetails.getName());
            existingProject.setDescription(projectDetails.getDescription());
            return projectRepository.save(existingProject); 
        });
    }

   

}
