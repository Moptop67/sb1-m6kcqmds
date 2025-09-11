import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, PlayCircle, BookOpen, Shield, TrendingUp } from 'lucide-react';

const StartHere = () => {
  const learningPath = [
    {
      step: 1,
      title: 'Understand the Basics',
      description: 'Learn what cryptocurrency is and how blockchain technology works',
      duration: '15 minutes',
      articles: ['What is Cryptocurrency?', 'How Does Blockchain Work?', 'Bitcoin vs Altcoins'],
      completed: false
    },
    {
      step: 2,
      title: 'Set Up Your First Wallet',
      description: 'Create a secure wallet to store your cryptocurrency safely',
      duration: '20 minutes',
      articles: ['Types of Crypto Wallets', 'Setting Up MetaMask', 'Security Best Practices'],
      completed: false
    },
    {
      step: 3,
      title: 'Choose an Exchange',
      description: 'Pick a reputable exchange to buy your first cryptocurrency',
      duration: '10 minutes',
      articles: ['Exchange Comparison Guide', 'Account Verification Process', 'Understanding Fees'],
      completed: false
    },
    {
      step: 4,
      title: 'Make Your First Purchase',
      description: 'Buy your first Bitcoin or Ethereum with step-by-step guidance',
      duration: '30 minutes',
      articles: ['How to Buy Bitcoin', 'Dollar-Cost Averaging', 'Transferring to Your Wallet'],
      completed: false
    },
    {
      step: 5,
      title: 'Learn About Security',
      description: 'Protect your investments with proper security measures',
      duration: '25 minutes',
      articles: ['Two-Factor Authentication', 'Hardware Wallets', 'Avoiding Scams'],
      completed: false
    }
  ];

  const quickStart = [
    {
      title: 'Complete Beginner?',
      description: 'Never heard of Bitcoin before? Start with our absolute basics.',
      cta: 'Start from Zero',
      link: '/learn',
      icon: BookOpen,
      color: 'blue'
    },
    {
      title: 'Ready to Buy?',
      description: 'Know the basics and want to make your first purchase?',
      cta: 'Buy Your First Crypto',
      link: '/guide/beginner-bitcoin',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Need Tools?',
      description: 'Looking for the best exchanges and wallets?',
      cta: 'View Recommendations',
      link: '/tools',
      icon: Shield,
      color: 'purple'
    }
  ];

  const recommendedTools = [
    {
      name: 'Coinbase',
      description: 'Best exchange for complete beginners',
      bonus: '$10 Bitcoin bonus',
      link: '#',
      logo: '🔵'
    },
    {
      name: 'Ledger Nano X',
      description: 'Hardware wallet for security',
      bonus: 'Free shipping',
      link: '#',
      logo: '🔒'
    },
    {
      name: 'CoinLedger',
      description: 'Crypto tax software',
      bonus: '15% discount',
      link: '#',
      logo: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Start Your Crypto Journey
              <span className="text-green-300"> Here</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Complete beginner? Perfect! Follow our step-by-step learning path to go from zero knowledge to confidently owning and managing cryptocurrency.
            </p>
            <div className="bg-green-800 bg-opacity-50 rounded-lg p-6 inline-block">
              <p className="text-green-100 text-lg">
                <PlayCircle className="h-6 w-6 inline mr-2" />
                <strong>Total Time:</strong> About 2 hours to complete • <strong>100% Free</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Start Options */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Choose Your Starting Point</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Not sure where to begin? Pick the path that best describes your current situation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quickStart.map((option, index) => {
              const Icon = option.icon;
              const colorClasses = {
                blue: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
                green: 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
                purple: 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
              };
              
              return (
                <Link
                  key={index}
                  to={option.link}
                  className={`bg-gradient-to-br ${colorClasses[option.color as keyof typeof colorClasses]} text-white p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1`}
                >
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                  <p className="text-white text-opacity-90 mb-6">{option.description}</p>
                  <div className="flex items-center font-semibold">
                    <span>{option.cta}</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Complete Learning Path */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Complete Learning Path</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Follow this structured path to become crypto-confident in about 2 hours. Each step builds on the previous one.
          </p>
          
          <div className="space-y-6">
            {learningPath.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                      step.completed ? 'bg-green-600' : 'bg-blue-600'
                    }`}>
                      {step.completed ? <CheckCircle className="h-6 w-6" /> : step.step}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-lg mb-4">{step.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {step.articles.map((article, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            {article}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      to={step.step === 1 ? "/guide/beginner-bitcoin" : step.step === 3 ? "/review/binance-vs-coinbase" : step.step === 4 ? "/guide/beginner-bitcoin" : "/learn"}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                    >
                      {step.completed ? 'Review Step' : 'Start Step ' + step.step}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Tools */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Recommended Tools for Beginners</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recommendedTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{tool.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="text-green-600 font-medium mb-4">🎁 {tool.bonus}</div>
                <a
                  href={tool.link}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Affiliate Disclosure:</strong> We earn commissions from these partners, which helps fund our free educational content.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Is it safe to invest in cryptocurrency?</h3>
              <p className="text-gray-600 mb-4">
                Cryptocurrency investments carry risk, but following proper security practices significantly reduces your risk. Our guides teach you how to invest safely.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How much money do I need to start?</h3>
              <p className="text-gray-600 mb-4">
                You can start with as little as $10-25. Most exchanges allow small purchases, and you don't need to buy whole coins.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Which cryptocurrency should I buy first?</h3>
              <p className="text-gray-600 mb-4">
                Bitcoin and Ethereum are the most established and beginner-friendly options. Our guides help you choose based on your goals.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Do I need technical knowledge?</h3>
              <p className="text-gray-600 mb-4">
                Not at all! Our guides are written for complete beginners with no technical background required.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StartHere;