import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, AlertTriangle, ExternalLink, Globe, Shield, Scale, FileText } from 'lucide-react';

const RegulatoryCompliance = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = [
    {
      name: 'United States',
      code: 'US',
      flag: '🇺🇸',
      status: 'regulated',
      summary: 'Complex regulatory framework with state-by-state variations',
      details: {
        legal: 'Legal with extensive regulations',
        exchanges: ['Coinbase', 'Kraken', 'Gemini'],
        restrictions: 'Some states have additional requirements',
        taxes: 'Capital gains tax applies',
        kyc: 'Strict KYC/AML requirements'
      }
    },
    {
      name: 'United Kingdom',
      code: 'UK',
      flag: '🇬🇧',
      status: 'regulated',
      summary: 'Well-regulated market with FCA oversight',
      details: {
        legal: 'Legal and regulated by FCA',
        exchanges: ['Coinbase', 'Binance UK', 'Kraken'],
        restrictions: 'Advertising restrictions in place',
        taxes: 'Capital gains tax applies',
        kyc: 'FCA-compliant KYC required'
      }
    },
    {
      name: 'European Union',
      code: 'EU',
      flag: '🇪🇺',
      status: 'regulated',
      summary: 'MiCA regulation provides unified framework',
      details: {
        legal: 'Legal under MiCA regulation',
        exchanges: ['Coinbase', 'Binance', 'Kraken'],
        restrictions: 'Varies by member state',
        taxes: 'Varies by member state',
        kyc: 'EU-wide KYC standards'
      }
    },
    {
      name: 'Canada',
      code: 'CA',
      flag: '🇨🇦',
      status: 'regulated',
      summary: 'Provincial regulation with federal oversight',
      details: {
        legal: 'Legal with provincial licensing',
        exchanges: ['Coinbase', 'Kraken', 'Bitbuy'],
        restrictions: 'Provincial variations apply',
        taxes: 'Capital gains tax applies',
        kyc: 'FINTRAC compliance required'
      }
    },
    {
      name: 'Australia',
      code: 'AU',
      flag: '🇦🇺',
      status: 'regulated',
      summary: 'AUSTRAC regulated with clear guidelines',
      details: {
        legal: 'Legal and regulated by AUSTRAC',
        exchanges: ['Coinbase', 'Binance', 'Swyftx'],
        restrictions: 'Consumer protection measures',
        taxes: 'Capital gains tax applies',
        kyc: 'AML/CTF Act compliance'
      }
    },
    {
      name: 'Japan',
      code: 'JP',
      flag: '🇯🇵',
      status: 'regulated',
      summary: 'Comprehensive regulatory framework',
      details: {
        legal: 'Legal with FSA licensing',
        exchanges: ['Coincheck', 'bitFlyer', 'Liquid'],
        restrictions: 'Strict exchange licensing',
        taxes: 'Income tax on crypto gains',
        kyc: 'FSA-mandated KYC'
      }
    },
    {
      name: 'Singapore',
      code: 'SG',
      flag: '🇸🇬',
      status: 'regulated',
      summary: 'Progressive regulatory approach',
      details: {
        legal: 'Legal with MAS oversight',
        exchanges: ['Coinbase', 'Binance', 'Gemini'],
        restrictions: 'Retail investor protections',
        taxes: 'No capital gains tax',
        kyc: 'MAS compliance required'
      }
    },
    {
      name: 'India',
      code: 'IN',
      flag: '🇮🇳',
      status: 'restricted',
      summary: 'Legal but heavily taxed and regulated',
      details: {
        legal: 'Legal but with restrictions',
        exchanges: ['WazirX', 'CoinDCX', 'ZebPay'],
        restrictions: 'Banking restrictions, high taxes',
        taxes: '30% tax on crypto gains',
        kyc: 'RBI guidelines apply'
      }
    },
    {
      name: 'China',
      code: 'CN',
      flag: '🇨🇳',
      status: 'banned',
      summary: 'Cryptocurrency trading and mining banned',
      details: {
        legal: 'Banned for individuals',
        exchanges: 'All exchanges banned',
        restrictions: 'Complete ban on crypto activities',
        taxes: 'N/A - banned',
        kyc: 'N/A - banned'
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'regulated': return 'border-green-500 bg-green-50';
      case 'restricted': return 'border-yellow-500 bg-yellow-50';
      case 'banned': return 'border-red-500 bg-red-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'regulated': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'restricted': return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'banned': return <XCircle className="h-5 w-5 text-red-600" />;
      default: return <Globe className="h-5 w-5 text-gray-600" />;
    }
  };

  const selectedCountryData = countries.find(c => c.code === selectedCountry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <Helmet>
        <title>Cryptocurrency Regulatory Compliance Guide 2025 - Country-Specific Laws</title>
        <meta name="description" content="Complete guide to cryptocurrency regulations worldwide. Learn the legal status, tax implications, and compliance requirements for crypto in your country." />
        <meta name="keywords" content="cryptocurrency regulation, crypto laws, bitcoin legal status, crypto taxes, compliance guide" />
        <meta property="og:title" content="Crypto Regulatory Compliance Guide 2025" />
        <meta property="og:description" content="Navigate crypto regulations worldwide with our comprehensive compliance guide covering legal status, taxes, and requirements by country." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cryptostarterguide.com/regulatory-compliance" />
      </Helmet>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Flag-inspired geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-20 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-lg transform rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-16 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-lg transform -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-28 h-18 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg transform rotate-45 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-20 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg transform -rotate-45 animate-pulse delay-3000"></div>
        
        {/* Floating flag emojis */}
        <div className="absolute top-32 left-1/4 text-4xl animate-bounce delay-500">🇺🇸</div>
        <div className="absolute top-60 right-1/3 text-3xl animate-bounce delay-1500">🇬🇧</div>
        <div className="absolute bottom-60 left-1/3 text-3xl animate-bounce delay-2500">🇪🇺</div>
        <div className="absolute bottom-32 right-1/4 text-4xl animate-bounce delay-3500">🇦🇺</div>
        <div className="absolute top-1/2 left-10 text-2xl animate-bounce delay-4000">🇯🇵</div>
        <div className="absolute top-1/3 right-10 text-2xl animate-bounce delay-4500">🇸🇬</div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Crypto Regulatory
              <span className="text-blue-400"> Compliance</span>
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Navigate the complex world of cryptocurrency regulations with confidence. 
            Get country-specific guidance on legal status, tax obligations, and compliance requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Country Selection Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-blue-600" />
                Select Your Country
              </h2>
              
              <div className="space-y-3">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => setSelectedCountry(country.code)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all hover:shadow-lg relative overflow-hidden ${
                      selectedCountry === country.code
                        ? getStatusColor(country.status) + ' shadow-lg'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    style={{
                      backgroundImage: selectedCountry === country.code 
                        ? `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%), url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><text x='50%' y='50%' font-size='40' text-anchor='middle' dominant-baseline='middle' opacity='0.1'>${country.flag}</text></svg>`)}")`
                        : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'right center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{country.flag}</span>
                        <div>
                          <div className="font-semibold text-gray-900">{country.name}</div>
                          <div className="text-sm text-gray-600 capitalize">{country.status}</div>
                        </div>
                      </div>
                      {getStatusIcon(country.status)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedCountryData ? (
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30">
                {/* Country Header with Flag Background */}
                <div 
                  className="relative mb-8 p-6 rounded-xl overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%), url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='200' height='120' viewBox='0 0 200 120'><text x='85%' y='50%' font-size='80' text-anchor='middle' dominant-baseline='middle' opacity='0.1'>${selectedCountryData.flag}</text></svg>`)}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{selectedCountryData.flag}</span>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{selectedCountryData.name}</h2>
                        <div className="flex items-center mt-2">
                          {getStatusIcon(selectedCountryData.status)}
                          <span className="ml-2 text-lg font-medium capitalize text-gray-700">
                            {selectedCountryData.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg">{selectedCountryData.summary}</p>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-blue-600" />
                        Legal Status
                      </h3>
                      <p className="text-gray-700">{selectedCountryData.details.legal}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-green-600" />
                        Tax Implications
                      </h3>
                      <p className="text-gray-700">{selectedCountryData.details.taxes}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">KYC Requirements</h3>
                      <p className="text-gray-700">{selectedCountryData.details.kyc}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Recommended Exchanges</h3>
                      <div className="space-y-2">
                        {Array.isArray(selectedCountryData.details.exchanges) ? 
                          selectedCountryData.details.exchanges.map((exchange, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              <span className="text-gray-700">{exchange}</span>
                            </div>
                          )) : (
                            <p className="text-gray-700">{selectedCountryData.details.exchanges}</p>
                          )
                        }
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Key Restrictions</h3>
                      <p className="text-gray-700">{selectedCountryData.details.restrictions}</p>
                    </div>

                    {selectedCountryData.status === 'regulated' && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-green-800 mb-2">✅ Compliance Tips</h3>
                        <ul className="text-green-700 space-y-1 text-sm">
                          <li>• Keep detailed records of all transactions</li>
                          <li>• Use regulated exchanges with proper licensing</li>
                          <li>• Report crypto gains according to local tax laws</li>
                          <li>• Complete KYC verification on all platforms</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/tools"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                  >
                    View Recommended Exchanges
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                  <a
                    href="/learn"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                  >
                    Learn More About Crypto
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-12 shadow-2xl border border-white/30 text-center">
                <Globe className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Select a Country</h2>
                <p className="text-gray-600 text-lg">
                  Choose your country from the sidebar to view specific cryptocurrency regulations, 
                  legal status, and compliance requirements.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Global Overview */}
        <div className="mt-16 bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Global Regulatory Landscape</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regulated Markets</h3>
              <p className="text-gray-600">
                Countries with clear regulatory frameworks providing legal certainty for crypto users and businesses.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Restricted Markets</h3>
              <p className="text-gray-600">
                Countries with partial restrictions, high taxes, or uncertain regulatory environments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Banned Markets</h3>
              <p className="text-gray-600">
                Countries where cryptocurrency trading and related activities are prohibited by law.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-yellow-800 mb-3">⚠️ Important Disclaimer</h3>
          <p className="text-yellow-700">
            This information is for educational purposes only and should not be considered legal or financial advice. 
            Cryptocurrency regulations are rapidly evolving. Always consult with qualified legal and tax professionals 
            in your jurisdiction before making any cryptocurrency-related decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryCompliance;