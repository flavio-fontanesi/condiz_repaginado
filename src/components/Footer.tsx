import React from 'react';
import { BarChart2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Condiz Management</span>
            </div>
            <p className="text-gray-400">Elevating business performance through data-driven strategies and innovation.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Articles</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">São Paulo, Brazil</p>
            <p className="text-gray-400 mb-2">contact@condizmanagement.com</p>
            <p className="text-gray-400">+55 (11) 1234-5678</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Condiz Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;