import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Search, Clock, Users } from 'lucide-react';

const CryptoGlossary = () => {
  const glossaryTerms = [
    {
      term: "Address",
      definition: "A unique string of letters and numbers used to send or receive cryptocurrency, similar to an email address for digital money. Only the corresponding private key can access funds at an address.",
      category: "basics"
    },
    {
      term: "Altcoin",
      definition: "Any cryptocurrency other than Bitcoin. Examples include Ethereum, Solana, and Dogecoin.",
      category: "basics"
    },
    {
      term: "Bear Market",
      definition: "A market period where prices of cryptocurrencies or other assets are falling and confidence is low.",
      category: "trading"
    },
    {
      term: "Block",
      definition: "A data file containing a group of transactions. Blocks are linked together to form the blockchain. Each new block confirms the previous one, making the chain secure.",
      category: "blockchain"
    },
    {
      term: "Blockchain",
      definition: "A decentralized, digital ledger where transactions are recorded in blocks and linked in chronological order. It is public, tamper-resistant, and transparent to all participants.",
      category: "blockchain"
    },
    {
      term: "Block Reward",
      definition: "The reward cryptocurrency miners receive when they successfully add a new block to the blockchain, often including both a fixed amount of coins and transaction fees.",
      category: "mining"
    },
    {
      term: "Brain Wallet",
      definition: "A wallet whose private key is generated from a phrase or password memorized by its owner, not stored anywhere else.",
      category: "security"
    },
    {
      term: "Bull Market",
      definition: "A period when asset or crypto prices are rising and optimism is high.",
      category: "trading"
    },
    {
      term: "Centralized Exchange (CEX)",
      definition: "A business or platform where users buy, sell, or trade cryptocurrencies, controlled by a company, which holds user funds (e.g., Binance, Coinbase).",
      category: "trading"
    },
    {
      term: "Coin",
      definition: "A native digital currency that runs on its own blockchain (like Bitcoin or Ether).",
      category: "basics"
    },
    {
      term: "Cold Wallet",
      definition: "An offline wallet, such as a hardware or paper wallet. Provides extra security against hacking by never connecting to the internet.",
      category: "security"
    },
    {
      term: "Consensus Mechanism",
      definition: "The process through which blockchain participants agree on the validity of transactions. Examples include Proof of Work (PoW) and Proof of Stake (PoS).",
      category: "blockchain"
    },
    {
      term: "Cryptocurrency",
      definition: "A digital currency that uses cryptography for security and is typically decentralized, running on its own blockchain. Examples: Bitcoin, Ethereum.",
      category: "basics"
    },
    {
      term: "Cryptography",
      definition: "The science of encoding data so only authorised parties can understand or change it. Used for security in blockchain transactions and wallets.",
      category: "security"
    },
    {
      term: "DAO (Decentralized Autonomous Organization)",
      definition: "A blockchain-based organization governed by rules encoded as smart contracts, where token holders vote on proposals and decisions.",
      category: "defi"
    },
    {
      term: "DeFi (Decentralized Finance)",
      definition: "Blockchain-powered financial services and products that operate without traditional banks or intermediaries.",
      category: "defi"
    },
    {
      term: "DApp (Decentralized Application)",
      definition: "An app built on top of a blockchain (usually Ethereum), running via smart contracts and outside the control of any central company.",
      category: "defi"
    },
    {
      term: "DYOR (Do Your Own Research)",
      definition: "A reminder to investigate crypto projects independently before investing.",
      category: "basics"
    },
    {
      term: "Fiat Currency",
      definition: "Government-issued money (like AUD, USD, EUR) that is not backed by a physical commodity.",
      category: "basics"
    },
    {
      term: "Fork",
      definition: "When a blockchain splits into two separate paths due to rule changes or disagreements. Can be \"soft\" (minor, backward-compatible) or \"hard\" (major, not compatible).",
      category: "blockchain"
    },
    {
      term: "Genesis Block",
      definition: "The very first block in a blockchain.",
      category: "blockchain"
    },
    {
      term: "Gas",
      definition: "The fee paid to blockchain miners/validators to process and confirm transactions on networks like Ethereum.",
      category: "blockchain"
    },
    {
      term: "Hash",
      definition: "A unique string of characters produced by a cryptographic function. Blocks and addresses have hashes for security and verification.",
      category: "security"
    },
    {
      term: "Hot Wallet",
      definition: "A digital wallet connected to the internet, such as a mobile wallet app or web-based service. More convenient but less secure than cold wallets.",
      category: "security"
    },
    {
      term: "Ledger",
      definition: "A record-keeping system. Blockchains are public ledgers that keep track of all transactions.",
      category: "blockchain"
    },
    {
      term: "Mining",
      definition: "The process of validating blockchain transactions and adding new blocks, commonly involving solving cryptographic puzzles. Miners earn rewards for their work.",
      category: "mining"
    },
    {
      term: "Node",
      definition: "A computer that connects to the blockchain network, helps store and verify the public ledger, and sometimes participates in mining or validating.",
      category: "blockchain"
    },
    {
      term: "NFT (Non-Fungible Token)",
      definition: "A unique digital asset stored on the blockchain. Typically used for art, collectibles, or proving ownership of digital goods.",
      category: "defi"
    },
    {
      term: "Private Key",
      definition: "A secret, randomly generated code that gives its holder access to the cryptocurrency associated with a specific address. Private keys must always be kept confidential.",
      category: "security"
    },
    {
      term: "Proof of Stake (PoS)",
      definition: "A consensus mechanism where validators \"stake\" tokens to earn the right to validate transactions. It is more energy-efficient than mining.",
      category: "blockchain"
    },
    {
      term: "Proof of Work (PoW)",
      definition: "A consensus method where miners perform complex calculations to prove their work and validate new transactions, as seen in Bitcoin.",
      category: "mining"
    },
    {
      term: "Public Key",
      definition: "A cryptographic code shared openly and used to receive crypto, generate addresses, or check digital signatures.",
      category: "security"
    },
    {
      term: "Public Blockchain",
      definition: "A blockchain network anyone can join and participate in, such as Bitcoin or Ethereum.",
      category: "blockchain"
    },
    {
      term: "Smart Contract",
      definition: "Self-executing code on the blockchain that sets rules for transactions or business logic. Once conditions are met, the contract does its job automatically.",
      category: "defi"
    },
    {
      term: "Stablecoin",
      definition: "A cryptocurrency designed to have a stable value by being linked to a real-world asset, such as a national currency (e.g., USDT, USDC).",
      category: "basics"
    },
    {
      term: "Token",
      definition: "A digital unit representing value, access, or rights issued on top of an existing blockchain (often Ethereum). Tokens can represent anything from ownership in a project to digital collectibles, and are programmable via smart contracts.",
      category: "basics"
    },
    {
      term: "Validator",
      definition: "An entity or node responsible for confirming blockchain transactions and maintaining the integrity of the ledger, especially on proof-of-stake networks.",
      category: "blockchain"
    },
    {
      term: "Wallet",
      definition: "A software, hardware, or paper location where cryptocurrency private keys are stored. Used to send, receive, and monitor digital asset balances.",
      category: "security"
    }
  ];

  const categories = {
    basics: { name: "Basics", color: "bg-green-100 text-green-800", count: 0 },
    blockchain: { name: "Blockchain", color: "bg-blue-100 text-blue-800", count: 0 },
    security: { name: "Security", color: "bg-red-100 text-red-800", count: 0 },
    trading: { name: "Trading", color: "bg-yellow-100 text-yellow-800", count: 0 },
    defi: { name: "DeFi", color: "bg-purple-100 text-purple-800", count: 0 },
    mining: { name: "Mining", color: "bg-orange-100 text-orange-800", count: 0 }
  };

  // Count terms per category
  glossaryTerms.forEach(term => {
    if (categories[term.category as keyof typeof categories]) {
      categories[term.category as keyof typeof categories].count++;
    }
  });

  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Crypto Glossary 2025: 38+ Essential Blockchain Terms Explained | CryptoStarterGuide</title>
        <meta name="description" content="Master crypto terminology with our 2025 glossary: 38+ essential blockchain terms, cryptocurrency jargon, DeFi concepts explained simply for beginners. Searchable crypto dictionary." />
        <meta name="keywords" content="crypto glossary 2025, blockchain terms dictionary, cryptocurrency jargon explained, DeFi terms glossary, crypto terminology guide, blockchain vocabulary" />
        <meta property="og:title" content="Blockchain & Crypto Glossary for Newcomers | Essential Terms" />
        <meta property="og:description" content="Master crypto terminology: 38+ essential blockchain terms, cryptocurrency jargon, DeFi concepts explained for beginners in 2025." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto Glossary 2025: 38+ Essential Terms Explained" />
        <meta name="twitter:description" content="Searchable crypto dictionary: blockchain terms, DeFi jargon, cryptocurrency vocabulary explained simply." />
        <link rel="canonical" href="https://cryptostarterguide.com/guide/crypto-glossary" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Crypto Glossary 2025: 38+ Essential Blockchain Terms Explained",
            "description": "Master crypto terminology with our 2025 glossary: 38+ essential blockchain terms, cryptocurrency jargon explained for beginners.",
            "image": "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg",
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
              "@id": "https://cryptostarterguide.com/guide/crypto-glossary"
            },
            "articleSection": "Cryptocurrency Reference",
            "keywords": ["crypto glossary", "blockchain terms", "cryptocurrency dictionary", "DeFi terminology"],
            "wordCount": 800,
            "timeRequired": "PT10M"
          })}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Reference Guide</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Reference material</span>
            </div>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>8.2k students</span>
            </div>
            <span className="mx-2">•</span>
            <span>Updated January 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blockchain & Crypto Glossary for Newcomers
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Master the essential terminology of blockchain and cryptocurrency with our comprehensive glossary. 
            From basic concepts to advanced DeFi terms, everything is explained in simple, beginner-friendly language.
          </p>
        </header>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories ({glossaryTerms.length})</option>
                {Object.entries(categories).map(([key, category]) => (
                  <option key={key} value={key}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({glossaryTerms.length})
          </button>
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === key 
                  ? 'bg-blue-600 text-white' 
                  : `${category.color} hover:opacity-80`
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTerms.length} of {glossaryTerms.length} terms
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'all' && ` in ${categories[selectedCategory as keyof typeof categories].name}`}
          </p>
        </div>

        {/* Glossary Terms */}
        <div className="space-y-6">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No terms found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            filteredTerms.map((term, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{term.term}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categories[term.category as keyof typeof categories].color}`}>
                    {categories[term.category as keyof typeof categories].name}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{term.definition}</p>
              </div>
            ))
          )}
        </div>

        {/* Quick Navigation */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-800 mb-3">Continue Your Learning Journey</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              to="/guide/what-is-cryptocurrency" 
              className="block bg-white border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">What Is Cryptocurrency?</h4>
                  <p className="text-gray-600 text-sm">Learn the fundamentals of digital currency</p>
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
                  <h4 className="font-semibold text-gray-900">What Is Blockchain?</h4>
                  <p className="text-gray-600 text-sm">Understand the technology behind crypto</p>
                </div>
                <ArrowLeft className="h-5 w-5 text-blue-600 transform rotate-180" />
              </div>
            </Link>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Master Crypto Terminology</h2>
          <p className="text-green-100 text-lg mb-6 max-w-3xl mx-auto">
            Understanding these terms is essential for navigating the crypto world confidently. 
            Bookmark this glossary and refer back to it as you continue your cryptocurrency journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/guide/beginner-bitcoin"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Crypto Journey
            </Link>
            <Link
              to="/learn"
              className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
            >
              Continue Learning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoGlossary;