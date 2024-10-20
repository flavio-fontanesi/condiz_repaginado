import React from 'react';
import { BarChart2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BarChart2 className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Condiz Management</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Articles</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;