import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out to me for any questions or opportunities.
              I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:samermohamed123@yahoo.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition"
                  >
                    samermohamed123@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary/10 dark:bg-secondary/20 p-3 rounded-full mr-4">
                  <Phone className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href="tel:+201228273237"
                    className="text-gray-600 dark:text-gray-400 hover:text-secondary transition"
                  >
                    +20 1228273237
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-500/10 dark:bg-purple-500/20 p-3 rounded-full mr-4">
                  <MapPin className="text-purple-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mit ghamr, Egypt
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/BlackDevSamer"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/samer-mohamed-a26624324/"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100009090529383"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-400 hover:text-white transition"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/s_m0hmed/"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 animate-slide-up">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition"
                  placeholder="Let me know how I can help you"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
