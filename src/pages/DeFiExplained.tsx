import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Zap, PiggyBank, ArrowUpDown, TrendingUp, Shield, AlertTriangle, BookOpen } from 'lucide-react';

const DeFiExplained: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DeFi Explained 2025: Complete Guide to Decentralized Finance | CryptoLearn</title>
        <meta name="description" content="Learn DeFi basics, yield farming, liquidity pools, and decentralized finance protocols. Complete beginner's guide to DeFi lending, borrowing, and earning in 2025." />
        <meta name="keywords" content="DeFi explained, decentralized finance guide, yield farming tutorial, liquidity pools, DeFi protocols, Uniswap, Aave, Compound, DeFi beginners" />
        <link rel="canonical" href="https://cryptolearn.com/guide/defi-explained" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="DeFi Explained 2025: Complete Guide to Decentralized Finance" />
        <meta property="og:description" content="Master decentralized finance with our comprehensive DeFi guide. Learn yield farming, liquidity pools, and top DeFi protocols." />
        <meta property="og:image" content="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg" />
        <meta property="og:url" content="https://cryptolearn.com/guide/defi-explained" />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DeFi Explained 2025: Complete Guide to Decentralized Finance" />
        <meta name="twitter:description" content="Master decentralized finance with our comprehensive DeFi guide. Learn yield farming, liquidity pools, and top DeFi protocols." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DeFi Explained 2025: Complete Guide to Decentralized Finance",
            "description": "Learn DeFi basics, yield farming, liquidity pools, and decentralized finance protocols. Complete beginner's guide to DeFi lending, borrowing, and earning in 2025.",
            "image": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
            "author": {
              "@type": "Organization",
              "name": "CryptoLearn"
            },
            "publisher": {
              "@type": "Organization",
              "name": "CryptoLearn",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cryptolearn.com/logo.png"
              }
            },
            "datePublished": "2025-01-27",
            "dateModified": "2025-01-27",
            "wordCount": 1200,
            "timeRequired": "PT15M",
            "articleSection": "DeFi Education",
            "keywords": ["DeFi", "decentralized finance", "yield farming", "liquidity pools", "blockchain", "cryptocurrency"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <a href="/learn" className="hover:text-blue-600">Learn Crypto</a>
            <span className="mx-2">›</span>
            <span className="text-gray-900">DeFi Explained</span>
          </nav>

          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              DeFi Explained: Your Guide to Decentralized Finance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Decentralized Finance (DeFi) represents a breakthrough in how financial services are delivered, 
              allowing anyone with internet access to borrow, lend, trade, and earn without banks or traditional intermediaries.
            </p>
          </header>

          {/* Learning Objectives */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">What You'll Learn</h2>
            <ul className="text-blue-800 space-y-2">
              <li>• What DeFi is and how it works</li>
              <li>• Major DeFi protocols and applications</li>
              <li>• Lending, borrowing, and yield farming strategies</li>
              <li>• Benefits and risks of decentralized finance</li>
            </ul>
          </div>

          {/* What Is DeFi */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">What Is DeFi?</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                DeFi is an ecosystem of financial applications built on public blockchains—mainly Ethereum—that 
                replaces many of the services and products offered by banks, brokers, and lenders. Using smart contracts 
                (self-executing digital agreements), DeFi eliminates middlemen, reducing transaction costs and empowering 
                users with greater autonomy and transparency.
              </p>
            </div>
          </section>

          {/* How Does DeFi Work */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <ArrowUpDown className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">How Does DeFi Work?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Contracts</h3>
                <p className="text-gray-700">
                  These coded contracts automate and enforce agreement terms, whether for loans, swaps, or savings.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Open Access</h3>
                <p className="text-gray-700">
                  Anyone can interact with DeFi protocols using a crypto wallet—no paperwork, ID, or approval needed.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pseudonymity</h3>
                <p className="text-gray-700">
                  Users don't need to reveal their real identities to participate in DeFi protocols.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-700">
                  All transactions and rules are viewable on the blockchain, fostering trust and auditability.
                </p>
              </div>
            </div>
          </section>

          {/* Main DeFi Protocols */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                <PiggyBank className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Main DeFi Protocols and DApps</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Decentralized Exchanges (DEXs)</h3>
                <p className="text-gray-700 mb-4">
                  Platforms like Uniswap and SushiSwap allow users to swap one token for another directly from their wallets, 
                  rather than relying on a centralized exchange. DEXs use liquidity pools and automated market maker (AMM) 
                  protocols, reducing counterparty risk and censorship.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lending and Borrowing Platforms</h3>
                <p className="text-gray-700 mb-4">
                  Apps like Aave, Compound, and MakerDAO let users lend their crypto assets to earn interest or borrow 
                  other assets by putting up collateral. Rates adjust automatically based on supply and demand, 
                  disrupting the traditional lending business.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Stablecoins</h3>
                <p className="text-gray-700 mb-4">
                  Blockchain tokens that maintain stable prices (e.g., USDC, DAI) are the bridge between volatile 
                  crypto assets and more reliable store-of-value and payments.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Synthetic Assets and Derivatives</h3>
                <p className="text-gray-700 mb-4">
                  Protocols like Synthetix let users create tokenized assets that mimic real-world stocks, commodities, 
                  or currencies—enabling broader market access on the blockchain.
                </p>
              </div>
            </div>
          </section>

          {/* Lending, Borrowing, and Yield */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Lending, Borrowing, and Yield</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Lending</h3>
                  <p className="text-gray-700">
                    Users lock up their tokens (such as ETH or stablecoins) in lending protocols to earn interest. 
                    The protocol matches lenders with borrowers without a central authority.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Borrowing</h3>
                  <p className="text-gray-700">
                    Anyone can access liquidity by locking up crypto as collateral and borrowing against it—no 
                    credit checks or applications required.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Yield Markets and Yield Farming</h3>
                  <p className="text-gray-700">
                    By providing liquidity to protocols, users can earn transaction fees or rewards (often in the 
                    form of platform tokens). Yield farming involves strategically moving assets between protocols 
                    to earn the best possible returns, sometimes stacking multiple reward layers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Liquidity Pools</h3>
                  <p className="text-gray-700">
                    Users deposit tokens into pools that facilitate DEX trades, sharing in the fees that traders pay. 
                    Risks include impermanent loss if token prices diverge significantly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why DeFi Matters */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Why DeFi Matters</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                DeFi has created open, borderless markets, letting anyone participate in investing, saving, or accessing 
                loans at any time. The system is transparent, highly composable (different apps can be combined), and 
                accessible to people who have historically been left out by banks.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Risks</h3>
                    <p className="text-yellow-700">
                      However, risks remain: DeFi is still young, with code bugs, smart contract exploits, and 
                      regulatory uncertainty as central challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                DeFi eliminates traditional financial intermediaries through smart contracts
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Major protocols include DEXs, lending platforms, and stablecoins
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Yield farming and liquidity provision offer earning opportunities
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                DeFi provides global access but comes with technical and regulatory risks
              </li>
            </ul>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Your DeFi Journey</h2>
            <p className="text-gray-600 mb-6">
              DeFi continues to evolve rapidly, making financial markets faster, fairer, and more accessible—while 
              bringing new risks and rewards to all participants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/learn" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore More Guides
              </a>
              <a 
                href="/guide/cryptocurrency-basics" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Start with Crypto Basics
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeFiExplained;