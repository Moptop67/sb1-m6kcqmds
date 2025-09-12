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
            <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-6 shadow-2xl border border-yellow-200/50 backdrop-blur-md relative overflow-hidden">
              {/* Attribution Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-orange-100/20"></div>
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-200/10 to-transparent rounded-full"></div>
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-tr from-orange-200/10 to-transparent rounded-full"></div>
              
              <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">⚖️</div>
                <h3 className="text-xl font-bold text-gray-900 ml-3">Market Analyses</h3>
              </div>
              
              <div className="space-y-4">
                {regulationNews.slice(0, 3).map((article) => (
                  <article key={article.id} className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-yellow-200/30 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 pointer-events-none"></div>
                    <div className="relative z-10 p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-sm ${getCategoryColor(article.category)}`}>
                          {getCategoryLabel(article.category)}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.publishedAt}
                        </div>
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-3 leading-tight text-sm">
                        {article.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{article.source}</span>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium text-xs inline-flex items-center"
                      >
                        Read More
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                    </div>
                  </article>
                ))}
              </div>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* News Sources Attribution - Full Width Bottom Section */}
      <section className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 shadow-2xl border border-blue-200/50 backdrop-blur-md relative overflow-hidden">
        {/* Attribution Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-indigo-100/20"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-tr from-indigo-200/10 to-transparent rounded-full"></div>
        
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg mr-3">📡</div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">News Sources</h3>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4 mb-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg mx-auto mb-2">CD</div>
              <p className="font-semibold text-gray-900">CoinDesk</p>
              <p className="text-sm text-gray-600">Leading crypto news</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg mx-auto mb-2">CT</div>
              <p className="font-semibold text-gray-900">Cointelegraph</p>
              <p className="text-sm text-gray-600">Blockchain insights</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg mx-auto mb-2">D</div>
              <p className="font-semibold text-gray-900">Decrypt</p>
              <p className="text-sm text-gray-600">Web3 & crypto culture</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg mx-auto mb-2">₿</div>
              <p className="font-semibold text-gray-900">Bitcoin Magazine</p>
              <p className="text-sm text-gray-600">Bitcoin focus</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg mx-auto mb-2">TB</div>
              <p className="font-semibold text-gray-900">The Block</p>
              <p className="text-sm text-gray-600">Industry analysis</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/30 shadow-inner">
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>Attribution:</strong> All news content is sourced from legitimate RSS feeds. 
              Headlines and excerpts are displayed with proper attribution and link back to original articles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsSection;

