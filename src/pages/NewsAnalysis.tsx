import React from 'react';
import { Calendar, TrendingUp, AlertTriangle, Globe, Clock } from 'lucide-react';

const NewsAnalysis = () => {
  const featuredNews = [
    {
      title: 'Bitcoin ETF Approval Sparks Market Rally',
      excerpt: 'Major institutions show increased interest following SEC approval of spot Bitcoin ETFs, driving prices to new yearly highs.',
      category: 'Market News',
      readTime: '4 min read',
      date: '2 hours ago',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg',
      trending: true
    },
    {
      title: 'EU Regulatory Framework for Crypto Assets Finalized',
      excerpt: 'The Markets in Crypto-Assets (MiCA) regulation brings clarity to European cryptocurrency operations.',
      category: 'Regulation',
      readTime: '6 min read', 
      date: '5 hours ago',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg',
      trending: false
    },
    {
      title: 'DeFi Protocol Suffers $50M Exploit',
      excerpt: 'Security breach highlights ongoing risks in decentralized finance as developers rush to implement fixes.',
      category: 'Security',
      readTime: '3 min read',
      date: '8 hours ago',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      trending: false
    }
  ];

  const marketAnalysis = [
    {
      title: 'Weekly Crypto Market Analysis',
      excerpt: 'Technical analysis of major cryptocurrencies and market trends for the upcoming week.',
      author: 'Sarah Chen',
      date: '1 day ago',
      readTime: '8 min read'
    },
    {
      title: 'Altcoin Season: What to Watch',
      excerpt: 'Identifying potential breakout altcoins and key support levels to monitor.',
      author: 'Mike Torres',
      date: '2 days ago',
      readTime: '6 min read'
    },
    {
      title: 'Bitcoin Dominance and Market Cycles',
      excerpt: 'Understanding market cycles and how Bitcoin dominance affects altcoin performance.',
      author: 'Lisa Wang',
      date: '3 days ago',
      readTime: '10 min read'
    }
  ];

  const regulatoryUpdates = [
    {
      title: 'SEC Cryptocurrency Enforcement Actions',
      excerpt: 'Latest enforcement actions and what they mean for the crypto industry.',
      jurisdiction: 'United States',
      date: '1 day ago',
      impact: 'High'
    },
    {
      title: 'UK Financial Conduct Authority Guidance',
      excerpt: 'New guidance on cryptocurrency marketing and consumer protection.',
      jurisdiction: 'United Kingdom',
      date: '3 days ago',
      impact: 'Medium'
    },
    {
      title: 'Japan Expands Crypto Trading Regulations',
      excerpt: 'Enhanced investor protection measures for retail cryptocurrency trading.',
      jurisdiction: 'Japan',
      date: '5 days ago',
      impact: 'Medium'
    }
  ];

  const CategoryBadge = ({ category }: { category: string }) => {
    const colors = {
      'Market News': 'bg-green-100 text-green-800',
      'Regulation': 'bg-yellow-100 text-yellow-800',
      'Security': 'bg-red-100 text-red-800',
      'Technology': 'bg-blue-100 text-blue-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'}`}>
        {category}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Analysis</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Stay informed with the latest cryptocurrency news, market analysis, and regulatory developments. 
              Make better investment decisions with our expert insights.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured News */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredNews.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  {article.trending && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <CategoryBadge category={article.category} />
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Market Analysis */}
          <div className="lg:col-span-2">
            <section>
              <div className="flex items-center mb-8">
                <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Market Analysis</h2>
              </div>
              
              <div className="space-y-6">
                {marketAnalysis.map((article, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>By {article.author}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold">
                        Read Analysis →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Regulatory Updates */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Regulatory Updates</h3>
              </div>
              
              <div className="space-y-4">
                {regulatoryUpdates.map((update, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{update.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        update.impact === 'High' ? 'bg-red-100 text-red-800' :
                        update.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {update.impact} Impact
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{update.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Globe className="h-3 w-3 mr-1" />
                        {update.jurisdiction}
                      </div>
                      <span>{update.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Daily Crypto Brief</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the most important crypto news and analysis delivered to your inbox every morning.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe Free
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAnalysis;