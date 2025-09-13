import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, AlertTriangle, ExternalLink, Globe, Shield, Scale, FileText, Users, Star } from 'lucide-react';

const RegulatoryCompliance = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = [
    {
      name: 'Australia',
      code: 'AU',
      flag: '🇦🇺',
      status: 'regulated',
      title: 'How to Begin With Crypto in Australia (2025)',
      subtitle: 'Thinking about buying your first cryptocurrency in Australia? This guide makes starting simple—with local rules, compliance essentials, and the trusted exchanges that beginners use most.',
      legalStatus: {
        title: 'Is Crypto Legal in Australia?',
        content: 'Cryptocurrency is legal in Australia, regulated as a digital asset by the Australian Securities and Investments Commission (ASIC) and AUSTRAC. All exchanges operating in Australia must follow anti-money laundering (AML) and counter-terrorism financing (CTF) rules—including mandatory identity checks for new users.'
      },
      steps: [
        'Choose an exchange registered with AUSTRAC',
        'Complete Know-Your-Customer (KYC) checks (ID, proof of address)',
        'Deposit AUD using trusted payment methods',
        'Buy crypto (Bitcoin, Ethereum, or others) directly, with clear fee display',
        'Secure your funds with strong passwords and two-factor authentication',
        'Move larger balances to a personal wallet for extra safety'
      ],
      taxes: {
        title: 'Basic Tax and Record-Keeping',
        content: 'Australia treats crypto as a taxable asset—any profit is subject to capital gains tax. Users must:',
        requirements: [
          'Keep all trading records (dates, AUD values, asset details)',
          'Report crypto gains/losses in annual tax returns',
          'Use ATO guides or consult a registered accountant for the latest rules'
        ]
      },
      compliance: {
        title: 'Stay Compliant—Avoid Scams!',
        tips: [
          'Only use exchanges with AUSTRAC registration (look for regulatory logos)',
          'Never share private keys or wallet seed phrases',
          'Check ASIC and AUSTRAC sites for scam warnings and consumer alerts'
        ]
      },
      localExchanges: [
        { name: 'CoinSpot', registration: 'Yes', features: 'Most trusted, high security, user-friendly', audSupport: 'Yes', rating: 4.8 },
        { name: 'Swyftx', registration: 'Yes', features: 'Competitive fees, great mobile app', audSupport: 'Yes', rating: 4.7 },
        { name: 'CoinJar', registration: 'Yes', features: 'Long history, crypto debit card', audSupport: 'Yes', rating: 4.5 },
        { name: 'Independent Reserve', registration: 'Yes', features: 'High security, business accounts', audSupport: 'Yes', rating: 4.6 },
        { name: 'Digital Surge', registration: 'Yes', features: 'Low fees, transparent', audSupport: 'Yes', rating: 4.4 }
      ],
      globalExchanges: [
        { name: 'Binance', regulation: 'Registered in multiple countries', features: 'Largest marketplace, huge asset selection', audSupport: 'Yes', rating: 4.8 },
        { name: 'Bybit', regulation: 'Regulated (overseas)', features: 'Trading, copy trading, derivatives', audSupport: 'Limited', rating: 4.3 },
        { name: 'Kraken', regulation: 'US/Global registration', features: 'Top security, broad coin range', audSupport: 'Yes', rating: 4.7 },
        { name: 'Coinbase', regulation: 'US/Global registration', features: 'Ease of use, high trust', audSupport: 'Yes', rating: 4.6 },
        { name: 'OKX', regulation: 'Global registration', features: 'Wide selection, advanced tools', audSupport: 'Limited', rating: 4.2 }
      ],
      checklist: [
        'Verify your chosen exchange on the AUSTRAC registry',
        'Prepare a government ID and proof of address',
        'Read the platform\'s security and privacy guides',
        'Start small, keep records, never invest more than you can afford to lose'
      ]
    },
    {
      name: 'United States',
      code: 'US',
      flag: '🇺🇸',
      status: 'regulated',
      title: 'How to Begin With Crypto in the United States (2025)',
      subtitle: 'Ready to start your crypto journey in the US? Navigate federal and state regulations with confidence using our beginner-friendly compliance guide.',
      legalStatus: {
        title: 'Is Crypto Legal in the United States?',
        content: 'Cryptocurrency is legal in the United States, regulated by multiple federal agencies including the SEC, CFTC, and FinCEN. Bitcoin is classified as a commodity, while most altcoins are considered securities. All exchanges must comply with federal AML/KYC requirements and state-specific licensing.'
      },
      steps: [
        'Choose a US-regulated exchange (Coinbase, Kraken, Gemini)',
        'Complete identity verification with SSN and government ID',
        'Link your US bank account or debit card',
        'Start with small purchases to understand the process',
        'Enable two-factor authentication immediately',
        'Consider a hardware wallet for long-term storage'
      ],
      taxes: {
        title: 'US Tax Requirements',
        content: 'The IRS treats crypto as property subject to capital gains tax:',
        requirements: [
          'Report all crypto transactions on Form 8949',
          'Pay 0-20% long-term capital gains (held >1 year)',
          'Pay up to 37% short-term capital gains (held <1 year)',
          'Keep detailed records of all purchases, sales, and trades'
        ]
      },
      compliance: {
        title: 'Stay Compliant in the US',
        tips: [
          'Only use exchanges registered as Money Service Businesses (MSB)',
          'Be aware of state-specific requirements (NY BitLicense)',
          'Report foreign crypto accounts over $10,000 (FBAR)',
          'Use crypto tax software like CoinLedger for accurate reporting'
        ]
      },
      localExchanges: [
        { name: 'Coinbase', registration: 'Yes', features: 'Most beginner-friendly, FDIC insured USD', audSupport: 'Yes', rating: 4.6 },
        { name: 'Kraken', registration: 'Yes', features: 'Advanced trading, high security', audSupport: 'Yes', rating: 4.7 },
        { name: 'Gemini', registration: 'Yes', features: 'Regulated, institutional grade', audSupport: 'Yes', rating: 4.5 },
        { name: 'Binance.US', registration: 'Yes', features: 'Low fees, wide selection', audSupport: 'Yes', rating: 4.3 }
      ],
      globalExchanges: [],
      checklist: [
        'Verify the exchange is registered with FinCEN as an MSB',
        'Check if your state has additional licensing requirements',
        'Prepare SSN, government ID, and proof of address',
        'Set up crypto tax tracking from your first purchase'
      ]
    },
    {
      name: 'United Kingdom',
      code: 'UK',
      flag: '🇬🇧',
      status: 'regulated',
      title: 'How to Begin With Crypto in the United Kingdom (2025)',
      subtitle: 'Starting your crypto journey in the UK? Our guide covers FCA regulations, tax implications, and the best exchanges for British beginners.',
      legalStatus: {
        title: 'Is Crypto Legal in the UK?',
        content: 'Cryptocurrency is legal in the UK under Financial Conduct Authority (FCA) regulation. Crypto assets are classified as property, with clear distinctions between utility tokens, security tokens, and e-money tokens. All crypto businesses must register with the FCA.'
      },
      steps: [
        'Choose an FCA-registered exchange',
        'Complete identity verification with UK documents',
        'Set up GBP deposits via bank transfer or debit card',
        'Start with Bitcoin or Ethereum for beginners',
        'Enable strong security measures (2FA, withdrawal limits)',
        'Understand the tax implications before trading'
      ],
      taxes: {
        title: 'UK Tax Requirements',
        content: 'HMRC treats crypto gains as subject to Capital Gains Tax:',
        requirements: [
          'Pay 10% or 20% CGT depending on your income bracket',
          'Annual CGT allowance of £6,000 (2024/25)',
          'Keep records of all transactions for tax reporting',
          'Report gains on your Self Assessment if above allowance'
        ]
      },
      compliance: {
        title: 'UK Compliance Tips',
        tips: [
          'Only use FCA-registered crypto exchanges',
          'Be aware of advertising restrictions on high-risk investments',
          'Understand that crypto derivatives are banned for retail investors',
          'Keep detailed records for HMRC reporting'
        ]
      },
      localExchanges: [
        { name: 'Coinbase', registration: 'Yes', features: 'FCA registered, beginner-friendly', audSupport: 'Yes', rating: 4.6 },
        { name: 'Binance UK', registration: 'Yes', features: 'Low fees, wide selection', audSupport: 'Yes', rating: 4.4 },
        { name: 'Kraken', registration: 'Yes', features: 'High security, advanced features', audSupport: 'Yes', rating: 4.7 },
        { name: 'eToro', registration: 'Yes', features: 'Social trading, copy trading', audSupport: 'Yes', rating: 4.2 }
      ],
      globalExchanges: [],
      checklist: [
        'Verify FCA registration on the Financial Services Register',
        'Prepare UK passport/driving license and proof of address',
        'Understand CGT implications before your first trade',
        'Set up proper record-keeping for tax purposes'
      ]
    },
    {
      name: 'Canada',
      code: 'CA',
      flag: '🇨🇦',
      status: 'regulated',
      title: 'How to Begin With Crypto in Canada (2025)',
      subtitle: 'Ready to buy crypto in Canada? Navigate CSA regulations and find the best exchanges with our comprehensive beginner guide.',
      legalStatus: {
        title: 'Is Crypto Legal in Canada?',
        content: 'Cryptocurrency is legal in Canada under Canadian Securities Administrators (CSA) guidance. Most crypto assets are treated as securities, with clear regulatory frameworks for exchanges. All platforms must register with provincial securities regulators.'
      },
      steps: [
        'Choose a CSA-registered exchange',
        'Complete identity verification with Canadian documents',
        'Fund your account with CAD via Interac e-Transfer',
        'Start with major cryptocurrencies (BTC, ETH)',
        'Set up proper security (2FA, strong passwords)',
        'Understand tax implications for your province'
      ],
      taxes: {
        title: 'Canadian Tax Requirements',
        content: 'CRA treats crypto as either capital gains or business income:',
        requirements: [
          '50% of capital gains are taxable at your marginal rate',
          'Business income from trading is fully taxable',
          'Keep detailed records of all transactions',
          'Report on your annual tax return'
        ]
      },
      compliance: {
        title: 'Canadian Compliance',
        tips: [
          'Use only provincially registered exchanges',
          'Comply with FINTRAC reporting requirements',
          'Understand leverage limits for retail investors',
          'Keep records for CRA auditing purposes'
        ]
      },
      localExchanges: [
        { name: 'Coinbase', registration: 'Yes', features: 'Regulated, user-friendly', audSupport: 'Yes', rating: 4.6 },
        { name: 'Kraken', registration: 'Yes', features: 'Advanced trading, high security', audSupport: 'Yes', rating: 4.7 },
        { name: 'Bitbuy', registration: 'Yes', features: 'Canadian-focused, easy CAD deposits', audSupport: 'Yes', rating: 4.3 },
        { name: 'Coinsquare', registration: 'Yes', features: 'Established Canadian exchange', audSupport: 'Yes', rating: 4.1 },
        { name: 'Newton', registration: 'Yes', features: 'No fees, simple interface', audSupport: 'Yes', rating: 4.4 }
      ],
      globalExchanges: [],
      checklist: [
        'Verify provincial securities registration',
        'Prepare Canadian ID and proof of address',
        'Set up Interac e-Transfer for funding',
        'Understand your province\'s specific tax rules'
      ]
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
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cryptocurrency Beginner Guide 2025 - How to Start Crypto in Your Country</title>
        <meta name="description" content="Complete beginner guide to buying cryptocurrency legally. Step-by-step instructions, recommended exchanges, and compliance tips for your country." />
        <meta name="keywords" content="how to buy crypto, cryptocurrency beginner guide, best crypto exchanges, crypto compliance, bitcoin for beginners" />
        <meta property="og:title" content="Crypto Beginner Guide 2025 - Start Safely" />
        <meta property="og:description" content="Learn how to buy your first cryptocurrency safely and legally with our comprehensive beginner guide." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cryptostarterguide.com/regulatory-compliance" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">CryptoStarter Guide</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Your complete beginner's guide to buying cryptocurrency safely and legally. 
              Get step-by-step instructions, recommended exchanges, and compliance tips for your country.
            </p>
            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4 inline-block">
              <p className="text-blue-100">
                <CheckCircle className="h-5 w-5 inline mr-2" />
                Beginner-friendly • Compliance-focused • Updated for 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Country Selection Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-blue-600" />
                Choose Your Country
              </h2>
              
              <div className="space-y-3">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => setSelectedCountry(country.code)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                      selectedCountry === country.code
                        ? getStatusColor(country.status) + ' shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
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
              <div className="space-y-8">
                {/* Country Header */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{selectedCountryData.flag}</span>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">{selectedCountryData.title}</h1>
                      <div className="flex items-center mt-2">
                        {getStatusIcon(selectedCountryData.status)}
                        <span className="ml-2 text-lg font-medium capitalize text-gray-700">
                          {selectedCountryData.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{selectedCountryData.subtitle}</p>
                </div>

                {/* Legal Status */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Scale className="h-6 w-6 mr-3 text-green-600" />
                    1. {selectedCountryData.legalStatus.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{selectedCountryData.legalStatus.content}</p>
                </div>

                {/* Steps for Beginners */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-3 text-blue-600" />
                    2. Steps for Beginners: Safe, Simple, and Compliant
                  </h2>
                  <div className="space-y-4">
                    {selectedCountryData.steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 text-lg">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tax Requirements */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-purple-600" />
                    3. {selectedCountryData.taxes.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-4">{selectedCountryData.taxes.content}</p>
                  <ul className="space-y-2">
                    {selectedCountryData.taxes.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compliance Tips */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-3 text-red-600" />
                    4. {selectedCountryData.compliance.title}
                  </h2>
                  <ul className="space-y-3">
                    {selectedCountryData.compliance.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-lg">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Exchanges */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    🏆 Top Crypto Exchanges for {selectedCountryData.name.split(' ')[0]}s (2025)
                  </h2>
                  <p className="text-gray-600 mb-8">
                    To help newcomers, here is a current list of trusted exchanges accessible in {selectedCountryData.name}:
                  </p>

                  {/* Local Exchanges */}
                  {selectedCountryData.localExchanges.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Top Local ({selectedCountryData.name}-Registered) Exchanges
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full bg-gray-50 rounded-lg">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Registration</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Features/Highlights</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Local Support</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Rating</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {selectedCountryData.localExchanges.map((exchange, index) => (
                              <tr key={index} className="hover:bg-white">
                                <td className="px-4 py-4 font-medium text-gray-900">{exchange.name}</td>
                                <td className="px-4 py-4">
                                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                                    {exchange.registration}
                                  </span>
                                </td>
                                <td className="px-4 py-4 text-gray-700">{exchange.features}</td>
                                <td className="px-4 py-4">
                                  <span className={`px-2 py-1 rounded text-sm ${
                                    exchange.audSupport === 'Yes' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {exchange.audSupport}
                                  </span>
                                </td>
                                <td className="px-4 py-4">
                                  <div className="flex items-center">
                                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                    <span className="font-medium">{exchange.rating}</span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        All local exchanges require users to verify identity for compliance, and offer simple local currency deposits.
                      </p>
                    </div>
                  )}

                  {/* Global Exchanges */}
                  {selectedCountryData.globalExchanges.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Major Overseas (Accessible to {selectedCountryData.name.split(' ')[0]}s)
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full bg-gray-50 rounded-lg">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Global Regulation</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Features/Highlights</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Local Support</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Rating</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {selectedCountryData.globalExchanges.map((exchange, index) => (
                              <tr key={index} className="hover:bg-white">
                                <td className="px-4 py-4 font-medium text-gray-900">{exchange.name}</td>
                                <td className="px-4 py-4 text-gray-700">{exchange.regulation}</td>
                                <td className="px-4 py-4 text-gray-700">{exchange.features}</td>
                                <td className="px-4 py-4">
                                  <span className={`px-2 py-1 rounded text-sm ${
                                    exchange.audSupport === 'Yes' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {exchange.audSupport}
                                  </span>
                                </td>
                                <td className="px-4 py-4">
                                  <div className="flex items-center">
                                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                    <span className="font-medium">{exchange.rating}</span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        Before using overseas exchanges, always check local access updates—regulations sometimes change.
                      </p>
                    </div>
                  )}
                </div>

                {/* Quick Checklist */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-3" />
                    Quick Checklist for New Users
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedCountryData.checklist.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-green-100">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-green-500">
                    <p className="text-green-100">
                      <strong>Remember:</strong> Start small, keep records, never invest more than you can afford to lose.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/tools"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
                  >
                    View All Exchange Reviews
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                  <a
                    href="/start-here"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
                  >
                    Complete Beginner Guide
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Globe className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Your Country</h2>
                <p className="text-gray-600 text-lg">
                  Choose your country from the sidebar to view a complete beginner's guide 
                  with step-by-step instructions, recommended exchanges, and compliance tips.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* SEO Tips Section */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose CryptoStarter Guide?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Beginner-Focused</h3>
              <p className="text-gray-600">
                Written specifically for newcomers with step-by-step instructions and clear explanations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance-First</h3>
              <p className="text-gray-600">
                Stay legal and safe with country-specific regulatory guidance and compliance tips.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Always Updated</h3>
              <p className="text-gray-600">
                Regular updates with the latest regulations, exchange recommendations, and safety tips.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-yellow-800 mb-3">⚠️ Important Disclaimer</h3>
          <p className="text-yellow-700">
            This information is for educational purposes only and should not be considered legal or financial advice. 
            Cryptocurrency regulations are rapidly evolving. Always consult with qualified legal and tax professionals 
            in your jurisdiction before making any cryptocurrency-related decisions. Never invest more than you can afford to lose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryCompliance;