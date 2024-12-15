import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative bg-[#0B132B] text-white min-h-screen hero-background"
      id="hero-section"
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        {/* Hero Title */}
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-white mb-2 mt-11"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, my name is <span className="text-[#6FFFE9]">Jacob Cyril.</span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm a full-stack developer with a focus on backend development. I
          enjoy building simple, efficient applications and continuously
          learning new technologies.
        </motion.p>

        {/* Button */}
        <motion.button
          className="mt-6 px-8 py-4 bg-[#6FFFE9] text-[#0B132B] text-lg font-medium rounded-lg hover:bg-[#0B132B] hover:text-[#6FFFE9] transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="#contact">Contact Me!</a>
        </motion.button>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex space-x-8 justify-center mt-8">
            <a
              href="https://www.linkedin.com/in/jacob-sebastian-cyril/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="logo-linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-80 transition duration-300"
              />
            </a>
            <a
              href="https://github.com/jscyril"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="github.png"
                alt="GitHub"
                className="w-8 h-8 hover:opacity-80 transition duration-300"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
