import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#0B132B] text-white py-20 px-4 lg:py-28 lg:px-0 about-background"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-[#6FFFE9] mb-8 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: sectionInView ? 1 : 0,
            y: sectionInView ? 0 : 50,
          }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            className="lg:w-3/5 text-lg leading-relaxed space-y-6 text-[#ccd6f6]"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: textInView ? 1 : 0,
              x: textInView ? 0 : -50,
            }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>
              Hi there! My name is{" "}
              <span className="text-[#6FFFE9] font-semibold">Jacob Cyril</span>,
              and I'm a passionate full-stack developer with a focus on backend
              development. I enjoy creating applications that are not only
              efficient and scalable but also intuitive and enjoyable for users.
            </p>
            <p>
              I've had the privilege of working on a variety of projects, from
              building robust APIs to designing databases and optimizing system
              performance. I'm continuously expanding my skills, exploring new
              frameworks, and collaborating on exciting ideas.
            </p>
            <p>
              Beyond coding, I enjoy exploring tech trends and tinkering with
              new technologies. I'm a firm believer in simplicity, and my
              philosophy is all about building solutions that matter.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            {/* Tech Stack */}
            <ul className="grid grid-cols-2 gap-y-2 mt-4 text-sm font-mono text-[#8892b0]">
              <li className="before:content-['▹'] before:text-[#6FFFE9] before:mr-2">
                ExpressJS
              </li>
              <li className="before:content-['▹'] before:text-[#6FFFE9] before:mr-2">
                NodeJS
              </li>
              <li className="before:content-['▹'] before:text-[#6FFFE9] before:mr-2">
                ReactJS
              </li>
              <li className="before:content-['▹'] before:text-[#6FFFE9] before:mr-2">
                TypeScript
              </li>
              <li className="before:content-['▹'] before:text-[#6FFFE9] before:mr-2">
                PostgreSQL
              </li>
              <li className="before:content-['▹'] before:text-[#6FFFE9] before:mr-2">
                React Native
              </li>
            </ul>
          </motion.div>

          {/* Image Section */}
          <motion.div
            ref={imageRef}
            className="lg:w-[30%] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: imageInView ? 1 : 0,
              scale: imageInView ? 1 : 0.8,
            }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative group">
              <img
                src="avatar.png" // Replace with your profile image path
                alt="Jacob Cyril"
                className="rounded-lg object-cover shadow-lg w-full max-w-sm mx-auto filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
