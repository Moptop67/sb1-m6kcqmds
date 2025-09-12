import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
}

const CryptoMarketBanner = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchCryptoData = async () => {
    try {
      setError(null);
      
      // Using CoinGecko's free API - no API key required
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false&price_change_percentage=24h'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch crypto data');
      }
      
      const data = await response.json();
      setCryptoData(data);
      setLastUpdated(new Date());
      
    } catch (err) {
      console.error('Error fetching crypto data:', err);
      setError('Unable to load market data');
      
      // Fallback data in case API fails
      setCryptoData([
        {
          id: 'bitcoin',
          symbol: 'BTC',
          name: 'Bitcoin',
          current_price: 45000,
          price_change_percentage_24h: 2.5,
          market_cap_rank: 1
        },
        {
          id: 'ethereum',
          symbol: 'ETH',
          name: 'Ethereum',
          current_price: 2800,
          price_change_percentage_24h: -1.2,
          market_cap_rank: 2
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    
    // Update every 2 minutes (respecting API rate limits)
    const interval = setInterval(fetchCryptoData, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    if (price >= 1) {
      return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      return `$${price.toFixed(6)}`;
    }
  };

  const formatPercentage = (percentage: number) => {
    const sign = percentage >= 0 ? '+' : '';
    return `${sign}${percentage.toFixed(2)}%`;
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-3 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <RefreshCw className="h-4 w-4 animate-spin mr-2" />
            <span className="text-sm">Loading market data...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-3 border-b border-gray-700 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between">
          {/* Market Data */}
          <div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide">
            {cryptoData.slice(0, 6).map((crypto) => (
              <div key={crypto.id} className="flex items-center space-x-2 flex-shrink-0">
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-sm">{crypto.symbol.toUpperCase()}</span>
                  <span className="text-gray-300 text-xs">#{crypto.market_cap_rank}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-sm">{formatPrice(crypto.current_price)}</span>
                  
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                    crypto.price_change_percentage_24h >= 0
                      ? 'bg-green-600/20 text-green-300'
                      : 'bg-red-600/20 text-red-300'
                  }`}>
                    {crypto.price_change_percentage_24h >= 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    <span>{formatPercentage(crypto.price_change_percentage_24h)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Last Updated */}
          <div className="flex items-center space-x-2 text-xs text-gray-400 flex-shrink-0">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live</span>
            <span>•</span>
            <span>Updated {lastUpdated.toLocaleTimeString()}</span>
            {error && (
              <span className="text-yellow-400 ml-2">⚠️ {error}</span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="text-gray-400 text-xs">→</div>
      </div>
    </div>
  );
};

export default CryptoMarketBanner;