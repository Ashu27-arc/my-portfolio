import React from 'react';
import profileImage from "../assets/my1.jpg";
import bgVideo from "../assets/Videos/bg-video-1.mp4";

const About = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content with semi-transparent background */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src={profileImage}
                alt="Ashutosh Rathor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Who I Am</h3>
              <p className="text-gray-200 leading-relaxed">
                I am a passionate Full Stack Developer with expertise in web development and WordPress.
                With a strong foundation in both front-end and back-end technologies, I create
                responsive and user-friendly web applications that solve real-world problems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">My Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2 text-white">Frontend</h4>
                  <ul className="text-gray-200 space-y-1">
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>Tailwind CSS</li>
                    <li>React Native</li>
                  </ul>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2 text-white">Backend</h4>
                  <ul className="text-gray-200 space-y-1">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>WordPress</li>
                    <li>Typescript</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Experience</h3>
              <div className="space-y-4">
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-white">Web Developer Executive</h4>
                  <h3 className="font-semibold text-white">Binarama Private Limited</h3>
                  <p className="text-gray-200">2025 - Present</p>
                  <p className="text-gray-200 mt-2">
                    Led development of enterprise IT solutions using WordPress, creating custom themes
                    and plugins. Optimized website performance, improved SEO rankings, and implemented
                    security best practices. Managed multiple client projects simultaneously.
                  </p>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-white">Web Developer</h4>
                  <h3 className="font-semibold text-white">SheWigs Healthcare Private Limited</h3>
                  <p className="text-gray-200">2024 - 2025</p>
                  <p className="text-gray-200 mt-2">
                    Developed and maintained WordPress websites, implementing custom
                    themes and plugins.
                  </p>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-white">Software Developer</h4>
                  <h3 className="font-semibold text-white">Veloxn Private Limited</h3>
                  <p className="text-gray-200">2023 - 2024</p>
                  <p className="text-gray-200 mt-2">
                    Working on various web development projects, focusing on creating
                    responsive and scalable applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;