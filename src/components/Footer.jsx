import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Name and Title */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Ashutosh Rathor</h2>
            <p className="text-gray-400 mt-2">Software Developer</p>
            <p className="text-gray-400 mt-2">Web Developer</p>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
            <p className="text-gray-400 mt-2">WordPress Developer</p>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Contact Me</h3>
            <div className="space-y-2">
              <p>
                <a 
                  href="mailto:rathoreashutosh37@gmail.com" 
                  className="hover:text-blue-400 transition-colors duration-300"
                  aria-label="Email me"
                >
                  📧 rathoreashutosh37@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+918392877813" 
                  className="hover:text-blue-400 transition-colors duration-300"
                  aria-label="Call me"
                >
                  📞 +91 8392877813
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.linkedin.com/in/ashutosh-rathore-644213221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-400 transition-colors duration-300"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Ashu27-arc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition-colors duration-300"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/aaru.sh8207/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-pink-400 transition-colors duration-300"
                aria-label="Visit my Instagram profile"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064003335700"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-600 transition-colors duration-300"
                aria-label="Visit my Facebook profile"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          © {new Date().getFullYear()} Ashutosh Rathor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 