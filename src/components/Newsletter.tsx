import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Stay Informed</h2>
        <p className="text-center text-gray-600 mb-8">Receive the best business content directly in your inbox</p>
        <form className="max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <input type="text" placeholder="First Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input type="text" placeholder="Last Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;