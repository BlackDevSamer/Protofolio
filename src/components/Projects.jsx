import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'ERP System',
      description: 'A comprehensive ERP system for managing business operations, including sales, purchases, inventory, and customers.',
      image: '/images/ERP.png',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveLink: '/soon',
      githubLink: 'https://github.com/BlackDevSamer/Clothes-System-',
    },
    {
      title: 'Sea Level migration with AI',
      description: 'A model to predict the migration of people and high levels of coastal flooding due to sea level rise using AI. working with LSTM AI model.',
      image: '/images/sealevel.png',
      tags: ['React', '.NET', 'SQL Server'],
      liveLink: '/soon',
      githubLink: 'https://github.com/BlackDevSamer/Alexandria-Sea-Leval-Rise-Mitigation',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition duration-300 animate-slide-up"
            >
              <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-600">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-24 overflow-y-auto">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Link
                    to={project.liveLink}
                    className="text-primary hover:underline flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                  </Link>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center"
                  >
                    <i className="fab fa-github mr-1"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up">
          <a
            href="#"
            className="inline-block border border-primary text-primary dark:text-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
