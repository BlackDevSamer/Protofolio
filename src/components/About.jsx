import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center animate-slide-up">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
              <img
                src="images/profile.jpeg"
                alt="About"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I'm a passionate frontend developer with 3+ years of experience
              creating modern web applications. I specialize in React and
              responsive design principles. My goal is to build intuitive user
              interfaces that provide exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                  <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Computer Science Degree
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    zagazig University, 2026
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary/10 dark:bg-secondary/20 p-3 rounded-full mr-4">
                  <Briefcase className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full Stack Developer
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Company Name, 2021-Present
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me hiking in the mountains,
              reading sci-fi novels, or experimenting with new cooking recipes.
              I believe in continuous learning and staying updated with the
              latest web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
