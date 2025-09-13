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
      link: '/guide/understanding-crypto'
    },
    {
      title: 'How Does Bitcoin Work?',
      description: 'Learn about the first and most popular cryptocurrency',
      duration: '8 min read', 
      students: '10.2k',
      completed: false,
      link: '/guide/beginner-bitcoin'
    },
    {
      title: 'Types of Cryptocurrencies',
      description: 'Explore different types of digital assets and their purposes',
      duration: '6 min read',
      students: '8.7k',
      completed: false,
      link: '/guide/beginner-bitcoin'
    },
    {
      title: 'Setting Up Your First Wallet',
      description: 'Step-by-step guide to storing your cryptocurrency safely',
      duration: '10 min read',
      students: '9.3k',
      completed: false,
      link: '/review/ledger-vs-trezor'
    }
  ];

  const intermediateTopics = [
    {
      title: 'DeFi Explained: Decentralized Finance',
      description: 'Understanding lending, borrowing, and yield farming',
      duration: '12 min read',
      students: '5.2k',
      completed: false,
      link: '/guide/beginner-bitcoin'
    },
    {
      title: 'Staking and Passive Income',
      description: 'Earn rewards by holding and staking cryptocurrencies',
      duration: '9 min read',
      students: '6.1k',
      completed: false,
      link: '/guide/beginner-bitcoin'
    },
    {
      title: 'Trading Strategies for Beginners',
      description: 'Basic trading concepts and risk management',
      duration: '15 min read',
      students: '4.8k',
      completed: false,
      link: '/review/binance-vs-coinbase'
    }
  ];

  const advancedTopics = [
    {
      title: 'Technical Analysis Fundamentals',
      description: 'Reading charts and identifying market trends',
      duration: '20 min read',
      students: '2.9k',
      completed: false,
      link: '/guide/beginner-bitcoin'
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
          'bg-red-100 text-red-800'
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