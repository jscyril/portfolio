import { motion } from "framer-motion";

const projects = [
  {
    title: "UniLink",
    description:
      "A full-stack application built with React, NodeJS, Express, and PostgreSQL. It features a user authentication system, real-time data updates, and a clean user interface.",
    technologies: ["NodeJS", "Express", "PostgreSQL", "React"],
    githubLink: "https://github.com/jscyril/UniLink",
    imageUrl: "src/assets/unilink.png",
  },
  {
    title: "HabiTrax",
    description:
      "A mobile app built with React Native and Expo Framework that helps users track their habits.",
    technologies: ["React Native", "NodeJS", "ExpressJS", "MongoDB"],
    githubLink: "https://github.com/jscyril/HabiTrax",
    imageUrl: "src/assets/habitrax.png",
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#0B132B] text-white py-20 px-4 lg:py-28 lg:px-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-[#6FFFE9] mb-12 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1c2330] p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Project Image */}
              <div className="relative group mb-6">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg filter grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-[#6FFFE9] mb-4">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-lg text-[#ccd6f6] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <span className="font-mono text-sm text-[#8892b0]">
                  Tech Stack:
                </span>
                <ul className="grid grid-cols-2 gap-y-2 mt-2 text-sm text-[#8892b0]">
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="before:content-['▹'] before:text-[#6FFFE9] before:mr-2"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* View GitHub Button */}
              <div className="mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#0B132B] text-[#6FFFE9] text-sm font-medium rounded-lg border-2 border-[#6FFFE9] hover:bg-[#6FFFE9] hover:text-[#0B132B] transition duration-300"
                >
                  View GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
