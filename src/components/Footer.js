import React from "react";

export default function Footer({ profileLinks }) {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>
          Built with React · Unity developer portfolio · No routing required
        </p>
        <div className="social-links">
          {profileLinks.map((profile) => (
            <a
              key={profile.title}
              href={profile.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {profile.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
