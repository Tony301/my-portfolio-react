import React from "react";

export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="section-copy">
        <span className="section-title">About Me</span>
        <h2>Unity &amp; XR developer with a track record across every platform.</h2>
        <p>
          I'm Tony Bera — a Unity developer based in Mumbai with 5+ years shipping VR
          training apps, AR mobile experiences, WebGL multiplayer platforms, and
          real-time simulations. I hold a B.Tech in Computer Science and have worked
          across startups, agencies and product companies, from intern to lead.
        </p>
      </div>
      <div className="feature-grid">
        <article className="feature-card">
          <h3>VR &amp; AR expert</h3>
          <p>
            Industrial VR simulations, AR Foundation mobile apps, and
            browser-based WebXR — built and shipped across multiple clients.
          </p>
        </article>
        <article className="feature-card">
          <h3>Multiplayer systems</h3>
          <p>
            Photon-powered real-time lobbies, voice chat, Firebase auth, and
            WebGL social platforms deployed to production.
          </p>
        </article>
        <article className="feature-card">
          <h3>Performance-first</h3>
          <p>
            UniTask async workflows, Addressables, procedural generation, and
            WebSocket integration for smooth, scalable builds.
          </p>
        </article>
        <article className="feature-card">
          <h3>Client-proven</h3>
          <p>
            5 companies across Mumbai, Pune and remote — from intern to lead
            developer, managing requirements and delivering on time.
          </p>
        </article>
      </div>
    </section>
  );
}
