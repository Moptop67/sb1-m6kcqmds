import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, BookOpen, Shield, Globe, Zap, Lock, Layers, TrendingUp, Coins, ArrowUpDown, PiggyBank } from 'lucide-react';

const DeFiExplained = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>DeFi Explained 2025: Complete Guide to Decentralized Finance | CryptoStarterGuide</title>
        <meta name="description" content="Master DeFi in 2025: decentralized finance protocols, yield farming, liquidity pools, lending/borrowing explained. Complete guide to Uniswap, Aave, Compound & more." />
        <meta name="keywords" content="DeFi explained 2025, decentralized finance guide, yield farming tutorial, liquidity pools guide, Uniswap Aave Compound, DeFi protocols beginners" />
        <meta property="og:title" content="DeFi Explained: Your Complete Guide to Decentralized Finance" />
        <meta property="og:description" content="Master DeFi: decentralized finance protocols, yield farming, liquidity pools, lending/borrowing explained for beginners in 2025." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DeFi Explained 2025: Complete Decentralized Finance Guide" />
        <meta name="twitter:description" content="Learn DeFi: protocols, yield farming, liquidity pools, lending/borrowing explained simply." />
        <link rel="canonical" href="https://cryptostarterguide.com/guide/defi-explained" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DeFi Explained 2025: Complete Guide to Decentralized Finance",
            "description": "Master DeFi: decentralized finance protocols, yield farming, liquidity pools, lending/borrowing explained for beginners.",
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
              "@id": "https://cryptostarterguide.com/guide/defi-explained"
            },
            "articleSection": "DeFi Education",
            "keywords": ["DeFi", "decentralized finance", "yield farming", "liquidity pools", "smart contracts"],
            "wordCount": 1200,
            "timeRequired": "PT10M"
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
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">Intermediate Guide</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>10 min read</span>
            </div>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>7.8k students</span>
            </div>
            <span className="mx-2">•</span>
            <span>Updated January 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            DeFi Explained: Your Guide to Decentralized Finance
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Decentralized Finance (DeFi) represents a breakthrough in how financial services are delivered, allowing anyone with internet access to borrow, lend, trade, and earn without banks or traditional intermediaries. Powered by blockchain and smart contracts, DeFi offers open, permissionless access to a full suite of financial tools—democratizing finance worldwide.
          </p>
        </header>

        {/* Learning Objectives */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <BookOpen className="h-6 w-6 text-purple-600 mr-2" />
            What You'll Learn
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              What DeFi is and how it works with smart contracts
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              Major DeFi protocols: DEXs, lending platforms, stablecoins
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              Yield farming, liquidity pools, and earning strategies
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              Benefits, risks, and the future of decentralized finance
            </li>
          </ul>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {/* What Is DeFi */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="h-8 w-8 text-purple-600 mr-3" />
              What Is DeFi?
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              DeFi is an ecosystem of financial applications built on public blockchains—mainly Ethereum—that replaces many of the services and products offered by banks, brokers, and lenders. Using smart contracts (self-executing digital agreements), DeFi eliminates middlemen, reducing transaction costs and empowering users with greater autonomy and transparency.
            </p>
          </section>

          {/* How Does DeFi Work */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Zap className="h-8 w-8 text-blue-600 mr-3" />
              How Does DeFi Work?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Lock className="h-6 w-6 text-blue-600 mr-2" />
                  Smart Contracts
                </h3>
                <p className="text-gray-600 text-sm">
                  These coded contracts automate and enforce agreement terms, whether for loans, swaps, or savings.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Globe className="h-6 w-6 text-green-600 mr-2" />
                  Open Access
                </h3>
                <p className="text-gray-600 text-sm">
                  Anyone can interact with DeFi protocols using a crypto wallet—no paperwork, ID, or approval needed.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Shield className="h-6 w-6 text-purple-600 mr-2" />
                  Pseudonymity
                </h3>
                <p className="text-gray-600 text-sm">
                  Users don't need to reveal their real identities to participate in DeFi protocols.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-2" />
                  Transparency
                </h3>
                <p className="text-gray-600 text-sm">
                  All transactions and rules are viewable on the blockchain, fostering trust and auditability.
                </p>
              </div>
            </div>
          </section>

          {/* Main DeFi Protocols */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Main DeFi Protocols and DApps</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <ArrowUpDown className="h-6 w-6 mr-2" />
                  Decentralized Exchanges (DEXs)
                </h3>
                <p className="text-blue-800 mb-4">
                  Platforms like Uniswap and SushiSwap allow users to swap one token for another directly from their wallets, rather than relying on a centralized exchange. DEXs use liquidity pools and automated market maker (AMM) protocols, reducing counterparty risk and censorship.
                </p>
                <div className="bg-white bg-opacity-50 rounded-lg p-3">
                  <p className="text-blue-900 text-sm">
                    <strong>Popular DEXs:</strong> Uniswap, SushiSwap, PancakeSwap, Curve Finance
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center">
                  <PiggyBank className="h-6 w-6 mr-2" />
                  Lending and Borrowing Platforms
                </h3>
                <p className="text-green-800 mb-4">
                  Apps like Aave, Compound, and MakerDAO let users lend their crypto assets to earn interest or borrow other assets by putting up collateral. Rates adjust automatically based on supply and demand, disrupting the traditional lending business.
                </p>
                <div className="bg-white bg-opacity-50 rounded-lg p-3">
                  <p className="text-green-900 text-sm">
                    <strong>Popular Platforms:</strong> Aave, Compound, MakerDAO, Venus Protocol
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-900 mb-3 flex items-center">
                  <Coins className="h-6 w-6 mr-2" />
                  Stablecoins
                </h3>
                <p className="text-yellow-800 mb-4">
                  Blockchain tokens that maintain stable prices (e.g., USDC, DAI) are the bridge between volatile crypto assets and more reliable store-of-value and payments.
                </p>
                <div className="bg-white bg-opacity-50 rounded-lg p-3">
                  <p className="text-yellow-900 text-sm">
                    <strong>Popular Stablecoins:</strong> USDC, DAI, USDT, FRAX
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  Synthetic Assets and Derivatives
                </h3>
                <p className="text-purple-800 mb-4">
                  Protocols like Synthetix let users create tokenized assets that mimic real-world stocks, commodities, or currencies—enabling broader market access on the blockchain.
                </p>
                <div className="bg-white bg-opacity-50 rounded-lg p-3">
                  <p className="text-purple-900 text-sm">
                    <strong>Popular Protocols:</strong> Synthetix, Mirror Protocol, UMA
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Lending, Borrowing, and Yield */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lending, Borrowing, and Yield</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <PiggyBank className="h-6 w-6 text-green-600 mr-2" />
                    Lending
                  </h3>
                  <p className="text-gray-600">
                    Users lock up their tokens (such as ETH or stablecoins) in lending protocols to earn interest. The protocol matches lenders with borrowers without a central authority.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <ArrowUpDown className="h-6 w-6 text-blue-600 mr-2" />
                    Borrowing
                  </h3>
                  <p className="text-gray-600">
                    Anyone can access liquidity by locking up crypto as collateral and borrowing against it—no credit checks or applications required.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                    Yield Markets and Yield Farming
                  </h3>
                  <p className="text-gray-600">
                    By providing liquidity to protocols, users can earn transaction fees or rewards (often in the form of platform tokens). Yield farming involves strategically moving assets between protocols to earn the best possible returns, sometimes stacking multiple reward layers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Layers className="h-6 w-6 text-orange-600 mr-2" />
                    Liquidity Pools
                  </h3>
                  <p className="text-gray-600">
                    Users deposit tokens into pools that facilitate DEX trades, sharing in the fees that traders pay. Risks include impermanent loss if token prices diverge significantly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why DeFi Matters */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why DeFi Matters</h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              DeFi has created open, borderless markets, letting anyone participate in investing, saving, or accessing loans at any time. The system is transparent, highly composable (different apps can be combined), and accessible to people who have historically been left out by banks.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits of DeFi:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 24/7 global access to financial services</li>
                <li>• No intermediaries or gatekeepers</li>
                <li>• Transparent and auditable transactions</li>
                <li>• Composable protocols that work together</li>
                <li>• Financial inclusion for the unbanked</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>Important:</strong> However, risks remain: DeFi is still young, with code bugs, smart contract exploits, and regulatory uncertainty as central challenges. Always do your research and never invest more than you can afford to lose.
              </p>
            </div>
          </section>

          {/* Future of DeFi */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Future of DeFi</h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              DeFi continues to evolve rapidly, making financial markets faster, fairer, and more accessible—while bringing new risks and rewards to all participants. As the technology matures, we can expect better user experiences, improved security, and broader adoption.
            </p>
          </section>
        </article>

        {/* Next Steps */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-purple-800 mb-3">Next Steps:</h3>
          <div className="space-y-3">
            <Link 
              to="/guide/beginner-bitcoin" 
              className="block bg-white border border-purple-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">Start with Basic Crypto</h4>
                  <p className="text-gray-600 text-sm">New to crypto? Learn the fundamentals first</p>
                </div>
                <ArrowLeft className="h-5 w-5 text-purple-600 transform rotate-180" />
              </div>
            </Link>
            
            <Link 
              to="/tools" 
              className="block bg-white border border-purple-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">Find DeFi-Compatible Wallets</h4>
                  <p className="text-gray-600 text-sm">Get the right tools for DeFi participation</p>
                </div>
                <ArrowLeft className="h-5 w-5 text-purple-600 transform rotate-180" />
              </div>
            </Link>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-purple-100 text-lg mb-6">
              DeFi democratizes finance by removing intermediaries and providing open access to lending, borrowing, trading, and earning opportunities. While promising, it requires careful research and risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/guide/beginner-bitcoin"
                className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start with Crypto Basics
              </Link>
              <Link
                to="/learn"
                className="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors"
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

export default DeFiExplained;