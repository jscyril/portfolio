import { motion } from "framer-motion";

const projects = [
  {
    title: "UniLink",
    description:
      "A full-stack application built with React, NodeJS, Express, and PostgreSQL. It features a user authentication system, real-time data updates, and a clean user interface.",
    technologies: ["NodeJS", "Express", "PostgreSQL", "React"],
    githubLink: "https://github.com/jscyril/UniLink",
    imageUrl: "src/assets/unilink.png", // Replace with actual project image
  },
  {
    title: "HabiTrax",
    description:
      "A mobile app built with React Native and Expo Framework that helps users track their habits.",
    technologies: ["React Native", "NodeJS", "ExpressJS", "MongoDB"],
    githubLink: "https://github.com/jscyril/HabiTrax",
    imageUrl: "src/assets/habitrax.png", // Replace with actual project image
  },
  // Add more projects here
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#0B132B] text-white py-20 px-4 lg:py-28 lg:px-0"
    >
      <div className="w-full mx-[256px]">
        {/* Section Header */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-[#6FFFE9] mb-16 pr-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>
        {/* Projects Grid */}
        <div className="flex justify-center mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center max-w-7xl">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#1c2330] p-8 pb-16 rounded-xl shadow-xl hover:shadow-2xl relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#6FFFE9] mb-2">
                  {project.title}
                </h3>
                <p className="text-lg text-[#ccd6f6] mb-4">
                  {project.description}
                </p>

                <div className="mt-4 mb-6">
                  <span className="font-mono text-sm text-[#8892b0]">
                    Tech Stack:{" "}
                  </span>
                  <ul className="flex flex-wrap gap-2 mt-2 text-sm text-[#8892b0]">
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

                {/* Button with Padding Adjustment */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-[#0B132B] text-[#6FFFE9] text-sm font-medium rounded-lg hover:bg-[#6FFFE9] hover:text-[#0B132B] border-[#6FFFE9] border-2 transition duration-300"
                >
                  View GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
