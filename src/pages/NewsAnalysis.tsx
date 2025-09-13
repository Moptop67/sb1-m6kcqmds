import React from 'react';
import { Helmet } from 'react-helmet-async';
import NewsSection from '../components/NewsSection';

const NewsAnalysis = () => {
  return (
    <>
      <Helmet>
        <title>Crypto News & Market Analysis 2025 — Live Updates from Top Sources</title>
        <meta name="description" content="Stay updated with live cryptocurrency news, market analysis, and regulatory developments from CoinDesk, Cointelegraph, Decrypt & more. Real-time crypto insights and price analysis." />
        <meta name="keywords" content="crypto news 2025, cryptocurrency market analysis, Bitcoin news, Ethereum updates, DeFi news, crypto regulation, blockchain news, cryptocurrency prices" />
        <meta property="og:title" content="Crypto News & Market Analysis 2025 — Live Updates" />
        <meta property="og:description" content="Live cryptocurrency news and market analysis from trusted sources. Get real-time crypto insights, regulatory updates, and price analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptostarterguide.com/news" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto News & Market Analysis 2025" />
        <meta name="twitter:description" content="Live cryptocurrency news and market analysis from trusted sources worldwide." />
        <link rel="canonical" href="https://cryptostarterguide.com/news" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsMediaOrganization",
            "name": "CryptoStarterGuide News",
            "url": "https://cryptostarterguide.com/news",
            "logo": "https://cryptostarterguide.com/logo.png",
            "description": "Cryptocurrency news and market analysis platform",
            "sameAs": [
              "https://twitter.com/cryptostarterguide",
              "https://linkedin.com/company/cryptostarterguide"
            ],
            "mainEntity": {
              "@type": "WebPage",
              "name": "Crypto News & Market Analysis",
              "description": "Live cryptocurrency news, market analysis, and regulatory developments from trusted sources",
              "keywords": "cryptocurrency news, Bitcoin news, Ethereum updates, DeFi news, crypto market analysis",
              "dateModified": new Date().toISOString(),
              "author": {
                "@type": "Organization",
                "name": "CryptoStarterGuide"
              }
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced Crypto Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
        
        {/* Floating Crypto Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-green-400/30 rounded-full animate-pulse">
          <div className="w-full h-full flex items-center justify-center text-green-400 text-4xl font-bold">₿</div>
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-yellow-400/30 rounded-lg rotate-45 animate-bounce">
          <div className="w-full h-full flex items-center justify-center text-yellow-400 text-2xl font-bold transform -rotate-45">Ξ</div>
        </div>
        <div className="absolute bottom-40 left-20 w-28 h-28 border-2 border-purple-400/30 rounded-full animate-pulse delay-1000">
          <div className="w-full h-full flex items-center justify-center text-purple-400 text-3xl">🔗</div>
        </div>
        <div className="absolute bottom-20 right-40 w-20 h-20 border-2 border-blue-400/30 rounded-lg rotate-12 animate-bounce delay-500">
          <div className="w-full h-full flex items-center justify-center text-blue-400 text-xl">📊</div>
        </div>
        
        {/* Large Background Circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-green-400/10 rounded-full animate-spin-reverse"></div>
        
        {/* Hexagon Pattern */}
        <div className="absolute top-32 right-1/3 w-16 h-16 transform rotate-30">
          <div className="w-full h-full border-2 border-orange-400/20" style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
          }}></div>
        </div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 transform rotate-45">
          <div className="w-full h-full border-2 border-cyan-400/20" style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
          }}></div>
        </div>
        
        {/* Blockchain Links */}
        <div className="absolute top-1/2 left-10 flex items-center space-x-2 opacity-20">
          <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
          <div className="w-8 h-0.5 bg-green-400"></div>
          <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
          <div className="w-8 h-0.5 bg-green-400"></div>
          <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
        </div>
        
        {/* Candlestick Chart Pattern */}
        <div className="absolute bottom-1/3 right-10 flex items-end space-x-1 opacity-20">
          <div className="w-2 h-8 bg-red-400"></div>
          <div className="w-2 h-12 bg-green-400"></div>
          <div className="w-2 h-6 bg-red-400"></div>
          <div className="w-2 h-16 bg-green-400"></div>
          <div className="w-2 h-10 bg-red-400"></div>
          <div className="w-2 h-14 bg-green-400"></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/30"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-sm text-white py-20 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-full mb-8 shadow-2xl animate-pulse">
              <span className="text-4xl">📰</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent drop-shadow-lg">
              Crypto News & Analysis
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed">
              Stay informed with the latest cryptocurrency news, market analysis, and regulatory developments from trusted sources worldwide.
            </p>
            <div className="flex items-center justify-center text-green-300 bg-black/30 backdrop-blur-md rounded-full px-8 py-4 inline-flex shadow-xl border border-white/10">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
              <span className="font-semibold text-lg">Live RSS feeds from CoinDesk, Cointelegraph, Decrypt & more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced News Section Container */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-slate-800/20 to-slate-900/40">
        <NewsSection />
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
      </div>
    </>
  );
};

export default NewsAnalysis;