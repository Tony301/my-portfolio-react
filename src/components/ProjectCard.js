import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const base = process.env.PUBLIC_URL || "";
  const hasVideo = !!project.video;
  const hasScreenshots = project.screenshots && project.screenshots.length > 1;

  return (
    <article className="project-card">
      {hasVideo ? (
        <div className="project-image-wrapper has-video">
          <video
            src={base + project.video}
            poster={
              project.screenshots
                ? base + project.screenshots[activeScreenshot]
                : undefined
            }
            controls
            preload="metadata"
            className="project-video"
          />
        </div>
      ) : project.image && !imageError ? (
        <div className="project-image-wrapper">
          <img
            src={base + project.image}
            alt={project.title}
            className="project-image"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="project-image-wrapper project-image-placeholder">
          <span className="placeholder-text">{project.title}</span>
        </div>
      )}

      {hasScreenshots && (
        <div className="screenshot-strip">
          {project.screenshots.map((src, i) => (
            <button
              key={i}
              className={`screenshot-thumb${i === activeScreenshot ? " active" : ""}`}
              onClick={() => setActiveScreenshot(i)}
              aria-label={`Screenshot ${i + 1}`}
            >
              <img src={base + src} alt={`${project.title} screenshot ${i + 1}`} />
            </button>
          ))}
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
