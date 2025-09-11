import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink, CheckCircle, XCircle, Shield } from 'lucide-react';

const WalletReview = () => {
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
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">Hardware Wallet Review</span>
            <span className="mx-2">•</span>
            <span>12 min read</span>
            <span className="mx-2">•</span>
            <span>Updated January 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hardware Wallet Review: Ledger vs Trezor Comparison
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Hardware wallets are the gold standard for cryptocurrency security. We compare the two market leaders - Ledger and Trezor - to help you choose the best hardware wallet for protecting your crypto investments.
          </p>
        </header>

        {/* Security Notice */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-800 mb-2">Why Hardware Wallets Matter</h3>
              <p className="text-red-700">
                Keeping crypto on exchanges puts you at risk of hacks and theft. Hardware wallets store your private keys offline, 
                making them virtually impossible to hack. If you own more than $1,000 in crypto, a hardware wallet is essential.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Hardware Wallet Comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ledger Nano X */}
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">🔒</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Ledger Nano X</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Editor's Choice
                </span>
              </div>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900">$149</div>
                <div className="text-sm text-gray-600">Free shipping worldwide</div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Supports 5,500+ cryptocurrencies</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Bluetooth connectivity</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Mobile app support</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>100 apps can be installed</span>
                </div>
                <div className="flex items-center text-sm">
                  <XCircle className="h-4 w-4 text-red-600 mr-2" />
                  <span>Closed source firmware</span>
                </div>
              </div>
              
              <a
                href="#"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-colors"
              >
                Buy Ledger Nano X
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              <div className="text-sm text-green-600 font-medium mt-2 text-center">
                🎁 Free shipping + setup guide
              </div>
            </div>

            {/* Trezor Model T */}
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">🛡️</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Trezor Model T</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">4.7/5 Rating</span>
                    </div>
                  </div>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Open Source
                </span>
              </div>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900">$219</div>
                <div className="text-sm text-gray-600">Premium hardware wallet</div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Fully open source</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Color touchscreen</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>MicroSD card slot</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Supports 1,600+ coins</span>
                </div>
                <div className="flex items-center text-sm">
                  <XCircle className="h-4 w-4 text-red-600 mr-2" />
                  <span>No mobile app</span>
                </div>
              </div>
              
              <a
                href="#"
                className="w-full bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-colors"
              >
                Buy Trezor Model T
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              <div className="text-sm text-green-600 font-medium mt-2 text-center">
                🎁 10% discount with our link
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Ledger Nano X</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Trezor Model T</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-4 font-medium">Price</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">$149</td>
                  <td className="py-4 px-4 text-center">$219</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Supported Coins</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">5,500+</td>
                  <td className="py-4 px-4 text-center">1,600+</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Mobile Support</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">Yes (Bluetooth)</td>
                  <td className="py-4 px-4 text-center">No</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Screen</td>
                  <td className="py-4 px-4 text-center">Small OLED</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">Color Touchscreen</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Open Source</td>
                  <td className="py-4 px-4 text-center">Partial</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">Fully</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Battery</td>
                  <td className="py-4 px-4 text-center text-green-600 font-medium">8 hours</td>
                  <td className="py-4 px-4 text-center">USB powered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Both Wallets Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>PIN protection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>24-word recovery phrase</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Secure element chip</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Passphrase support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Anti-tampering protection</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Security:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span><strong>Ledger:</strong> Secure OS (BOLOS)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span><strong>Ledger:</strong> Custom secure chip</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  <span><strong>Trezor:</strong> Open source firmware</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  <span><strong>Trezor:</strong> Shamir backup</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  <span><strong>Trezor:</strong> MicroSD encryption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Recommendation */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Our Recommendation</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto">
            For most users, we recommend the <strong>Ledger Nano X</strong>. It offers the best combination of security, 
            ease of use, and coin support. The mobile app and Bluetooth connectivity make it perfect for active traders. 
            Choose Trezor if you prioritize open source and don't need mobile support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Buy Ledger Nano X
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
            <a
              href="#"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center justify-center"
            >
              Buy Trezor Model T
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-center mt-12">
          <h3 className="font-bold text-gray-900 mb-2">Affiliate Disclosure</h3>
          <p className="text-gray-600 text-sm">
            This review contains affiliate links to Ledger and Trezor. We earn commissions when you purchase through our links, 
            which helps fund our free educational content. Our recommendations are based on extensive testing and user feedback, 
            not commission rates. We only recommend products we personally use and trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletReview;