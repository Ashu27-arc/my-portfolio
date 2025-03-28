import { motion } from "framer-motion";
import profileImage from "../assets/my2.jpg";
import resumePDF from "../resume/UpdatedCV.pdf";

const Hero = () => {
  return (
    <section 
      className="h-screen flex flex-col items-center justify-center text-center relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      
      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 w-full relative z-10">
        <div className="md:w-1/2 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-white"
          >
            Hi, I'm <span className="text-blue-400">Ashutosh</span>
          </motion.h1>
          <p className="mt-4 text-lg text-gray-200">
            Web Developer | React | WordPress | PHP
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={profileImage}
            alt="Ashutosh"
            className="rounded-full mx-auto w-64 h-64 object-cover shadow-lg border-4 border-white/20"
          />
        </div>
      </div>
      <div className="absolute bottom-8 w-full z-10 flex justify-center gap-4">
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600"
        >
          View Projects
        </motion.a>
        <motion.a
          href={resumePDF}
          download="UpdatedCV.pdf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="inline-block px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600"
        >
          Hire Me
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
