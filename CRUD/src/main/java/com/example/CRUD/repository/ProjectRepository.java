package com.example.CRUD.repository;

import org.springframework.data.neo4j.repository.Neo4jRepository;

import com.example.CRUD.model.Project;

public interface ProjectRepository extends Neo4jRepository<Project, Long> {

}
