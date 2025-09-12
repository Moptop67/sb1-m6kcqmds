import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  publishedAt: string;
  source: string;
  category: 'market' | 'regulation' | 'technology' | 'defi';
}

const LiveNewsWidget = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock news data - replace with real API later
  const mockNews: NewsItem[] = [
    {
      id: '1',
      title: 'Bitcoin Reaches New Monthly High Amid ETF Optimism',
      excerpt: 'Bitcoin surged past $45,000 as institutional investors show renewed interest following ETF approval rumors.',
      url: '#',
      publishedAt: '2 hours ago',
      source: 'CryptoNews',
      category: 'market'
    },
    {
      id: '2', 
      title: 'EU Finalizes Comprehensive Crypto Regulation Framework',
      excerpt: 'The Markets in Crypto-Assets (MiCA) regulation brings clarity to European cryptocurrency operations.',
      url: '#',
      publishedAt: '4 hours ago',
      source: 'Regulatory Times',
      category: 'regulation'
    },
    {
      id: '3',
      title: 'Ethereum Layer 2 Solutions See Record Transaction Volume',
      excerpt: 'Arbitrum and Optimism process over 2 million transactions daily as users seek lower fees.',
      url: '#',
      publishedAt: '6 hours ago',
      source: 'DeFi Pulse',
      category: 'technology'
    },
    {
      id: '4',
      title: 'Major DeFi Protocol Launches New Yield Farming Program',
      excerpt: 'Uniswap announces enhanced liquidity mining rewards for select trading pairs.',
      url: '#',
      publishedAt: '8 hours ago',
      source: 'DeFi Weekly',
      category: 'defi'
    },
    {
      id: '5',
      title: 'Crypto Market Cap Surpasses $1.8 Trillion',
      excerpt: 'Total cryptocurrency market capitalization reaches new yearly high driven by institutional adoption.',
      url: '#',
      publishedAt: '12 hours ago',
      source: 'Market Watch',
      category: 'market'
    }
  ];

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, use mock data
      // TODO: Replace with real API call
      // const response = await fetch('/api/news?limit=5');
      // if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      // const data = await response.json();
      
      setNews(mockNews);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load news');
      // Fallback to mock data even on error
      setNews(mockNews);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    
    // Refresh news every 5 minutes
    const interval = setInterval(fetchNews, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      market: 'bg-green-100 text-green-800',
      regulation: 'bg-yellow-100 text-yellow-800', 
      technology: 'bg-blue-100 text-blue-800',
      defi: 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      market: 'Market',
      regulation: 'Regulation',
      technology: 'Technology', 
      defi: 'DeFi'
    };
    return labels[category as keyof typeof labels] || category;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">📰 Latest Crypto News</h3>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
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
        <h3 className="text-xl font-bold text-gray-900">📰 Latest Crypto News</h3>
        <button 
          onClick={fetchNews}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          disabled={loading}
        >
          Refresh
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

