import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, ExternalLink, RefreshCw } from 'lucide-react';
import { newsService, NewsItem } from '../services/newsService';

const NewsSection = () => {
  const [featuredNews, setFeaturedNews] = useState<NewsItem[]>([]);
  const [bitcoinNews, setBitcoinNews] = useState<NewsItem[]>([]);
  const [regulationNews, setRegulationNews] = useState<NewsItem[]>([]);
  const [defiNews, setDefiNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchAllNews = async (showRefreshing = false) => {
    try {
      if (showRefreshing) setRefreshing(true);
      else setLoading(true);

      // Fetch news from different categories
      const [featured, bitcoin, regulation, defi] = await Promise.all([
        newsService.fetchAllNews(6), // Featured news
        newsService.fetchNewsByCategory('bitcoin', 4),
        newsService.fetchNewsByCategory('regulation', 4),
        newsService.fetchNewsByCategory('defi', 4)
      ]);

      setFeaturedNews(featured);
      setBitcoinNews(bitcoin);
      setRegulationNews(regulation);
      setDefiNews(defi);

    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAllNews();
    
    // Auto-refresh every 20 minutes
    const interval = setInterval(() => fetchAllNews(true), 20 * 60 * 1000);
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

  const NewsCard = ({ article, featured = false }: { article: NewsItem, featured?: boolean }) => (
    <article className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${featured ? 'md:flex' : ''}`}>
      {featured && (
        <div className="md:w-1/3">
          <div className="h-48 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="text-white text-center p-4">
              <TrendingUp className="h-12 w-12 mx-auto mb-2" />
              <p className="text-sm font-medium">Featured News</p>
            </div>
          </div>
        </div>
      )}
      
      <div className={featured ? 'md:w-2/3 p-6' : 'p-6'}>
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(article.category)}`}>
            {getCategoryLabel(article.category)}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            {article.publishedAt}
          </div>
        </div>
        
        <h3 className={`font-bold text-gray-900 mb-3 ${featured ? 'text-xl' : 'text-lg'}`}>
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-medium">{article.source}</span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center"
          >
            Read Full Article
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </div>
    </article>
  );

  const NewsGrid = ({ title, news, icon }: { title: string, news: NewsItem[], icon: React.ReactNode }) => (
    <section className="mb-12">
      <div className="flex items-center mb-6">
        {icon}
        <h2 className="text-2xl font-bold text-gray-900 ml-3">{title}</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {news.slice(0, 4).map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading latest crypto news from RSS feeds...</p>
        </div>
        
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-4xl font-bold text-gray-900">Latest Crypto News</h1>
          <button
            onClick={() => fetchAllNews(true)}
            disabled={refreshing}
            className="ml-4 p-2 text-blue-600 hover:text-blue-700 disabled:opacity-50"
            title="Refresh all news"
          >
            <RefreshCw className={`h-5 w-5 ${refreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-time crypto news from trusted sources including CoinDesk, Cointelegraph, Decrypt, and more.
        </p>
        <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Live RSS feeds • Updates every 15 minutes
        </div>
      </div>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
          <div className="space-y-8">
            <NewsCard article={featuredNews[0]} featured={true} />
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.slice(1, 3).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Sections */}
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {bitcoinNews.length > 0 && (
            <NewsGrid 
              title="Bitcoin News" 
              news={bitcoinNews}
              icon={<div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">₿</div>}
            />
          )}
          
          {defiNews.length > 0 && (
            <NewsGrid 
              title="DeFi Updates" 
              news={defiNews}
              icon={<div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">🏦</div>}
            />
          )}
        </div>

        {/* Sidebar */}
        <div>
          {regulationNews.length > 0 && (
            <section className="bg-yellow-50 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">⚖️</div>
                <h3 className="text-xl font-bold text-gray-900 ml-2">Regulatory Updates</h3>
              </div>
              
              <div className="space-y-4">
                {regulationNews.slice(0, 3).map((article) => (
                  <div key={article.id} className="border-b border-yellow-200 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">{article.title}</h4>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{article.source}</span>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* News Sources Attribution */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">News Sources</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• CoinDesk - Leading crypto news</p>
              <p>• Cointelegraph - Blockchain insights</p>
              <p>• Decrypt - Web3 & crypto culture</p>
              <p>• Bitcoin Magazine - Bitcoin focus</p>
              <p>• The Block - Industry analysis</p>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg border">
              <p className="text-xs text-gray-500">
                <strong>Attribution:</strong> All news content is sourced from legitimate RSS feeds. 
                Headlines and excerpts are displayed with proper attribution and link back to original articles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;

