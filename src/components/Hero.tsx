"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Check for uploaded profile picture
    const savedProfilePic = localStorage.getItem('profilePicture');
    if (savedProfilePic) {
      setProfilePicture(savedProfilePic);
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* iOS-style background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950"></div>
      
      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Profile Image with iOS-style design */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-40 h-40 mx-auto mb-8">
              {profilePicture ? (
                <>
                  <div className="relative w-40 h-40 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                    <Image
                      src={profilePicture}
                      alt="Chekwube Ononuju"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl blur opacity-25 animate-pulse"></div>
                </>
              ) : (
                <>
                  <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl backdrop-blur-sm border border-white/20">
                    CO
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl blur opacity-25 animate-pulse"></div>
                </>
              )}
            </div>
          </div>
          
          {/* iOS-style status badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-green-200 dark:border-green-800">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for Opportunities
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Chekwube
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-4xl mx-auto font-medium leading-relaxed">
            Computer Engineering Student at{" "}
            <span className="font-bold text-red-600 dark:text-red-400">Texas Tech University</span>
          </p>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions with AI, machine learning, and modern web technologies.
            Passionate about creating impactful software that makes a difference.
          </p>
          
          {/* iOS-style buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <span className="relative z-10">View My Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-lg text-gray-900 dark:text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-white/30 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-800/60"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Social links with iOS-style design */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/chekwube-ononuju"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/20 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-white/30 dark:hover:bg-gray-800/60 border border-white/30 dark:border-gray-700/50"
            >
              <svg className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/chekwubeononuju/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/20 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-white/30 dark:hover:bg-gray-800/60 border border-white/30 dark:border-gray-700/50"
            >
              <svg className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:chekwube.ononuju@ttu.edu"
              className="group p-4 bg-white/20 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-white/30 dark:hover:bg-gray-800/60 border border-white/30 dark:border-gray-700/50"
            >
              <svg className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-1 h-8 bg-gradient-to-b from-transparent via-gray-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Floating Admin Button */}
      <a
        href="/admin"
        className="fixed top-4 right-4 z-50 bg-white/20 dark:bg-gray-800/40 backdrop-blur-lg p-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-white/30 dark:border-gray-700/50 group"
        title="Admin Panel - Upload Profile Picture"
      >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
        </svg>
      </a>
    </section>
  );
}
