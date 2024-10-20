import React from 'react';
import { TrendingUp, Users, Database, Zap } from 'lucide-react';

const services = [
  { icon: TrendingUp, title: 'Growth Strategies', description: 'Tailored plans to accelerate your business growth' },
  { icon: Users, title: 'Customer Experience', description: 'Enhance customer satisfaction and loyalty' },
  { icon: Database, title: 'Data Analytics', description: 'Unlock insights from your data to drive decisions' },
  { icon: Zap, title: 'Digital Innovation', description: 'Implement cutting-edge technologies for your business' },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;