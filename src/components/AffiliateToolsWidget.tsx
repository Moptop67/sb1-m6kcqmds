import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const AffiliateToolsWidget = () => {
  const tools = [
    {
      name: 'Binance',
      category: 'Exchange',
      rating: 4.8,
      description: 'World\'s largest crypto exchange with lowest fees',
      cta: 'Get 10% Fee Discount',
      link: '#',
      badge: 'Most Popular'
    },
    {
      name: 'Ledger Nano X',
      category: 'Hardware Wallet',
      rating: 4.9,
      description: 'Ultimate security for your crypto assets',
      cta: 'Buy with Discount',
      link: '#',
      badge: 'Editor\'s Choice'
    },
    {
      name: 'CoinLedger',
      category: 'Tax Software',
      rating: 4.7,
      description: 'Simplify your crypto tax filing',
      cta: 'Start Free Trial',
      link: '#',
      badge: null
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">🏆 Our Top Picks</h3>
      <p className="text-sm text-gray-600 mb-6">
        These are the tools we personally use and recommend:
      </p>
      
      <div className="space-y-4">
        {tools.map((tool, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                  {tool.badge && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{tool.category}</p>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>{tool.rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
            
            <a
              href={tool.link}
              className="inline-flex items-center text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition-colors"
            >
              {tool.cta}
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          <strong>Affiliate Disclosure:</strong> We earn a commission when you click these links or make purchases. This helps keep our content free while maintaining our editorial independence.
        </p>
      </div>
    </div>
  );
};

export default AffiliateToolsWidget;