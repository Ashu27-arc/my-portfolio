import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Chatbot from "./components/Chatbot";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <CustomCursor />
      <Analytics />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
