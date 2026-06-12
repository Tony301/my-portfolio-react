import React from "react";

export default function ContactSection({ resumeLink }) {
  return (
    <section className="section contact" id="contact">
      <div className="section-copy">
        <span className="section-title">Get in touch</span>
        <h2>Ready to discuss your next Unity project.</h2>
        <p>
          I’m available for contract roles, studio reviews and technical
          interviews. Share your goals, and I’ll show how my Unity work can
          bring them to life.
        </p>
        <div className="contact-actions">
          <a href="mailto:your.email@example.com" className="button primary">
            Email Me
          </a>
          <a href={resumeLink} className="button secondary" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
