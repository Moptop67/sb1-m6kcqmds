import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BookOpen, TrendingUp, Users, Star, CheckCircle } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';
import AffiliateToolsWidget from '../components/AffiliateToolsWidget';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete Guide to 
              <span className="text-green-400"> Cryptocurrency</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              From Beginner to Pro - Learn crypto investing, trading, and technology with our comprehensive guides and honest tool reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/start-here" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/tools" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Recommended Tools
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Trusted by 10,000+ crypto learners</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                <span>4.9/5 average rating</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>100% honest reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Master Crypto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From understanding blockchain basics to advanced trading strategies, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Learn Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <BookOpen className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn Cryptocurrency</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive guides from complete beginner to advanced trader. Start with the basics and work your way up.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  What is Bitcoin & Blockchain?
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  How to Buy Your First Crypto
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  DeFi & Advanced Strategies
                </li>
              </ul>
              <Link 
                to="/learn" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Tools Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools & Reviews</h3>
              <p className="text-gray-600 mb-6">
                Honest reviews of exchanges, wallets, and trading tools. Find the best platforms for your needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Exchange Comparisons
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Hardware Wallet Reviews
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Trading & Tax Software
                </li>
              </ul>
              <Link 
                to="/tools" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                View Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* News Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <TrendingUp className="h-12 w-12 text-yellow-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Analysis</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest crypto news, market analysis, and regulatory developments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Daily Market Updates
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Regulatory News
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Price Analysis
                </li>
              </ul>
              <Link 
                to="/news" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Read News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Guides</h2>
              <div className="space-y-8">
                {/* Featured Article 1 */}
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg" 
                        alt="Bitcoin guide" 
                        className="h-48 md:h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Beginner</span>
                        <span className="ml-4">5 min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Complete Beginner's Guide to Buying Your First Bitcoin
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Step-by-step guide to purchasing Bitcoin safely, including exchange recommendations and security best practices.
                      </p>
                      <Link 
                        to="/guide/beginner-bitcoin" 
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                      >
                        Read Guide
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>

                {/* Featured Article 2 */}
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="https://images.pexels.com/photos/8358210/pexels-photo-8358210.jpeg" 
                        alt="Exchange comparison" 
                        className="h-48 md:h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Review</span>
                        <span className="ml-4">8 min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Binance vs Coinbase: Which Exchange is Better for Beginners?
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Detailed comparison of the top two crypto exchanges, including fees, features, and our honest recommendation.
                      </p>
                      <Link 
                        to="/review/binance-vs-coinbase" 
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                      >
                        Read Review
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>

                {/* Featured Article 3 */}
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg" 
                        alt="Hardware wallets" 
                        className="h-48 md:h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Security</span>
                        <span className="ml-4">10 min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Hardware Wallet Review: Ledger vs Trezor Comparison
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Comprehensive review of the top hardware wallets to keep your cryptocurrency safe from hackers.
                      </p>
                      <Link 
                        to="/review/ledger-vs-trezor" 
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                      >
                        Read Review
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <AffiliateToolsWidget />
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;