import React from "react";

export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="section-copy">
        <span className="section-title">About Me</span>
        <h2>Professional Unity development with polished results.</h2>
        <p>
          I deliver game-ready Unity builds with meaningful interaction,
          intuitive controls and scalable code. My background includes 3D
          experiences, mobile games, PC simulations and immersive XR / AR
          applications.
        </p>
      </div>
      <div className="feature-grid">
        <article className="feature-card">
          <h3>Technical depth</h3>
          <p>
            Strong C# architecture, runtime optimization and cross-platform
            builds.
          </p>
        </article>
        <article className="feature-card">
          <h3>Creative polish</h3>
          <p>
            Visual quality, motion design, UI/UX and professional
            portfolio-ready systems.
          </p>
        </article>
        <article className="feature-card">
          <h3>Production-ready</h3>
          <p>
            Source control, project organization, build automation and
            test-friendly workflows.
          </p>
        </article>
      </div>
    </section>
  );
}
