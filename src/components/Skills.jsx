import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', level: '95%' },
    { name: 'JavaScript', level: '90%' },
    { name: 'React', level: '85%' },
    { name: 'Vue.js', level: '80%' },
  ];

  const professionalSkills = [
    { name: 'Communication', level: '90%' },
    { name: 'Teamwork', level: '85%' },
    { name: 'Problem Solving', level: '95%' },
    { name: 'Creativity', level: '88%' },
  ];

  const technologies = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'text-green-500' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-600' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-500' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="skill-bar bg-primary h-2.5 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up">
            <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
            <div className="space-y-6">
              {professionalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="skill-bar bg-secondary h-2.5 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 animate-slide-up">
          <h3 className="text-xl font-semibold mb-8 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition"
              >
                <i className={`${tech.icon} text-4xl ${tech.color} mb-2`}></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
