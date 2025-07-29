"use client";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Dell Technologies",
      period: "May 2024 - Aug 2024",
      description: "Developed and maintained enterprise software solutions using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software products and gained experience with enterprise development practices.",
      technologies: ["JavaScript", "React", "Node.js", "SQL", "Git", "Agile Methodology"]
    },
    {
      title: "Research Assistant",
      company: "Texas Tech University",
      period: "Jan 2024 - Present",
      description: "Conducting research in machine learning and AI applications. Developing algorithms and analyzing datasets to extract meaningful insights for academic research projects.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Data Analysis", "Machine Learning", "Research"]
    },
    {
      title: "Teaching Assistant",
      company: "Texas Tech University - Computer Science Department",
      period: "Aug 2023 - Dec 2023",
      description: "Assisted in teaching computer science courses, helping students understand programming concepts and debugging code. Provided mentorship and guidance to improve student learning outcomes.",
      technologies: ["Python", "Java", "C++", "Teaching", "Mentoring", "Academic Support"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Texas Tech University",
      period: "Aug 2022 - May 2026 (Expected)",
      description: "Pursuing a comprehensive degree in Computer Engineering with focus on software development, machine learning, and computer systems. Relevant coursework includes Data Structures, Algorithms, Software Engineering, Database Systems, and Artificial Intelligence.",
      gpa: "Strong Academic Performance"
    },
    {
      degree: "Relevant Coursework & Certifications",
      school: "Technical Skills Development",
      period: "2022 - Present",
      description: "Continuous learning in emerging technologies including cloud computing, AI/ML frameworks, and modern web development practices. Completed various online courses and certifications in software development."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-green-200 dark:border-green-800">
                  <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-2 top-0"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                      {edu.school}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
