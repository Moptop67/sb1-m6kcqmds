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
    <article className={`bg-white/98 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/40 relative ${featured ? 'md:flex' : ''}`}>
      {/* Card Background Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 pointer-events-none"></div>
      
      {featured && (
        <div className="md:w-1/3">
          <div className="h-48 md:h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
            <div className="text-white text-center p-6 relative z-10">
              <TrendingUp className="h-16 w-16 mx-auto mb-3 animate-pulse drop-shadow-lg" />
              <p className="text-base font-bold tracking-wide drop-shadow-md">Featured News</p>
            </div>
          </div>
        </div>
      )}
      
      <div className={`relative z-10 ${featured ? 'md:w-2/3 p-8' : 'p-6'}`}>
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-sm ${getCategoryColor(article.category)}`}>
            {getCategoryLabel(article.category)}
          </span>
          <div className="flex items-center text-sm text-gray-600 bg-gray-100 rounded-full px-3 py-1">
            <Clock className="h-4 w-4 mr-2" />
            {article.publishedAt}
          </div>
        </div>
        
        <h3 className={`font-bold text-gray-900 mb-4 leading-tight ${featured ? 'text-2xl' : 'text-lg'}`}>
          {article.title}
        </h3>
        
        <p className="text-gray-700 mb-5 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 font-semibold bg-gray-100 px-3 py-1 rounded-full">{article.source}</span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all shadow-sm"
          >
            Read Full Article
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </article>
  );

  const NewsGrid = ({ title, news, icon }: { title: string, news: NewsItem[], icon: React.ReactNode }) => (
    <section className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30 relative overflow-hidden">
      {/* Grid Section Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-full"></div>
      
      <div className="relative z-10">
      <div className="flex items-center mb-8">
        {icon}
        <h2 className="text-3xl font-bold text-gray-900 ml-4">{title}</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {news.slice(0, 4).map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Header */}
      <div className="text-center mb-16 bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30 relative overflow-hidden">
        {/* Header Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-full"></div>
        
        <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent">Latest Crypto News</h1>
          <button
            onClick={() => fetchAllNews(true)}
            disabled={refreshing}
            className="ml-6 p-3 text-blue-600 hover:text-blue-700 disabled:opacity-50 bg-blue-50 rounded-full hover:bg-blue-100 transition-all shadow-lg"
            title="Refresh all news"
          >
            <RefreshCw className={`h-5 w-5 ${refreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
        <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
          Real-time crypto news from trusted sources including CoinDesk, Cointelegraph, Decrypt, and more.
        </p>
        <div className="mt-6 flex items-center justify-center text-base text-gray-600 bg-green-50 rounded-full px-6 py-3 inline-flex shadow-md">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
          <span className="font-semibold">Live RSS feeds • Updates every 15 minutes</span>
        </div>
        </div>
      </div>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="mb-20 bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30 relative overflow-hidden">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-purple-50/30"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-200/10 to-transparent rounded-full"></div>
          
          <div className="relative z-10">
          <div className="flex items-center mb-10">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
              <span className="text-white text-xl">⭐</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-700 to-indigo-700 bg-clip-text text-transparent">Featured Stories</h2>
          </div>
          <div className="space-y-10 relative">
            <NewsCard article={featuredNews[0]} featured={true} />
            <div className="grid md:grid-cols-2 gap-10">
              {featuredNews.slice(1, 3).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
          </div>
        </section>
      )}

      {/* Category Sections */}
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          {bitcoinNews.length > 0 && (
            <NewsGrid 
              title="Bitcoin News" 
              news={bitcoinNews}
              icon={<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">₿</div>}
            />
          )}
          
          {defiNews.length > 0 && (
            <NewsGrid 
              title="DeFi Updates" 
              news={defiNews}
              icon={<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">🏦</div>}
            />
          )}
        </div>

        {/* Enhanced Sidebar */}
        <div className="space-y-10">
          {regulationNews.length > 0 && (
            <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-2xl border border-yellow-200/50 backdrop-blur-md relative overflow-hidden">
              {/* Sidebar Section Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-orange-100/20"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-200/20 to-transparent rounded-full"></div>
              
              <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">⚖️</div>
                <h3 className="text-2xl font-bold text-gray-900 ml-3">Regulatory Updates</h3>
              </div>
              
              <div className="space-y-5">
                {regulationNews.slice(0, 3).map((article) => (
                  <div key={article.id} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/30 hover:shadow-lg transition-all">
                    <h4 className="font-semibold text-gray-900 text-base mb-3">{article.title}</h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{article.source}</span>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </section>
          )}

          {/* News Sources Attribution */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-2xl border border-blue-200/50 backdrop-blur-md relative overflow-hidden">
            {/* Attribution Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-indigo-100/20"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full"></div>
            
            <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg">📡</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent ml-3">News Sources</h3>
            </div>
            <div className="space-y-3 text-base text-gray-700">
              <p>• CoinDesk - Leading crypto news</p>
              <p>• Cointelegraph - Blockchain insights</p>
              <p>• Decrypt - Web3 & crypto culture</p>
              <p>• Bitcoin Magazine - Bitcoin focus</p>
              <p>• The Block - Industry analysis</p>
            </div>
            <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/30 shadow-inner">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Attribution:</strong> All news content is sourced from legitimate RSS feeds. 
                Headlines and excerpts are displayed with proper attribution and link back to original articles.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;

