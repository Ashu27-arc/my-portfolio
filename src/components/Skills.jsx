import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaWordpress, FaGitAlt, FaGithub, FaPhp } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: '#264DE4' },
  { name: 'JavaScript', icon: <FaJs />, level: 80, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact />, level: 75, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 70, color: '#339933' },
  { name: 'MongoDB', icon: <FaDatabase />, level: 65, color: '#47A248' },
  { name: 'WordPress', icon: <FaWordpress />, level: 80, color: '#21759B' },
  { name: 'PHP', icon: <FaPhp />, level: 50, color: '#474A8A' },
  { name: 'Github', icon: <FaGithub />, level: 90, color: '#24292e' },
  { name: 'Git', icon: <FaGitAlt />, level: 75, color: '#F05032' }, 
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            My Skills
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full transition-all duration-300"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <div className="mt-1 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    {skill.level}%
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Additional Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Problem Solving
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Strong analytical and problem-solving abilities
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Team Collaboration
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Excellent communication and teamwork skills
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Project Management
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Efficient project planning and execution
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Continuous Learning
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Passionate about learning new technologies
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 