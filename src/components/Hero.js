import React from "react";

const PHOTO = process.env.PUBLIC_URL + "/tony-profile.jpg";

export default function Hero({ resumeLink, profileLinks }) {
  return (
    <header className="hero" aria-label="Portfolio introduction">
      <div className="hero-copy">
        <span className="eyebrow">Unity &amp; XR Developer · Mumbai</span>
        <h1>Building VR, AR and real-time experiences that ship.</h1>
        <p>
          5+ years building immersive Unity applications — from VR industrial
          training and real-estate visualisation to multiplayer WebGL platforms
          and mobile AR. Strong C#, XR interaction, and production-ready delivery.
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
          <img src={PHOTO} alt="Tony Bera" className="panel-avatar" />
          <strong>Tony Bera</strong>
          <span>Unity &amp; XR Developer</span>
        </div>
        <div className="panel-item">
          <span className="panel-label">Experience</span>
          <p>5+ years · VR, AR, WebGL, Mobile</p>
        </div>
        <div className="panel-item">
          <span className="panel-label">Currently</span>
          <p>Unity Developer at Feast Software Pvt Ltd, Mumbai</p>
        </div>
        <div className="panel-item">
          <span className="panel-label">Open to</span>
          <p>Contract roles, studio reviews, technical interviews</p>
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
