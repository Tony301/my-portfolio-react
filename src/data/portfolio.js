export const resumeLink = "/resume.pdf";

export const profileLinks = [
  {
    title: "GitHub",
    url: "https://github.com/yourusername",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
  },
];

/**
 * PROJECT STRUCTURE GUIDE
 * ======================
 * Add unlimited projects by following this structure:
 *
 * {
 *   title: "Project Name",                    // Required: Display name
 *   type: "Category (3D/2D/XR/AR/etc)",       // Required: Project type
 *   platform: "PC/Mobile/Console/etc",        // Required: Target platform
 *   description: "Short project description", // Required: Brief overview
 *   tags: ["Tech1", "Tech2"],                 // Required: Technology stack
 *   image: "/images/project-slug.svg",        // Optional: Add image to public/images/
 * }
 *
 * The layout automatically scales with more projects - uses responsive grid
 * that adapts from 1 to 4+ columns based on screen size and project count.
 */

export const projects = [
  {
    title: "Nebula Ranger",
    type: "XR & AR",
    platform: "Oculus Quest / Mobile",
    description:
      "Immersive training experience combining AR interaction with spatial audio and guided movement for professional users.",
    tags: ["Unity", "XR", "AR Foundation", "Shader Graph"],
    image: "/images/nebula-ranger.svg",
  },
  {
    title: "Aether Drift",
    type: "3D Adventure",
    platform: "PC",
    description:
      "Cinematic 3D exploration project with custom character controls, dynamic lighting, and layered world building.",
    tags: ["Unity", "C#", "HDRP", "Cinemachine"],
    image: "/images/aether-drift.svg",
  },
  {
    title: "Pulse Core",
    type: "2D Action",
    platform: "Android",
    description:
      "Fast-paced mobile action game with responsive input, polished VFX, and an optimized build for touch platforms.",
    tags: ["Unity", "2D", "Mobile", "DOTS"],
    image: "/images/pulse-core.svg",
  },
  {
    title: "Titan Workshop",
    type: "PC Simulation",
    platform: "Windows",
    description:
      "Realistic mechanics simulation built with custom UI, event-driven systems, and extensible game architecture.",
    tags: ["Unity", "Editor Tools", "Systems Design", "UI/UX"],
    image: "/images/titan-workshop.svg",
  },
  {
    title: "Frontier Runner",
    type: "Android Racing",
    platform: "Mobile",
    description:
      "Performance-focused mobile racer with touch controls, dynamic particle effects, and responsive level design.",
    tags: ["Unity", "Mobile", "C#", "Optimization"],
    image: "/images/frontier-runner.svg",
  },

  /**
   * COPY ANY OBJECT ABOVE AND PASTE HERE TO ADD MORE PROJECTS
   * The grid will automatically arrange them responsively
   * Add up to 50+ projects - layout will remain beautiful
   */
];

export const skills = [
  "Unity 3D / 2D",
  "C# Development",
  "XR / AR Interaction",
  "Mobile & PC Builds",
  "Shader Graph & VFX",
  "Performance Optimization",
  "Gameplay Systems",
  "Version Control",
];
