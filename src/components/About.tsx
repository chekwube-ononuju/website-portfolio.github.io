"use client";

import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <div className="text-left max-w-4xl">
            <h2 className="text-4xl font-light text-blue-400 mb-8">About me</h2>
            
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-12 leading-tight">
              I make web and mobile applications.
            </h3>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              I&apos;m a Computer Engineering student at Texas Tech University with a strong foundation in software development, machine learning, and data science. I have experience working with enterprise technologies and building scalable applications. My recent internship at Dell Technologies and various projects have given me hands-on experience with modern development practices and cloud technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
