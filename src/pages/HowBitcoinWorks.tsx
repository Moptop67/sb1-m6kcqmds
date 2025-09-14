import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, BookOpen, Shield, Globe, Zap, Lock, Layers, TrendingUp, Cpu, Network } from 'lucide-react';

const HowBitcoinWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>How Does Bitcoin Work? Complete Beginner's Guide 2025 | CryptoStarterGuide</title>
        <meta name="description" content="Learn how Bitcoin works in 2025: blockchain technology, mining process, proof of work, cryptographic security, transactions explained simply for beginners. Complete Bitcoin guide." />
        <meta name="keywords" content="how does Bitcoin work 2025, Bitcoin blockchain explained, Bitcoin mining process, proof of work consensus, Bitcoin transactions guide, cryptocurrency technology beginners" />
        <meta property="og:title" content="How Does Bitcoin Work? The Complete Technology Guide" />
        <meta property="og:description" content="Master Bitcoin technology: blockchain, mining, proof of work, cryptographic security explained for beginners in 2025." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Does Bitcoin Work? Complete Guide 2025" />
        <meta name="twitter:description" content="Learn Bitcoin technology: blockchain, mining, proof of work, transactions explained simply." />
        <link rel="canonical" href="https://cryptostarterguide.com/guide/how-bitcoin-works" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Does Bitcoin Work? Complete Beginner's Guide 2025",
            "description": "Learn how Bitcoin works: blockchain technology, mining process, proof of work, cryptographic security explained for beginners.",
            "image": "https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg",
            "author": {
              "@type": "Organization",
              "name": "CryptoStarterGuide",
              "url": "https://cryptostarterguide.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "CryptoStarterGuide",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cryptostarterguide.com/logo.png"
              }
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://cryptostarterguide.com/guide/how-bitcoin-works"
            },
            "articleSection": "Bitcoin Education",
            "keywords": ["Bitcoin", "blockchain", "mining", "proof of work", "cryptocurrency technology"],
            "wordCount": 1400,
            "timeRequired": "PT8M"
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/learn" className="flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Learn Crypto
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Beginner Guide</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>8 min read</span>
            </div>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>10.2k students</span>
            </div>
            <span className="mx-2">•</span>
            <span>Updated January 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Does Bitcoin Work? A Beginner's Guide
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Bitcoin is the world's first and most recognized cryptocurrency—a new form of money powered by computer networks, 
            not banks or governments. To understand how Bitcoin truly works, let's break it down from how transactions are made 
            to how the technology keeps your coins safe.
          </p>
        </header>

        {/* Learning Objectives */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
            What You'll Learn
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              How Bitcoin's blockchain ledger works
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              The Bitcoin transaction process step-by-step
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              Mining and Proof of Work consensus mechanism
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              Cryptographic security and why Bitcoin is safe
            </li>
          </ul>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {/* The Blockchain */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Layers className="h-8 w-8 text-blue-600 mr-3" />
              The Blockchain: Bitcoin's Digital Ledger
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At the heart of Bitcoin is a public, tamper-resistant digital ledger called the blockchain. Think of the blockchain 
              as a continuously growing list of records—called blocks—linked together securely. Unlike traditional ledgers kept by banks, 
              this ledger is maintained by thousands of independent computers (nodes) all around the world, so everyone can verify its accuracy at any time.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Components of Bitcoin's Blockchain:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Layers className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Blocks</h4>
                    <p className="text-gray-600 text-sm">Data files containing groups of transactions, linked together chronologically to form an unbreakable chain.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Network className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Decentralized Network</h4>
                    <p className="text-gray-600 text-sm">Thousands of computers worldwide maintain copies of the ledger, ensuring no single point of failure.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Globe className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Public Verification</h4>
                    <p className="text-gray-600 text-sm">Anyone can view and verify all transactions, creating unprecedented transparency in financial records.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Making a Transaction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
              Making a Transaction
            </h2>
            
            <p className="text-gray-600 mb-6">
              When one person wants to send Bitcoin to another, they use a digital "wallet" and broadcast the instructions to the network. 
              The transaction is grouped together with others into a new block. These blocks are essentially batches of recent Bitcoin transactions, 
              waiting to be added to the chain.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transaction Process:</h3>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Initiate Transaction',
                    description: 'User creates a transaction in their Bitcoin wallet, specifying recipient and amount'
                  },
                  {
                    step: 2,
                    title: 'Digital Signature',
                    description: 'Transaction is signed with the sender\'s private key to prove ownership'
                  },
                  {
                    step: 3,
                    title: 'Network Broadcast',
                    description: 'Transaction is broadcast to the Bitcoin network for verification'
                  },
                  {
                    step: 4,
                    title: 'Block Inclusion',
                    description: 'Transaction is grouped with others into a block awaiting confirmation'
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
          </section>

          {/* Mining and Consensus */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Cpu className="h-8 w-8 text-orange-600 mr-3" />
              Mining and Consensus: Reaching Agreement
            </h2>
            
            <p className="text-gray-600 mb-6">
              Before a new block can be added to the blockchain, Bitcoin uses a process called mining. Here's how it works:
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Mining Process:</h3>
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Competing Miners
                  </h4>
                  <p className="text-orange-800 text-sm">
                    Miners use powerful computers to solve complex mathematical puzzles, competing to be first.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Proof of Work
                  </h4>
                  <p className="text-blue-800 text-sm">
                    The first to solve the problem gets to add the next block to the blockchain, plus a Bitcoin reward.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Network Verification
                  </h4>
                  <p className="text-green-800 text-sm">
                    Other network participants verify the block for accuracy, ensuring no one can cheat the system or spend the same Bitcoin twice.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    10-Minute Cycle
                  </h4>
                  <p className="text-purple-800 text-sm">
                    This cycle repeats about every 10 minutes, with miners racing to add the next block.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>Double-Spending Solution:</strong> This mining process solves the "double-spending" problem—ensuring the same Bitcoin can't be spent twice, 
                which was impossible with digital money before Bitcoin's invention.
              </p>
            </div>
          </section>

          {/* Security Through Cryptography */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="h-8 w-8 text-red-600 mr-3" />
              Security Through Cryptography
            </h2>
            
            <p className="text-gray-600 mb-6">
              Every Bitcoin transaction is protected by top-grade cryptography. When money is sent, it's signed with a private key (secret digital password). 
              The blockchain records this permanently, and anyone can check to ensure the transaction is genuine—no one can alter the blockchain or fake ownership.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Lock className="h-6 w-6 text-red-600 mr-2" />
                  Private Keys
                </h3>
                <p className="text-gray-600 text-sm">
                  Secret digital passwords that prove ownership and authorize transactions. Must be kept completely confidential.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Shield className="h-6 w-6 text-green-600 mr-2" />
                  Digital Signatures
                </h3>
                <p className="text-gray-600 text-sm">
                  Mathematical proof that a transaction was created by the owner of the private key, without revealing the key itself.
                </p>
              </div>
            </div>
          </section>

          {/* Why Is This So Powerful */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Is This So Powerful?</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Network className="h-6 w-6 text-blue-600 mr-2" />
                  Decentralization
                </h3>
                <p className="text-gray-600">
                  No single group controls Bitcoin. Power is shared and transactions can't be blocked or censored.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Globe className="h-6 w-6 text-green-600 mr-2" />
                  Transparency
                </h3>
                <p className="text-gray-600">
                  Anyone can see the entire transaction history and verify ownership using the public blockchain.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="h-6 w-6 text-orange-600 mr-2" />
                  Scarcity
                </h3>
                <p className="text-gray-600">
                  Only 21 million bitcoins will ever exist, making each coin valuable like digital gold.
                </p>
              </div>
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              When all these pieces—blockchain, mining, consensus, cryptography—come together, Bitcoin enables a safe, open, 
              and borderless system for sending and storing value, completely independent of traditional banks.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
              <p className="text-gray-700 text-lg">
                This revolutionary combination of technologies created the world's first truly digital money that works without requiring trust in any central authority—a breakthrough that has inspired thousands of other cryptocurrencies and blockchain applications.
              </p>
            </div>
          </section>
        </article>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-blue-800 mb-3">Next Steps:</h3>
          <div className="space-y-3">
            <Link 
              to="/guide/beginner-bitcoin" 
              className="block bg-white border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">Buy Your First Bitcoin</h4>
                  <p className="text-gray-600 text-sm">Ready to get started? Learn how to purchase Bitcoin safely</p>
                </div>
                <ArrowLeft className="h-5 w-5 text-blue-600 transform rotate-180" />
              </div>
            </Link>
            
            <Link 
              to="/guide/what-is-blockchain" 
              className="block bg-white border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">Learn About Blockchain Technology</h4>
                  <p className="text-gray-600 text-sm">Dive deeper into the technology behind Bitcoin</p>
                </div>
                <ArrowLeft className="h-5 w-5 text-blue-600 transform rotate-180" />
              </div>
            </Link>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-orange-100 text-lg mb-6">
              Bitcoin works through a combination of blockchain technology, cryptographic security, and decentralized mining. 
              This creates a trustless, transparent, and secure system for digital money that operates without banks or governments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/guide/beginner-bitcoin"
                className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Buy Your First Bitcoin
              </Link>
              <Link
                to="/learn"
                className="bg-orange-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-900 transition-colors"
              >
                Continue Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowBitcoinWorks;