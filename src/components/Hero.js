import React from "react";

export default function Hero({ resumeLink, profileLinks }) {
  return (
    <header className="hero" aria-label="Portfolio introduction">
      <div className="hero-copy">
        <span className="eyebrow">Unity Developer</span>
        <h1>Crafting immersive 3D, 2D, XR and mobile experiences.</h1>
        <p>
          I build polished Unity projects for PC, Android, XR and AR. My work
          focuses on strong interaction, clean architecture and recruiter-ready
          polish.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button primary">
            View Projects
          </a>
          <a href={resumeLink} className="button secondary" download>
            Download Resume
          </a>
          <a href="#contact" className="button secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-panel">
        <div className="panel-header">
          <strong>Latest highlights</strong>
          <span>Unity portfolio showcase</span>
        </div>
        <div className="panel-item">
          <span className="panel-label">Specialty</span>
          <p>3D / 2D / XR / AR / Mobile</p>
        </div>
        <div className="panel-item">
          <span className="panel-label">Approach</span>
          <p>System-driven, visual polish, performance-first.</p>
        </div>
        <div className="panel-item">
          <span className="panel-label">Ready for</span>
          <p>Recruiter demos, technical interviews, studio talent reviews.</p>
        </div>
        <div className="social-row">
          {profileLinks.map((profile) => (
            <a
              key={profile.title}
              href={profile.url}
              target="_blank"
              rel="noreferrer noopener"
              className="social-pill"
            >
              {profile.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
