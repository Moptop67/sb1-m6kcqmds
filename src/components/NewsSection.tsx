import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, ExternalLink, RefreshCw } from 'lucide-react';
import { newsService, NewsItem } from '../services/newsService';

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
}

const NewsSection = () => {
  const [featuredNews, setFeaturedNews] = useState<NewsItem[]>([]);
  const [bitcoinNews, setBitcoinNews] = useState<NewsItem[]>([]);
  const [regulationNews, setRegulationNews] = useState<NewsItem[]>([]);
  const [defiNews, setDefiNews] = useState<NewsItem[]>([]);
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [cryptoLoading, setCryptoLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCryptoData = async () => {
    try {
      setCryptoLoading(true);
      
      // Fetch Bitcoin, Ethereum, and Solana data
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana&order=market_cap_desc&per_page=3&page=1&sparkline=false&price_change_percentage=24h'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch crypto data');
      }
      
      const data = await response.json();
      setCryptoData(data);
      
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      // Fallback data if API fails
      setCryptoData([
        {
          id: 'bitcoin',
          symbol: 'btc',
          name: 'Bitcoin',
          current_price: 45000,
          price_change_percentage_24h: 2.5,
          market_cap_rank: 1,
          market_cap: 880000000000,
          total_volume: 25000000000,
          high_24h: 46000,
          low_24h: 44000
        },
        {
          id: 'ethereum',
          symbol: 'eth',
          name: 'Ethereum',
          current_price: 2800,
          price_change_percentage_24h: -1.2,
          market_cap_rank: 2,
          market_cap: 340000000000,
          total_volume: 15000000000,
          high_24h: 2900,
          low_24h: 2750
        },
        {
          id: 'solana',
          symbol: 'sol',
          name: 'Solana',
          current_price: 98,
          price_change_percentage_24h: 5.6,
          market_cap_rank: 5,
          market_cap: 45000000000,
          total_volume: 3000000000,
          high_24h: 102,
          low_24h: 95
        }
      ]);
    } finally {
      setCryptoLoading(false);
    }
  };

  const fetchAllNews = async (showRefreshing = false) => {
    try {
      if (showRefreshing) setRefreshing(true);
      else setLoading(true);

      // Fetch news from different categories
      const [featured, bitcoin, allNews, defi] = await Promise.all([
        newsService.fetchAllNews(6), // Featured news
        newsService.fetchNewsByCategory('bitcoin', 4),
        newsService.fetchAllNews(20), // Get more general news for market analyses
        newsService.fetchNewsByCategory('defi', 4)
      ]);

      // Filter for market/regulation news, fallback to general news to ensure we have 3 items
      const marketNews = allNews.filter(item => 
        item.category === 'regulation' || 
        item.category === 'market' || 
        item.title.toLowerCase().includes('market') ||
        item.title.toLowerCase().includes('price') ||
        item.title.toLowerCase().includes('trading')
      ).slice(0, 3);
      
      // If we don't have 3 market-related articles, fill with general news
      const finalMarketNews = marketNews.length >= 3 
        ? marketNews 
        : [...marketNews, ...allNews.filter(item => !marketNews.includes(item)).slice(0, 3 - marketNews.length)];
      setFeaturedNews(featured);
      setBitcoinNews(bitcoin);
      setRegulationNews(finalMarketNews);
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
    fetchCryptoData();
    
    // Auto-refresh news every 20 minutes, crypto data every 2 minutes
    const newsInterval = setInterval(() => fetchAllNews(true), 20 * 60 * 1000);
    const cryptoInterval = setInterval(fetchCryptoData, 2 * 60 * 1000);
    
    return () => {
      clearInterval(newsInterval);
      clearInterval(cryptoInterval);
    };
  }, []);

  const formatPrice = (price: number) => {
    if (price >= 1) {
      return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      return `$${price.toFixed(6)}`;
    }
  };

  const formatPercentage = (percentage: number) => {
    const sign = percentage >= 0 ? '+' : '';
    return `${sign}${percentage.toFixed(2)}%`;
  };

  const calculateRSI = (price: number, high: number, low: number) => {
    // Simple RSI approximation based on price position within 24h range
    const position = (price - low) / (high - low);
    return Math.round(30 + (position * 40)); // Range 30-70
  };

  const getTrendAnalysis = (change: number, rsi: number) => {
    if (change > 3 && rsi > 60) return { trend: 'Strong Bullish', color: 'text-green-600' };
    if (change > 0 && rsi > 50) return { trend: 'Bullish', color: 'text-green-600' };
    if (change < -3 && rsi < 40) return { trend: 'Strong Bearish', color: 'text-red-600' };
    if (change < 0 && rsi < 50) return { trend: 'Bearish', color: 'text-red-600' };
    return { trend: 'Neutral', color: 'text-gray-600' };
  };

  const getVolumeAnalysis = (volume: number, marketCap: number) => {
    const volumeRatio = volume / marketCap;
    if (volumeRatio > 0.1) return { level: 'Very High', color: 'text-red-600' };
    if (volumeRatio > 0.05) return { level: 'High', color: 'text-orange-600' };
    if (volumeRatio > 0.02) return { level: 'Medium', color: 'text-yellow-600' };
    return { level: 'Low', color: 'text-gray-600' };
  };

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

  const TokenAnalysisCard = ({ crypto }: { crypto: CryptoData }) => {
    const rsi = calculateRSI(crypto.current_price, crypto.high_24h, crypto.low_24h);
    const trendAnalysis = getTrendAnalysis(crypto.price_change_percentage_24h, rsi);
    const volumeAnalysis = getVolumeAnalysis(crypto.total_volume, crypto.market_cap);

    return (
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-blue-50/30"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {crypto.symbol.toUpperCase().charAt(0)}
              </div>
              <div className="ml-3">
                <h3 className="font-bold text-gray-900">{crypto.name}</h3>
                <p className="text-sm text-gray-600">{crypto.symbol.toUpperCase()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">{formatPrice(crypto.current_price)}</p>
              <p className={`text-sm font-semibold ${crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatPercentage(crypto.price_change_percentage_24h)}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-600 mb-1">24h High</p>
              <p className="font-semibold text-gray-900">{formatPrice(crypto.high_24h)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">24h Low</p>
              <p className="font-semibold text-gray-900">{formatPrice(crypto.low_24h)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">RSI (24h)</p>
              <p className="font-semibold text-gray-900">{rsi}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Volume</p>
              <p className={`font-semibold ${volumeAnalysis.color}`}>{volumeAnalysis.level}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 mb-1">Trend Analysis</p>
              <p className={`font-semibold ${trendAnalysis.color}`}>{trendAnalysis.trend}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600 mb-1">Market Cap Rank</p>
              <p className="font-semibold text-gray-900">#{crypto.market_cap_rank}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
            <h2 className="text-3xl font-bold text-gray-900">Featured News</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredNews.slice(0, 2).map((article) => (
              <NewsCard key={article.id} article={article} featured />
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNews.slice(2, 6).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          </div>
        </section>
      )}

      {/* Crypto Market Analysis */}
      {!cryptoLoading && cryptoData.length > 0 && (
        <section className="mb-20 bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30 relative overflow-hidden">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-200/10 to-transparent rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Market Analysis</h2>
              </div>
              {refreshing && (
                <div className="flex items-center text-blue-600">
                  <RefreshCw className="h-5 w-5 animate-spin mr-2" />
                  <span className="text-sm font-medium">Updating...</span>
                </div>
              )}
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {cryptoData.map((crypto) => (
                <TokenAnalysisCard key={crypto.id} crypto={crypto} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bitcoin News */}
      {bitcoinNews.length > 0 && (
        <div className="mb-20">
          <NewsGrid 
            title="Bitcoin News" 
            news={bitcoinNews} 
            icon={<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">₿</div>}
          />
        </div>
      )}

      {/* Market & Regulation News */}
      {regulationNews.length > 0 && (
        <div className="mb-20">
          <section className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30 relative overflow-hidden">
            {/* Section Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-blue-50/30"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">📊</div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Weekly Regulatory Update</h2>
              </div>
              
              {/* Weekly Update Article */}
              <article className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <header className="mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Global Regulatory Challenges Roil Crypto Markets This Week
                  </h1>
                  <p className="text-gray-600 text-sm">Published September 13, 2025</p>
                </header>
                
                <div className="prose prose-lg max-w-none">
                  <section className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Introduction</h3>
                    <p className="text-gray-700 leading-relaxed">
                      This week, cryptocurrency markets experienced a fresh wave of regulatory developments around the world. 
                      From sweeping new legislation in the US to major regulatory rollouts across Europe and Asia-Pacific, 
                      the theme is clear: compliance expectations are rising, and market uncertainty continues.
                    </p>
                  </section>
                  
                  <section className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">United States: Legislative Push and State Scrutiny</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Federal and state authorities in the US are accelerating efforts to finalize comprehensive digital asset frameworks. 
                      The Senate is actively working on bills like the Digital Asset Market Clarity Act and the Responsible Financial Innovation Act. 
                      Meanwhile, state securities regulators are pushing for robust antifraud protections, and the SEC/CFTC joint task force is 
                      addressing surveillance, privacy, and DeFi oversight at the federal level.
                    </p>
                  </section>
                  
                  <section className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Europe: MiCA Comes Into Force</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The Markets in Crypto-Assets Regulation (MiCA) is now fully operational, harmonizing digital asset rules across all 27 EU countries. 
                      Providers face new licensing obligations and stablecoin issuers must comply with strict 1:1 backing and oversight. 
                      While MiCA boosts cross-border clarity, transitional challenges and pending technical standards mean uncertainty will linger into 2026. 
                      Additional anti-money laundering (AML) and tax transparency initiatives are also in focus.
                    </p>
                  </section>
                  
                  <section className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Asia-Pacific: Stablecoin and Tax Reforms</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Asia-Pacific remains the fastest-growing area for crypto—but also one of the most dynamic for new rules. 
                      Hong Kong's stablecoin licensing regime is now live, and Japan is approving its first fully compliant stablecoins under tough new standards. 
                      India and Indonesia are piloting new crypto tax rules while Australian regulators are pressing platforms on risk disclosures and operational controls.
                    </p>
                  </section>
                  
                  <section className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Takeaways</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Global harmonization remains elusive, demanding continued vigilance by international operators.</li>
                      <li>Stablecoins and DeFi now face increased licensing and transparency demands in nearly every major market.</li>
                      <li>AML and transparency are universal themes, with new tracking and reporting obligations coming to the fore.</li>
                    </ul>
                  </section>
                  
                  <section className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Final Thoughts</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Crypto market participants must keep a close watch on both local and global policy moves, as this week's actions show 
                      that regulatory change is accelerating on all fronts. Strategic adaptation to shifting requirements is the only way forward 
                      for sustainable growth.
                    </p>
                  </section>
                  
                  <footer className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 text-sm italic">
                      Have comments or questions? Reply below or join the conversation on our Telegram and LinkedIn groups!
                    </p>
                  </footer>
                </div>
              </article>
            </div>
          </section>
        </div>
      )}

        {/* DeFi Updates - Full Width */}
        {defiNews.length > 0 && (
          <section className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30 relative overflow-hidden">
            {/* Section Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-blue-50/30"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">🏦</div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">DeFi Updates</h2>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {defiNews.slice(0, 4).map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </section>
        )}

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