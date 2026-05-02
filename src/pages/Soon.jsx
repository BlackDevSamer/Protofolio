import { Link } from 'react-router-dom';

const Soon = () => {
  return (
    <div className="min-h-screen bg-light text-gray-800 dark:bg-dark dark:text-gray-200 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold animate-pulse mb-8 gradient-text">
          COMING SOOOOOOON !
        </h1>
        
        <Link 
          to="/" 
          className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 px-8 py-3 rounded-full font-medium transition duration-300 transform hover:-translate-y-1"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Soon;
