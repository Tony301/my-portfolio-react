import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { resumeLink, profileLinks, projects, skills } from "./data/portfolio";

function App() {
  return (
    <div className="page-shell">
      <Navigation />
      <Hero resumeLink={resumeLink} profileLinks={profileLinks} />
      <main>
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ContactSection resumeLink={resumeLink} />
      </main>
      <Footer profileLinks={profileLinks} />
    </div>
  );
}

export default App;
