"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            Chekwube Ononuju
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto font-medium">
            Computer Engineering Student at{" "}
            <span className="text-blue-400">Texas Tech University</span>
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Passionate about AI, software development, and building innovative solutions.
            Experience with full-stack development, machine learning, and enterprise applications.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              download
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
