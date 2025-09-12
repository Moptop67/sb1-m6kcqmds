import React from 'react';
import NewsSection from '../components/NewsSection';

const NewsAnalysis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Analysis</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Stay informed with the latest cryptocurrency news, market analysis, and regulatory developments from trusted sources.
            </p>
            <div className="mt-6 flex items-center justify-center text-purple-200">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Live RSS feeds from CoinDesk, Cointelegraph, Decrypt & more
            </div>
          </div>
        </div>
      </section>

      {/* RSS News Section */}
      <NewsSection />
    </div>
  );
};

export default NewsAnalysis;