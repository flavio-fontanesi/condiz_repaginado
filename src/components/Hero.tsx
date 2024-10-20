import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Elevating Business Performance in the Digital Age</h1>
        <p className="text-xl mb-8">Data-driven growth strategies, cutting-edge experiences, and innovative solutions</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
          Discover Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;