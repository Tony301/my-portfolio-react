import React from "react";

export default function ExperienceSection({ experience }) {
  return (
    <section className="section experience" id="experience">
      <div className="section-copy">
        <span className="section-title">Work History</span>
        <h2>5+ years of shipped Unity experiences.</h2>
        <p>
          From intern to lead developer — built across VR training, AR mobile apps,
          multiplayer platforms, and real-time simulations.
        </p>
      </div>
      <div className="timeline">
        {experience.map((job, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-role">{job.role}</h3>
                <span className="timeline-company">
                  {job.company} &middot; {job.location}
                </span>
              </div>
              <span className="timeline-period">{job.period}</span>
            </div>
            <ul className="timeline-bullets">
              {job.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
