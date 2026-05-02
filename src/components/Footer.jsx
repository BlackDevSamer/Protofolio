import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <a href="#" className="text-2xl font-bold gradient-text mb-4">
            Portfolio
          </a>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-lg">
            Thank you for visiting my portfolio. Let's create something amazing
            together!
          </p>
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/BlackDevSamer"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/samer-mohamed-a26624324/"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="https://www.facebook.com/samer.mohamed.555673/"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/s_m0hmed/"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © 2025 Samer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
