import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#0B132B] text-white py-20 px-4 lg:py-28 lg:px-0"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-[#6FFFE9] mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        <div className="lg:flex justify-between gap-16">
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-[#14203B] p-8 rounded-xl shadow-xl">
            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg text-[#8892b0] mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="w-full p-4 rounded-lg bg-[#1c2330] text-white placeholder-[#8892b0] border-2 border-[#6FFFE9] focus:outline-none focus:border-[#6FFFE9]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg text-[#8892b0] mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full p-4 rounded-lg bg-[#1c2330] text-white placeholder-[#8892b0] border-2 border-[#6FFFE9] focus:outline-none focus:border-[#6FFFE9]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-[#8892b0] mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Your message or inquiry"
                  className="w-full p-4 rounded-lg bg-[#1c2330] text-white placeholder-[#8892b0] border-2 border-[#6FFFE9] focus:outline-none focus:border-[#6FFFE9]"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#6FFFE9] text-[#0B132B] text-lg font-medium rounded-lg hover:bg-[#0B132B] hover:text-[#6FFFE9] border-2 border-[#6FFFE9] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>

          {/* Contact Details */}
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-[#6FFFE9]">
                Get in Touch
              </h3>
              <p className="text-lg text-[#ccd6f6]">
                I would love to hear from you! Whether you have a question, a
                project in mind, or just want to chat, feel free to reach out
                using the form or via email.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold text-[#6FFFE9]">Email</h4>
              <p className="text-lg text-[#ccd6f6]">jacobsebcyril@gmail.com</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h4 className="text-xl font-semibold text-[#6FFFE9]">
                Connect with me
              </h4>
              <br />
              <div className="flex space-x-6">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6FFFE9] hover:text-[#0B132B] transition duration-300"
                >
                  <img
                    src="src/assets/logo-linkedin.png" // Replace with your LinkedIn logo path
                    alt="LinkedIn"
                    className="w-8 h-8 hover:opacity-80 transition duration-300"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6FFFE9] hover:text-[#0B132B] transition duration-300"
                >
                  <img
                    src="src/assets/github.png" // Replace with your GitHub logo path
                    alt="GitHub"
                    className="w-8 h-8 hover:opacity-80 transition duration-300"
                  />
                </a>

                {/* Email */}
                <a
                  href="mailto:jacob.cyril@example.com"
                  className="text-[#6FFFE9] hover:text-[#0B132B] transition duration-300"
                >
                  <img
                    src="src/assets/mail.png" // Replace with your email logo path
                    alt="Email"
                    className="w-8 h-8 hover:opacity-80 transition duration-300"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
