"use client";

export default function About() {
  const skills = [
    "Python", "JavaScript", "TypeScript", "Java", "C#", "C++",
    "React", "Next.js", "Node.js", "ASP.NET Core", "Flask", "Django",
    "PostgreSQL", "MongoDB", "MySQL", "SQL Server",
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "AWS", "Azure", "Docker", "Git", "Linux", "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let me introduce myself
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate Computer Engineering student at Texas Tech University
                  with strong expertise in software development, machine learning, and data science.
                  I specialize in building scalable applications and solving complex technical challenges.
                </p>
                <p>
                  My experience spans across full-stack development, AI/ML implementation, and
                  enterprise software solutions. I&apos;ve worked on projects ranging from Disney-style
                  image generators using advanced AI models to enterprise-grade APIs with robust
                  authentication systems.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or working on innovative solutions
                  that bridge the gap between AI and practical applications.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
