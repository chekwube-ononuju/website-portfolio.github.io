"use client";

export default function Experience() {
  const experiences = [
    {
      title: "Google Software Engineering Program (G-SWEP) Mentee",
      company: "Google x Basta",
      period: "March 2025 - May 2025",
      description: "Partnered with Google SWE on 8+ Python algorithms, improving accuracy from 60% to 90%. Reduced algorithm implementation time by 30% through optimization and clean code practices. Participated in intensive software engineering mentorship program.",
      technologies: ["Python", "Algorithms", "Code Optimization", "Software Engineering", "Mentorship"]
    },
    {
      title: "Open-Source Contributor",
      company: "Color Stack",
      period: "Dec 2024 - Present",
      description: "Optimized COIN-OR Ipopt solver implementation, reducing setup time by 20 minutes and improving performance by 7%. Created comprehensive best-practices guide for MPI/MUMPS integration, enhancing developer productivity.",
      technologies: ["COIN-OR Ipopt", "MPI", "MUMPS", "Performance Optimization", "Documentation", "Open Source"]
    },
    {
      title: "Software Engineer Extern",
      company: "Webacy",
      period: "Sep 2024 - Oct 2024",
      description: "Engineered unsupervised ML clustering for 50+ smart contracts, reducing vulnerabilities by 20%. Worked remotely to develop machine learning solutions for blockchain security and smart contract analysis.",
      technologies: ["Python", "Machine Learning", "Unsupervised Clustering", "Smart Contracts", "Blockchain", "Security"]
    },
    {
      title: "Research Assistant",
      company: "Texas Tech University - Computer Science Department",
      period: "Jan 2024 - Present",
      description: "Conducting research in machine learning applications for data analysis and robotics projects. Developing Python scripts for data preprocessing and model training using TensorFlow and PyTorch. Assisting graduate students with research experiments and documenting findings for academic publications.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Robotics", "Pandas", "NumPy", "Jupyter", "Research Methodology"]
    },
    {
      title: "Robotics Team Member",
      company: "Texas Tech University - Robotics Club",
      period: "Sep 2023 - Present",
      description: "Developing autonomous robotics systems using embedded programming and sensor integration. Working on robot navigation, obstacle detection, and mechanical design. Programming microcontrollers and implementing control algorithms for competitive robotics events.",
      technologies: ["C++", "Arduino", "Raspberry Pi", "Sensors", "Robotics", "Embedded Systems", "Control Systems"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Texas Tech University",
      period: "Jan 2023 - Dec 2026 (Expected)",
      description: "Pursuing a comprehensive degree in Computer Engineering with focus on software development, machine learning, and computer systems. Relevant coursework includes Data Structures, Algorithms, Software Engineering, Database Systems, Artificial Intelligence, and Cloud Computing.",
      gpa: "Strong Academic Performance"
    },
    {
      degree: "AWS Cloud Practitioner Certified",
      school: "Amazon Web Services",
      period: "2024",
      description: "AWS Certified Cloud Practitioner certification demonstrating foundational knowledge of AWS cloud services, architecture, security, and pricing. Validates understanding of cloud computing concepts and AWS global infrastructure."
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
