import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="project-card">
      {project.image && !imageError && (
        <div className="project-image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            onError={handleImageError}
          />
        </div>
      )}
      {(!project.image || imageError) && (
        <div className="project-image-wrapper project-image-placeholder">
          <span className="placeholder-text">{project.title}</span>
        </div>
      )}
      <div className="project-content">
        <div className="project-meta">
          <span className="project-type">{project.type}</span>
          <span className="project-platform">{project.platform}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
