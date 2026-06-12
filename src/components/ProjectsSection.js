import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <section className="section projects" id="projects">
      <span className="section-title">Portfolio</span>
      <h2>Selected Unity projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
