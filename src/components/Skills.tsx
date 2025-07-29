"use client";

import { useState, useEffect } from "react";

export default function Skills() {
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

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express.js", "Flask", "Django", "ASP.NET Core"]
    },
    {
      title: "AI/ML & Data Science",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenAI API", "Computer Vision"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (Certified)", "Azure", "Docker", "Git", "CI/CD", "Linux", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Redis"]
    },
    {
      title: "Tools & Technologies",
      skills: ["VS Code", "Jupyter", "Postman", "Figma", "Tailwind CSS", "Bootstrap"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-blue-400 mb-8">Technical Skills</h2>
            
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-12 leading-tight">
              Technologies I work with.
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="text-xl font-semibold text-white mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
