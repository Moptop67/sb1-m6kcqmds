import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, CheckCircle } from 'lucide-react';

const LearnCrypto = () => {
  const beginnerTopics = [
    {
      title: 'What is Cryptocurrency?',
      description: 'Understand the basics of digital currency and blockchain technology',
      duration: '5 min read',
      students: '12.5k',
      completed: false,
      link: '/guide/what-is-cryptocurrency'
    },
    {
      title: 'How Does Bitcoin Work?',
      description: 'Learn about the first and most popular cryptocurrency',
      duration: '8 min read', 
      students: '10.2k',
      completed: false,
      link: '/guide/how-bitcoin-works'
    },
    {
      title: 'What is Blockchain Technology?',
      description: 'Learn about decentralized ledgers, consensus mechanisms, and L1/L2 layers',
      duration: '8 min read',
      students: '15.2k',
      completed: false,
      link: '/guide/what-is-blockchain'
    },
    {
      title: 'Blockchain & Crypto Glossary for Newcomers',
      description: 'Essential crypto terms and jargon explained in simple language',
      duration: 'Reference guide',
      students: '8.2k',
      completed: false,
      link: '/guide/crypto-glossary'
    }
  ];

  const intermediateTopics = [
    {
      title: 'How to Research a Token/Project',
      description: 'Learn to spot scams and find legitimate projects using simple research tools. Includes real examples of red flags and how to use Etherscan, DefiLlama, and CoinGecko like a pro.',
      duration: '14 min read',
      students: '3.8k',
      completed: false,
      link: '/guide/token-research'
    },
    {
      title: 'Staking and Passive Income',
      description: 'Discover how to earn money while you sleep by "staking" your crypto. Learn which coins pay the best rewards, how to stake safely, and avoid common staking mistakes.',
      duration: '9 min read',
      students: '6.1k',
      completed: false,
      link: '/guide/beginner-bitcoin'
    },
    {
      title: 'Cryptocurrency Exchanges (CEX)',
      description: 'Understand how crypto exchanges like Binance and Coinbase actually work behind the scenes. Learn about order books, custody, and why some exchanges are safer than others.',
      duration: '12 min read',
      students: '5.2k',
      completed: false,
      link: '/guide/cryptocurrency-exchanges'
    },
    {
      title: 'DYOR: Research & Security Best Practices',
      description: 'Master the art of "Do Your Own Research" with real-world examples of crypto scams and how to avoid them. Includes step-by-step wallet protection and phishing prevention.',
      duration: '16 min read',
      students: '4.3k',
      completed: false,
      link: '/guide/dyor-research-security'
    },
    {
      title: 'Essential Crypto Research Tools',
      description: 'Master the tools every crypto investor uses: CoinGecko for market data, Etherscan for blockchain detective work, DefiLlama for DeFi metrics, and Glassnode for whale tracking. Step-by-step tutorials included.',
      duration: '18 min read',
      students: '2.9k',
      completed: false,
      link: '/guide/crypto-research-tools'
    }
  ];

  const advancedTopics = [
    {
      title: 'DeFi Explained: Your Guide to Decentralized Finance',
      description: 'Understanding lending, borrowing, yield farming, and liquidity pools',
      duration: '10 min read',
      students: '7.8k',
      completed: false,
      link: '/guide/defi-explained'
    },
    {
      title: 'Yield Farming Strategies',
      description: 'Advanced DeFi strategies for maximizing returns',
      duration: '18 min read',
      students: '2.1k',
      completed: false,
      link: '/guide/beginner-bitcoin'
    },
    {
      title: 'NFTs and Digital Collectibles',
      description: 'Understanding non-fungible tokens and their markets',
      duration: '14 min read',
      students: '3.4k',
      completed: false,
      link: '/guide/beginner-bitcoin'
    }
  ];

  const tradingTopics = [
    {
      title: 'Trading Strategies for Beginners',
      description: 'Basic trading concepts and risk management',
      duration: '15 min read',
      students: '4.8k',
      completed: false,
      link: '/review/binance-vs-coinbase'
    },
    {
      title: 'Technical Analysis Fundamentals',
      description: 'Reading charts and identifying market trends',
      duration: '20 min read',
      students: '2.9k',
      completed: false,
      link: '/guide/beginner-bitcoin'
    },
    {
      title: 'Risk Management in Crypto Trading',
      description: 'Protecting your capital and managing losses',
      duration: '12 min read',
      students: '3.2k',
      completed: false,
      link: '/guide/beginner-bitcoin'
    }
  ];
  type Topic = {
    title: string;
    description: string;
    duration: string;
    students: string;
    completed: boolean;
    link: string;
  };

  const TopicCard = ({ topic, level }: { topic: Topic, level: 'beginner' | 'intermediate' | 'advanced' }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{topic.description}</p>
        </div>
        {topic.completed && (
          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 ml-2" />
        )}
      </div>
      
      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {topic.duration}
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          {topic.students} students
        </div>
        <span className={`px-2 py-1 rounded text-xs ${
          level === 'beginner' ? 'bg-green-100 text-green-800' :
          level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
          level === 'advanced' ? 'bg-red-100 text-red-800' :
          'bg-purple-100 text-purple-800'
        }`}>
          {level}
        </span>
      </div>
      
      <Link 
        to={topic.link}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors inline-flex items-center justify-center"
      >
        Start Reading
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn Cryptocurrency</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Master crypto from the ground up with our comprehensive educational content. 
              Start as a complete beginner and work your way up to advanced trading strategies.
            </p>
            <div className="flex justify-center space-x-8 text-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div>Guides</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">25k+</div>
                <div>Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div>Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* History of Money Introduction */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The History of Money and the Rise of Digital Currencies
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                The story of money is the story of civilization itself. From ancient bartering to cryptocurrencies, 
                money has always evolved to meet the needs of a changing society.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Barter and Commodity Money */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🏺</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Barter and Commodity Money</h3>
                <p className="text-gray-600 text-sm">
                  Early economies functioned on direct exchange—barter. People traded livestock, grains, or other goods that held value. 
                  Societies gradually adopted commodity money such as shells, salt, and metals, valued for their scarcity and utility.
                </p>
              </div>

              {/* Metal Coins and Paper Money */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🪙</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Metal Coins and Paper Money</h3>
                <p className="text-gray-600 text-sm">
                  Around the 7th century BCE, the first standardized metal coins emerged in Lydia and China. 
                  Later, the Chinese Song Dynasty introduced the world's first government-issued paper money, 
                  bringing portability and official guarantees of value.
                </p>
              </div>

              {/* The Banking Revolution */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Banking Revolution</h3>
                <p className="text-gray-600 text-sm">
                  The birth of banking in medieval Italy enabled people to safely deposit and transfer money, 
                  fueling economic complexity and global trade. Trust in institutions became central to how value was exchanged.
                </p>
              </div>

              {/* Fiat Money and Electronic Payments */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fiat Money and Electronic Payments</h3>
                <p className="text-gray-600 text-sm">
                  Twentieth-century societies abandoned the gold standard for "fiat money"—currency backed by government decree. 
                  Credit cards and internet banking digitized finance, with systems like PayPal making money truly virtual.
                </p>
              </div>

              {/* The Birth of Digital Currencies */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-blue-200">
                <div className="text-3xl mb-4">₿</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Birth of Digital Currencies</h3>
                <p className="text-gray-600 text-sm">
                  In 2009, Bitcoin launched as the world's first decentralized digital currency. Unlike previous money forms, 
                  Bitcoin removed the need for trusted third parties, using blockchain technology and cryptography instead of banks.
                </p>
              </div>

              {/* Connecting the Evolution */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Digital Future</h3>
                <p className="text-gray-600 text-sm">
                  Digital currencies build on money's legacy, solving digital era needs: instant borderless payments, 
                  programmable money, and financial inclusion. As economies grow more digital, cryptocurrencies will play 
                  an increasingly central role in tomorrow's global marketplace.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Ready to Learn About This Revolution?</h3>
                <p className="text-blue-100 mb-4">
                  Understanding cryptocurrency starts with understanding why digital money was inevitable. 
                  Let's explore the technology that's reshaping finance.
                </p>
                <div className="flex justify-center">
                  <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-sm">
                    👇 Start with the basics below
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Beginner Basics</h2>
              <p className="text-gray-600 mt-1">Perfect for complete cryptocurrency beginners</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {beginnerTopics.map((topic, index) => (
              <TopicCard key={index} topic={topic} level="beginner" />
            ))}
          </div>
        </section>

        {/* Intermediate Section */}
        <section id="intermediate" className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-yellow-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Intermediate Topics</h2>
              <p className="text-gray-600 mt-1">Ready to dive deeper into crypto concepts</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intermediateTopics.map((topic, index) => (
              <TopicCard key={index} topic={topic} level="intermediate" />
            ))}
          </div>
        </section>

        {/* Advanced Section */}
        <section id="advanced">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-red-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Advanced Topics</h2>
              <p className="text-gray-600 mt-1">For experienced crypto users and traders</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedTopics.map((topic, index) => (
              <TopicCard key={index} topic={topic} level="advanced" />
            ))}
          </div>
        </section>

        {/* Crypto Trading Section */}
        <section id="trading" className="mt-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Crypto Trading</h2>
              <p className="text-gray-600 mt-1">Master trading strategies and market analysis</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingTopics.map((topic, index) => (
              <TopicCard key={index} topic={topic} level="trading" />
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Crypto Journey?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get personalized recommendations for exchanges, wallets, and tools based on your experience level.
          </p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Get Personalized Recommendations
          </button>
        </section>
      </div>
    </div>
  );
};

export default LearnCrypto;