import React from "react";

export default function ContactSection({ resumeLink }) {
  return (
    <section className="section contact" id="contact">
      <div className="section-copy">
        <span className="section-title">Get in touch</span>
        <h2>Ready to discuss your next Unity project.</h2>
        <p>
          Available for contract roles, studio reviews, and technical interviews.
          Reach out and I'll show how my VR, AR, and multiplayer work can bring
          your idea to life.
        </p>
        <div className="contact-actions">
          <a href="mailto:tonybera301@gmail.com" className="button primary">
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
