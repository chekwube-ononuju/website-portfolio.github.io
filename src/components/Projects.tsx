"use client";

import { useState } from "react";

export default function Projects() {
  const [, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Credit Card Fraud Detection System",
      description: "A project to create different machine learning models to detect fraud in credit card transactions. Implements multiple algorithms for accurate fraud detection with comprehensive data analysis.",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Jupyter Notebook", "Data Analysis"],
      githubUrl: "https://github.com/chekwube-ononuju/Credit-Card-Fraud-Detection-System-Project",
      liveUrl: "#",
      category: "AI & Machine Learning",
      gradient: "from-red-500 to-orange-500",
      icon: "🛡️"
    },
    {
      title: "Disney Image Generator",
      description: "Transform photos into magical Disney-style artwork using advanced AI models and image processing techniques. Features real-time preview and multiple artistic styles.",
      technologies: ["TypeScript", "Next.js", "AI/ML", "Image Processing", "Tailwind CSS"],
      githubUrl: "https://github.com/chekwube-ononuju/Disney-Image-Generator",
      liveUrl: "#",
      category: "AI & Machine Learning",
      gradient: "from-purple-500 to-pink-500",
      icon: "🎨"
    },
    {
      title: "Enterprise Web API",
      description: "Enterprise-grade ASP.NET Core Web API with JWT authentication, comprehensive validation, and extensive documentation. Built for scalability and security.",
      technologies: ["C#", "ASP.NET Core", "JWT", "Entity Framework", "Swagger"],
      githubUrl: "https://github.com/chekwube-ononuju/Enterprise-Web-API",
      liveUrl: "#",
      category: "Backend Development",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🔗"
    },
    {
      title: "AI vs Human Text Classifier",
      description: "Advanced NLP machine learning system that classifies text as AI-generated or human-written with high accuracy using state-of-the-art algorithms.",
      technologies: ["Python", "Machine Learning", "NLP", "TensorFlow", "Scikit-learn"],
      githubUrl: "https://github.com/chekwube-ononuju/AI-vs-Human-Classifier-Project",
      liveUrl: "#",
      category: "AI & Machine Learning",
      gradient: "from-green-500 to-teal-500",
      icon: "🤖"
    },
    {
      title: "Spotify Top Tracks App",
      description: "Interactive web application that analyzes and displays your Spotify listening habits with beautiful visualizations and personalized insights.",
      technologies: ["JavaScript", "Spotify API", "Chart.js", "React", "Node.js"],
      githubUrl: "https://github.com/chekwube-ononuju/Spotify-Top-Tracks-App",
      liveUrl: "#",
      category: "Web Development",
      gradient: "from-indigo-500 to-purple-500",
      icon: "🎵"
    },
    {
      title: "Stock Market Data Analysis",
      description: "Comprehensive analysis of historical stock and revenue data using Python. Features interactive visualizations and predictive modeling capabilities.",
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook", "Data Science"],
      githubUrl: "https://github.com/chekwube-ononuju/Analyzing-Historical-Stock-Data",
      liveUrl: "#",
      category: "Data Science",
      gradient: "from-orange-500 to-red-500",
      icon: "📈"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* iOS-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-indigo-200 dark:border-indigo-800">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            Featured Work
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            My <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in AI, web development, and data science.
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* iOS-style card */}
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 dark:border-gray-700/50 transform hover:-translate-y-2">
                
                {/* Gradient header */}
                <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="text-6xl opacity-90 transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-white/50 dark:border-gray-700/50">
                    {project.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-100/80 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs rounded-full backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100/80 dark:bg-gray-700/40 text-gray-600 dark:text-gray-400 text-xs rounded-full backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-sm">Code</span>
                    </a>
                    
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-medium py-2.5 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/50 dark:border-gray-600/50"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Hover effect glow */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.gradient} blur-xl -z-10 transform scale-105`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/chekwube-ononuju"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm border border-white/20"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Explore All Projects</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}