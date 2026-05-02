const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">samer</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg">
              I create beautiful, responsive websites with modern technologies.
              Passionate about UI/UX and bringing ideas to life.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-primary text-primary dark:text-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src="images/profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
