import React from 'react';
import { ArrowRight, CheckCircle, ExternalLink, AlertTriangle, Shield } from 'lucide-react';

const BeginnerGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Beginner Guide</span>
            <span className="mx-2">•</span>
            <span>12 min read</span>
            <span className="mx-2">•</span>
            <span>Updated January 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Beginner's Guide to Buying Your First Bitcoin
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to buy your first Bitcoin but don't know where to start? This comprehensive guide walks you through every step, from choosing an exchange to securing your investment. Follow along and you'll own Bitcoin in under an hour.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-blue-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              How to choose the best exchange for beginners
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              Step-by-step Bitcoin purchasing process
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              How to transfer Bitcoin to your own wallet
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              Essential security practices
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              Common mistakes to avoid
            </li>
          </ul>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {/* Step 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 1: Choose Your Exchange</h2>
            <p className="text-gray-600 mb-6">
              Your first decision is choosing where to buy Bitcoin. For beginners, we recommend starting with a reputable, regulated exchange that prioritizes user experience and security.
            </p>

            {/* Exchange Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">🏆 Best Exchanges for Beginners</h3>
              
              <div className="space-y-6">
                <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🔵</span>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Coinbase</h4>
                        <p className="text-sm text-gray-600">Best for complete beginners</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Pros:</h5>
                      <ul className="text-sm space-y-1">
                        <li className="text-green-600">✓ Extremely user-friendly</li>
                        <li className="text-green-600">✓ Regulated in the US</li>
                        <li className="text-green-600">✓ Great customer support</li>
                        <li className="text-green-600">✓ Mobile app</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Cons:</h5>
                      <ul className="text-sm space-y-1">
                        <li className="text-gray-600">• Higher fees (1.49%)</li>
                        <li className="text-gray-600">• Limited advanced features</li>
                      </ul>
                    </div>
                  </div>
                  
                  <a
                    href="#"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Sign Up for Coinbase
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                  <div className="text-sm text-green-600 font-medium mt-2">
                    🎁 Get $10 Bitcoin bonus with your first purchase
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🟡</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Binance</h4>
                      <p className="text-sm text-gray-600">Lowest fees, more complex</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Pros:</h5>
                      <ul className="text-sm space-y-1">
                        <li className="text-green-600">✓ Lowest fees (0.1%)</li>
                        <li className="text-green-600">✓ Huge selection of coins</li>
                        <li className="text-green-600">✓ Advanced trading tools</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Cons:</h5>
                      <ul className="text-sm space-y-1">
                        <li className="text-gray-600">• More complex interface</li>
                        <li className="text-gray-600">• Regulatory uncertainty</li>
                      </ul>
                    </div>
                  </div>
                  
                  <a
                    href="#"
                    className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Sign Up for Binance
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                  <div className="text-sm text-green-600 font-medium mt-2">
                    🎁 Get 10% fee discount for life
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-yellow-800">
                    <strong>Our Recommendation:</strong> If you're a complete beginner, start with Coinbase. The higher fees are worth the better user experience while you learn. You can always switch to Binance later for lower fees.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 2: Create and Verify Your Account</h2>
            <p className="text-gray-600 mb-6">
              Once you've chosen an exchange, you'll need to create an account and verify your identity. This process typically takes 10-15 minutes.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Account Setup Checklist</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Personal Information</h4>
                    <p className="text-gray-600 text-sm">Full name, email address, phone number, date of birth</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Identity Verification</h4>
                    <p className="text-gray-600 text-sm">Government-issued ID (driver's license or passport)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-gray-600 text-sm">Enable 2FA using Google Authenticator or SMS</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Payment Method</h4>
                    <p className="text-gray-600 text-sm">Link your bank account or debit card</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 3: Make Your First Bitcoin Purchase</h2>
            <p className="text-gray-600 mb-6">
              Now for the exciting part - buying your first Bitcoin! Here's exactly how to do it on Coinbase (the process is similar on other exchanges).
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Step-by-Step Purchase Process</h3>
              
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Navigate to Buy/Sell',
                    description: 'Click the "Buy/Sell" button in the top menu or dashboard'
                  },
                  {
                    step: 2, 
                    title: 'Select Bitcoin',
                    description: 'Choose Bitcoin (BTC) from the list of available cryptocurrencies'
                  },
                  {
                    step: 3,
                    title: 'Enter Amount',
                    description: 'Enter how much you want to spend (minimum $25) or how much Bitcoin you want to buy'
                  },
                  {
                    step: 4,
                    title: 'Choose Payment Method',
                    description: 'Select your linked bank account or debit card'
                  },
                  {
                    step: 5,
                    title: 'Review and Confirm',
                    description: 'Check the fees, total cost, and Bitcoin amount you\'ll receive'
                  },
                  {
                    step: 6,
                    title: 'Complete Purchase',
                    description: 'Click "Buy Bitcoin" to finalize your purchase'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-blue-800">
                <strong>Pro Tip:</strong> Start small with your first purchase ($50-100) to get comfortable with the process. You can always buy more later!
              </p>
            </div>
          </section>

          {/* Security Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 4: Secure Your Investment</h2>
            <p className="text-gray-600 mb-6">
              Congratulations! You now own Bitcoin. However, your Bitcoin is currently stored on the exchange, which means the exchange controls it. For long-term storage, consider moving it to your own wallet.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Recommended Security Setup</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Small Amounts ($100-1,000):</h4>
                  <p className="text-gray-600 mb-4">
                    Keep your Bitcoin on the exchange for now. Make sure you have strong 2FA enabled and use a unique, strong password.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Larger Amounts ($1,000+):</h4>
                  <p className="text-gray-600 mb-4">
                    Consider getting a hardware wallet like the Ledger Nano X for maximum security.
                  </p>
                  
                  <a
                    href="#"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Ledger Nano X
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                  <div className="text-sm text-green-600 font-medium mt-2">
                    🎁 Free shipping on orders over $100
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Beginner Mistakes to Avoid</h2>
            
            <div className="space-y-6">
              {[
                {
                  mistake: 'Buying too much too fast',
                  solution: 'Start small and dollar-cost average over time'
                },
                {
                  mistake: 'Not enabling two-factor authentication',
                  solution: 'Always enable 2FA on your exchange account'
                },
                {
                  mistake: 'Falling for get-rich-quick schemes',
                  solution: 'Stick to reputable exchanges and be wary of promises of guaranteed returns'
                },
                {
                  mistake: 'Panic selling during price drops',
                  solution: 'Have a long-term perspective and don\'t check prices obsessively'
                },
                {
                  mistake: 'Not keeping records for taxes',
                  solution: 'Use crypto tax software like CoinLedger to track your transactions'
                }
              ].map((item, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-800">Avoid: {item.mistake}</h4>
                      <p className="text-red-700 text-sm">Instead: {item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tax Considerations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Considerations</h2>
            <p className="text-gray-600 mb-6">
              In most countries, cryptocurrency is subject to capital gains tax when you sell, trade, or spend it. Keep detailed records of all your transactions.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📊</span>
                <h3 className="text-xl font-bold text-gray-900">Recommended: CoinLedger</h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                CoinLedger automatically imports your transactions from exchanges and calculates your crypto taxes. Essential for staying compliant with tax regulations.
              </p>
              
              <a
                href="#"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              <div className="text-sm text-green-600 font-medium mt-2">
                🎁 15% discount with our link
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Next?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continue Learning</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    <span>Learn about other cryptocurrencies</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    <span>Understand DeFi and staking</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    <span>Advanced trading strategies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Build Your Portfolio</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Set up dollar-cost averaging</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Diversify with Ethereum</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Consider hardware wallet</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>

        {/* Affiliate Disclosure */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-center">
          <h3 className="font-bold text-gray-900 mb-2">Affiliate Disclosure</h3>
          <p className="text-gray-600 text-sm">
            This article contains affiliate links to Coinbase, Binance, Ledger, and CoinLedger. We earn commissions when you sign up through our links, which helps fund our free educational content. Our recommendations are based on personal testing and user feedback, not commission rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeginnerGuide;