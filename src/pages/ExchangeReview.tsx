import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink, CheckCircle, XCircle } from 'lucide-react';

const ExchangeReview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/tools" className="flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools & Reviews
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Exchange Review</span>
            <span className="mx-2">•</span>
            <span>10 min read</span>
            <span className="mx-2">•</span>
            <span>Updated January 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Binance vs Coinbase: Which Exchange is Better for Beginners?
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Choosing your first cryptocurrency exchange is crucial. We compare the two most popular platforms - Binance and Coinbase - to help you make the right decision based on your experience level, budget, and trading goals.
          </p>
        </header>

        {/* Quick Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Coinbase */}
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">🔵</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Coinbase</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">4.6/5 Rating</span>
                    </div>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Best for Beginners
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Extremely user-friendly</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Regulated in the US</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Great customer support</span>
                </div>
                <div className="flex items-center text-sm">
                  <XCircle className="h-4 w-4 text-red-600 mr-2" />
                  <span>Higher fees (1.49%)</span>
                </div>
              </div>
              
              <a
                href="#"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-colors"
              >
                Sign Up for Coinbase
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              <div className="text-sm text-green-600 font-medium mt-2 text-center">
                🎁 Get $10 Bitcoin bonus
              </div>
            </div>

            {/* Binance */}
            <div className="border-2 border-yellow-200 rounded-lg p-6 bg-yellow-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">🟡</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Binance</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">4.8/5 Rating</span>
                    </div>
                  </div>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Lowest Fees
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Lowest fees (0.1%)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Huge selection of coins</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Advanced trading tools</span>
                </div>
                <div className="flex items-center text-sm">
                  <XCircle className="h-4 w-4 text-red-600 mr-2" />
                  <span>Complex for beginners</span>
                </div>
              </div>
              
              <a
                href="#"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-colors"
              >
                Sign Up for Binance
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              <div className="text-sm text-green-600 font-medium mt-2 text-center">
                🎁 10% fee discount for life
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Coinbase</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Binance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-4 font-medium">Trading Fees</td>
                  <td className="py-4 px-4 text-center">1.49%</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">0.1%</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">User Experience</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">Excellent</td>
                  <td className="py-4 px-4 text-center">Good</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Available Coins</td>
                  <td className="py-4 px-4 text-center">200+</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">600+</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Regulation</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">US Regulated</td>
                  <td className="py-4 px-4 text-center">Limited US Access</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Customer Support</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">Excellent</td>
                  <td className="py-4 px-4 text-center">Average</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Our Recommendation */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Our Recommendation</h2>
          <p className="text-green-100 text-lg mb-6 max-w-3xl mx-auto">
            For complete beginners, we recommend starting with <strong>Coinbase</strong> despite the higher fees. 
            The user experience and security are worth the extra cost while you learn. Once you're comfortable, 
            you can switch to <strong>Binance</strong> for lower fees and more advanced features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start with Coinbase
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
            <a
              href="#"
              className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors inline-flex items-center justify-center"
            >
              Advanced: Try Binance
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeReview;