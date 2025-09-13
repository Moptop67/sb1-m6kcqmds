import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, Shield, TrendingUp, Calculator, Wallet } from 'lucide-react';

const ToolsReviews = () => {
  const [activeTab, setActiveTab] = useState('exchanges');

  const exchanges = [
    {
      name: 'Binance',
      rating: 4.8,
      pros: ['Lowest fees', 'Huge selection', 'Advanced trading'],
      cons: ['Complex for beginners', 'Regulatory issues in some countries'],
      fees: '0.1% spot trading',
      bonus: '10% fee discount for life',
      affiliateLink: '#',
      logo: '🟡',
      trusted: true
    },
    {
      name: 'Coinbase',
      rating: 4.6,
      pros: ['User-friendly', 'Regulated in US', 'Great for beginners'],
      cons: ['Higher fees', 'Limited advanced features'],
      fees: '1.49% for bank transfers',
      bonus: '$10 Bitcoin bonus',
      affiliateLink: '#',
      logo: '🔵',
      trusted: true
    },
    {
      name: 'KuCoin',
      rating: 4.4,
      pros: ['Low fees', 'Many altcoins', 'Good mobile app'],
      cons: ['Less regulation', 'Customer service'],
      fees: '0.1% trading fee',
      bonus: '20% fee discount',
      affiliateLink: '#',
      logo: '🟢',
      trusted: false
    }
  ];

  const wallets = [
    {
      name: 'Ledger Nano X',
      rating: 4.9,
      pros: ['Ultimate security', 'Mobile support', 'Many coins supported'],
      cons: ['Higher price', 'Learning curve'],
      price: '$149',
      bonus: 'Free shipping',
      affiliateLink: '#',
      logo: '🔒',
      type: 'Hardware'
    },
    {
      name: 'Trezor Model T',
      rating: 4.7,
      pros: ['Open source', 'Touchscreen', 'Great security'],
      cons: ['Expensive', 'Fewer supported coins'],
      price: '$219',
      bonus: '10% discount',
      affiliateLink: '#',
      logo: '🛡️',
      type: 'Hardware'
    },
    {
      name: 'MetaMask',
      rating: 4.3,
      pros: ['Free', 'DeFi integration', 'Browser extension'],
      cons: ['Online security risk', 'Ethereum focused'],
      price: 'Free',
      bonus: 'Get started guide',
      affiliateLink: '#',
      logo: '🦊',
      type: 'Software'
    }
  ];

  const tradingTools = [
    {
      name: '3Commas',
      rating: 4.5,
      pros: ['Automated trading', 'Multiple exchanges', 'Portfolio tracking'],
      cons: ['Monthly fees', 'Complex setup'],
      price: '$29/month',
      bonus: '30-day free trial',
      affiliateLink: '#',
      logo: '🤖'
    },
    {
      name: 'CoinLedger',
      rating: 4.8,
      pros: ['Easy tax filing', 'Multiple exchange sync', 'Great support'],
      cons: ['Paid plans for advanced features'],
      price: 'Free - $199',
      bonus: '15% discount',
      affiliateLink: '#',
      logo: '📊'
    }
  ];

  const ComparisonTable = ({ items, type }: { items: any[], type: string }) => (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Platform</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rating</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
              {type === 'exchanges' ? 'Fees' : type === 'wallets' ? 'Price' : 'Starting Price'}
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Key Benefits</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{item.logo}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    {item.trusted && (
                      <div className="flex items-center text-sm text-green-600">
                        <Shield className="h-3 w-3 mr-1" />
                        Trusted Partner
                      </div>
                    )}
                    {item.type && (
                      <div className="text-sm text-gray-500">{item.type} Wallet</div>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-medium">{item.rating}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm">
                {item.fees || item.price}
              </td>
              <td className="px-6 py-4">
                <ul className="text-sm space-y-1">
                  {item.pros.slice(0, 2).map((pro: string, i: number) => (
                    <li key={i} className="text-green-600">✓ {pro}</li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <a
                    href={item.affiliateLink}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors"
                  >
                    Sign Up
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <Link
                    to={item.name === 'Binance' ? '/review/binance' : item.name === 'Coinbase' ? '/review/binance-vs-coinbase' : '/review/binance'}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors block text-center"
                  >
                    Read Full Review
                  </Link>
                  {item.bonus && (
                    <div className="text-xs text-green-600 font-medium">
                      🎁 {item.bonus}
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const tabs = [
    { id: 'exchanges', label: 'Exchanges', icon: TrendingUp, count: exchanges.length },
    { id: 'wallets', label: 'Wallets', icon: Wallet, count: wallets.length },
    { id: 'trading', label: 'Trading Tools', icon: Calculator, count: tradingTools.length }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tools & Reviews</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Honest, detailed reviews of the best crypto exchanges, wallets, and trading tools. 
              Find the perfect platforms for your needs with our unbiased comparisons.
            </p>
            <div className="bg-green-800 bg-opacity-50 rounded-lg p-4 inline-block">
              <p className="text-green-100 text-sm">
                <Shield className="h-4 w-4 inline mr-2" />
                All reviews are based on personal testing and user feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors m-2 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === 'exchanges' && (
          <section id="exchanges">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Crypto Exchanges</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare fees, features, and security of the top cryptocurrency exchanges. 
                Find the best platform for buying, selling, and trading crypto.
              </p>
            </div>
            <ComparisonTable items={exchanges} type="exchanges" />
          </section>
        )}

        {activeTab === 'wallets' && (
          <section id="wallets">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Crypto Wallets</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hardware and software wallets reviewed and compared. Keep your cryptocurrency 
                safe with our recommended storage solutions.
              </p>
            </div>
            <ComparisonTable items={wallets} type="wallets" />
          </section>
        )}

        {activeTab === 'trading' && (
          <section id="trading">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trading & Tax Tools</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced trading bots, portfolio trackers, and tax software to optimize 
                your crypto trading and comply with regulations.
              </p>
            </div>
            <ComparisonTable items={tradingTools} type="trading" />
          </section>
        )}

        {/* Affiliate Disclosure */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Our Review Process & Affiliate Disclosure</h3>
          <div className="text-blue-800 space-y-2">
            <p>
              <strong>How we review:</strong> Every platform is personally tested by our team. We evaluate security, fees, 
              user experience, customer support, and available features.
            </p>
            <p>
              <strong>Affiliate partnerships:</strong> We earn commissions when you sign up through our links. This helps 
              fund our free educational content while maintaining complete editorial independence.
            </p>
            <p>
              <strong>Our promise:</strong> Our rankings and recommendations are never influenced by commission rates. 
              We only recommend platforms we genuinely use and trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsReviews;