import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#0B132B] text-white py-20 px-4 lg:py-28 lg:px-0 flex flex-col justify-center items-center text-center"
    >
      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-[#ccd6f6] mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="text-lg text-[#8892b0] max-w-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        If you're looking for a dedicated developer to join your team or help
        bring your ideas to life, feel free to get in touch. I'd love to hear
        from you and discuss how I can contribute to your project.
      </motion.p>
      <motion.a
        href="mailto:jacobsebcyril@gmail.com"
        className="px-8 py-4 text-lg text-[#6FFFE9] border-2 border-[#6FFFE9] rounded-lg hover:bg-[#6FFFE9] hover:text-[#0B132B] transition duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Say Hello
      </motion.a>
    </section>
  );
};

export default ContactSection;
