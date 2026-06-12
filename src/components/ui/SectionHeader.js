import React from "react";

export default function SectionHeader({ label, title, children }) {
  return (
    <div className="section-header">
      <span className="section-title">{label}</span>
      <h2>{title}</h2>
      {children && <p className="section-subtitle">{children}</p>}
    </div>
  );
}
