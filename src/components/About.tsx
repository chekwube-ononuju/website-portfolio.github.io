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
          
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            
            {/* Profile Picture Section */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    {/* Placeholder for profile picture */}
                    <div className="text-6xl">
                      👨🏾‍💻
                    </div>
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border border-blue-400/20 animate-pulse"></div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="lg:w-2/3 text-left">
              <h2 className="text-4xl font-light text-blue-400 mb-8">About me</h2>
              
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-12 leading-tight">
                I make web and mobile applications.
              </h3>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                I&apos;m a Computer Engineering student at Texas Tech University with a strong foundation in software development, machine learning, and data science. I have experience working with robotics systems and building scalable applications. My research work and various projects have given me hands-on experience with modern development practices, cloud technologies, and embedded systems programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
