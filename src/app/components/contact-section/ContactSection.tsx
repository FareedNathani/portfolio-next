import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <h2 className="lg:text-4xl md:text-4xl text-3xl font-bold text-center mb-12 text-white">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-brbg-gradient-to-r from-indigo-600 via-teal-500 to-teal-400 font-serif lg:text-5xl md:text-5xl text-4xl">
            Me
          </span>
        </h2>
        <form className="transition-shadow duration-300 ease-in hover:shadow-lg max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-gray-800 rounded-lg border-2 border-indigo-600">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* For left side */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* For full name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 text-gray-300 mt-1 p-2 sm:p-3 border-2 border-indigo-500 bg-gray-700 rounded w-full focus:bg-white focus:text-black"
                />
              </div>

              {/* For email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 text-gray-300 mt-1 p-2 sm:p-3 border-2 border-indigo-500 bg-gray-700 rounded w-full focus:bg-white focus:text-black"
                />
              </div>

              {/* For phone number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 text-gray-300 mt-1 p-2 sm:p-3 border-2 border-indigo-500 bg-gray-700 rounded w-full focus:bg-white focus:text-black"
                />
              </div>

              {/* For Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 text-gray-300 mt-1 p-2 sm:p-3 border-2 border-indigo-500 bg-gray-700 rounded w-full focus:bg-white focus:text-black"
                />
              </div>
            </div>

            {/* For right side */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 text-gray-300 mt-1 p-2 sm:p-3 h-32 sm:h-48 rounded border-2 border-indigo-500 bg-gray-700 w-full resize-none focus:bg-white focus:text-black"
                />
              </div>
              <button
                type="submit"
                className="transition-all transform duration-300 ease-in-out shadow-lg hover:scale-105 w-full p-2 sm:p-3 text-white rounded bg-indigo-700 hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
