import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, ExternalLink } from 'lucide-react';
import { newsService, NewsItem } from '../services/newsService';

const LiveNewsWidget = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch real RSS news from legitimate crypto sources
      const latestNews = await newsService.fetchAllNews(5);
      setNews(latestNews);
      
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load news');
      // Fallback will be handled by newsService
      const fallbackNews = await newsService.fetchAllNews(5);
      setNews(fallbackNews);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    
    // Refresh news every 15 minutes (respectful to RSS sources)
    const interval = setInterval(fetchNews, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      bitcoin: 'bg-orange-100 text-orange-800',
      ethereum: 'bg-blue-100 text-blue-800',
      market: 'bg-green-100 text-green-800',
      regulation: 'bg-yellow-100 text-yellow-800', 
      defi: 'bg-purple-100 text-purple-800',
      general: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      bitcoin: 'Bitcoin',
      ethereum: 'Ethereum',
      market: 'Market',
      regulation: 'Regulation',
      defi: 'DeFi',
      general: 'News'
    };
    return labels[category as keyof typeof labels] || 'News';
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">📰 Live Crypto News</h3>
          <div className="flex items-center text-sm text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Live RSS Feeds
          </div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">📰 Live Crypto News</h3>
          <p className="text-sm text-gray-600">From CoinDesk, Cointelegraph, Decrypt & more</p>
        </div>
        <button 
          onClick={fetchNews}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
          ) : (
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          )}
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
          <p className="text-yellow-800 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        {news.map((item) => (
          <article key={item.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start justify-between mb-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(item.category)}`}>
                {getCategoryLabel(item.category)}
              </span>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {item.publishedAt}
              </div>
            </div>
            
            <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
              {item.title}
            </h4>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {item.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{item.source}</span>
              <a
                href={item.url}
                className="text-blue-600 hover:text-blue-700 text-xs font-medium inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <a
          href="/news"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
        >
          View All News
          <TrendingUp className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default LiveNewsWidget;

