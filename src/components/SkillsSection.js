import React from "react";

export default function SkillsSection({ skills }) {
  return (
    <section className="section skills" id="skills">
      <span className="section-title">Skill stack</span>
      <h2>What I bring to every Unity project</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-chip">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
