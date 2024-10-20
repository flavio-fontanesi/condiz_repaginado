import React from 'react';

const articles = [
  {
    title: 'Ensuring Company Growth Amid Economic Crisis and Technological Advancements',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'The Future is Here: How AI Will Transform Our Lives and Businesses',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Turning Tensions into Opportunities: The Art of Qualifying and Nurturing Leads',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const Articles = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <a href="#" className="text-blue-600 hover:underline">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;