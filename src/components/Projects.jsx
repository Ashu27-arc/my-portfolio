import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolioImage from "../assets/projects.png";
import ecommerceImage from "../assets/projects-1.png";
import taskManagerImage from "../assets/projects-2.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode, and a clean design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "mongoDB", "node.js"],
    githubLink: "https://github.com/Ashu27-arc/my-portfolio.git",
    liveLink: "https://my-portfolio-bay-one-77.vercel.app/",
    image: portfolioImage
  },
  {
    title: "Woocommerce Website",
    description: "A full-featured e-commerce platform built with WordPress and WooCommerce, featuring user authentication, product management, a shopping cart, and secure payment integration.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress",],
    githubLink: "https://github.com/Ashu27-arc/swpcReact.git",
    liveLink: "https://www.shewings.com/",
    image: ecommerceImage
  },
  {
    title: "Shewings Foundation Website",
    description: "A dynamic website for the Shewings Foundation, designed to facilitate collaboration and project management with features like real-time updates, user roles, and a user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    githubLink: "https://github.com/Ashu27-arc/swf.git",
    liveLink: "https://shewingsfoundation.com/",
    image: taskManagerImage
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            My Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Here are some of the projects I've worked on. Each project has been carefully crafted to showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm transition-colors duration-300 border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
