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
      summary: 'Complex federal and state regulatory framework with comprehensive oversight',
      details: {
        legal: 'Legal and regulated by multiple agencies including SEC, CFTC, FinCEN, and state regulators. Bitcoin classified as commodity, most altcoins as securities.',
        exchanges: ['Coinbase', 'Kraken', 'Gemini', 'Binance.US'],
        restrictions: 'Some states like New York require BitLicense. Certain DeFi protocols restricted. No access to international Binance.',
        taxes: 'Capital gains tax: 0-20% long-term, up to 37% short-term. Must report all transactions over $10,000. Form 8949 required.',
        kyc: 'Strict KYC/AML under Bank Secrecy Act. Enhanced due diligence for high-value transactions. FATCA reporting requirements.',
        licenses: 'Money Service Business (MSB) registration required. State-by-state licensing varies.',
        penalties: 'Severe penalties for non-compliance: up to $250,000 fines and 5 years imprisonment for willful violations.',
        updates: 'Recent: Spot Bitcoin ETFs approved. Proposed stablecoin regulations pending. Enhanced crypto tax reporting rules.'
      }
    },
    {
      name: 'United Kingdom',
      code: 'UK',
      flag: '🇬🇧',
      status: 'regulated',
      summary: 'Comprehensive FCA regulation with clear guidelines for crypto businesses',
      details: {
        legal: 'Legal under FCA regulation. Crypto assets classified as property. Clear distinction between utility tokens, security tokens, and e-money tokens.',
        exchanges: ['Coinbase', 'Binance UK', 'Kraken', 'Bitstamp', 'eToro'],
        restrictions: 'Advertising restrictions for high-risk investments. Derivatives banned for retail investors. Cold calling prohibited.',
        taxes: 'Capital gains tax: 10-20% depending on income. Annual exemption £6,000. Income tax on mining/staking. Corporation tax for businesses.',
        kyc: 'FCA-compliant KYC under MLR 2017. Enhanced due diligence for PEPs. Travel rule compliance required.',
        licenses: 'Cryptoasset firms must register with FCA. Temporary registration regime ended. Full authorization required.',
        penalties: 'Unlimited fines and up to 2 years imprisonment for operating without registration. Consumer redress available.',
        updates: 'Recent: Stablecoin regulation framework. Proposed crypto promotion rules. Enhanced consumer protections.'
      }
    },
    {
      name: 'European Union',
      code: 'EU',
      flag: '🇪🇺',
      status: 'regulated',
      summary: 'Markets in Crypto-Assets (MiCA) regulation creates harmonized EU-wide framework',
      details: {
        legal: 'Legal under MiCA regulation (effective 2024). Harmonized rules across 27 member states. Clear categorization of crypto assets.',
        exchanges: ['Coinbase', 'Binance', 'Kraken', 'Bitstamp', 'Bitpanda'],
        restrictions: 'Energy disclosure requirements for proof-of-work. Marketing restrictions. Consumer protection measures.',
        taxes: 'Varies by member state: Germany (0% after 1 year hold), France (30% flat tax), Netherlands (25-49% income tax).',
        kyc: 'EU-wide AML6 directive. Travel rule for transactions >€1,000. Enhanced due diligence requirements.',
        licenses: 'MiCA licenses valid across EU. Grandfathering provisions for existing operators. Passport rights available.',
        penalties: 'Up to 10% of annual turnover or €5 million. Criminal sanctions vary by member state.',
        updates: 'Recent: MiCA fully implemented. DeFi regulation under consideration. Stablecoin reserve requirements active.'
      }
    },
    {
      name: 'Canada',
      code: 'CA',
      flag: '🇨🇦',
      status: 'regulated',
      summary: 'Federal securities regulation with provincial implementation and oversight',
      details: {
        legal: 'Legal under securities law. CSA guidance treats most crypto as securities. Clear regulatory framework for exchanges.',
        exchanges: ['Coinbase', 'Kraken', 'Bitbuy', 'Coinsquare', 'Newton'],
        restrictions: 'Leverage limits for retail investors. Stablecoin restrictions. Some DeFi protocols limited.',
        taxes: 'Capital gains: 50% taxable at marginal rate. Business income fully taxable. GST/HST may apply to mining.',
        kyc: 'FINTRAC compliance under PCMLTFA. Large cash transaction reports. Suspicious transaction reports required.',
        licenses: 'Provincial securities registration required. Investment dealer or marketplace dealer categories.',
        penalties: 'Up to CAD $5 million fines and 5 years imprisonment. Administrative penalties available.',
        updates: 'Recent: Crypto trading platform guidance updated. Stablecoin consultation ongoing. Enhanced retail protections.'
      }
    },
    {
      name: 'Australia',
      code: 'AU',
      flag: '🇦🇺',
      status: 'regulated',
      summary: 'Comprehensive AUSTRAC regulation with ASIC oversight for financial services',
      details: {
        legal: 'Legal with dual regulation: AUSTRAC for AML/CTF, ASIC for financial services. Clear guidance on crypto classification.',
        exchanges: ['Coinbase', 'Binance', 'Swyftx', 'CoinSpot', 'Independent Reserve'],
        restrictions: 'Margin lending restrictions. Enhanced consumer protections. Advertising standards apply.',
        taxes: 'CGT: 50% discount after 12 months for individuals. Companies pay full rate. GST exempt for personal use.',
        kyc: 'AML/CTF Act compliance. Customer identification and verification. Ongoing monitoring required.',
        licenses: 'AUSTRAC registration mandatory. ASIC licensing for derivatives. Consumer credit licenses may apply.',
        penalties: 'Up to AUD $22.2 million or 10% of turnover. Criminal penalties up to 10 years imprisonment.',
        updates: 'Recent: Token mapping consultation. Custody and settlement facility licensing. Enhanced scam protections.'
      }
    },
    {
      name: 'Japan',
      code: 'JP',
      flag: '🇯🇵',
      status: 'regulated',
      summary: 'World-leading comprehensive regulatory framework with FSA oversight',
      details: {
        legal: 'Legal under Payment Services Act and Financial Instruments and Exchange Act. Crypto assets legally defined.',
        exchanges: ['Coincheck', 'bitFlyer', 'Liquid', 'GMO Coin', 'Rakuten Wallet'],
        restrictions: 'Strict segregation requirements. Leverage limits (2x max). Cold storage mandates. Insurance requirements.',
        taxes: 'Income tax up to 55% on crypto gains. Separate taxation for business use. Consumption tax exempt.',
        kyc: 'FSA-mandated KYC under JAFIC guidelines. Enhanced verification for large transactions. Ongoing monitoring.',
        licenses: 'Crypto Asset Exchange Service Provider license required. Strict capital and operational requirements.',
        penalties: 'Business improvement orders. License revocation. Criminal penalties up to 10 years imprisonment.',
        updates: 'Recent: Stablecoin regulations implemented. DAO legal framework under development. NFT guidance issued.'
      }
    },
    {
      name: 'Singapore',
      code: 'SG',
      flag: '🇸🇬',
      status: 'regulated',
      summary: 'Progressive fintech-friendly regulation with comprehensive MAS oversight',
      details: {
        legal: 'Legal under Payment Services Act. Clear distinction between payment tokens, utility tokens, and security tokens.',
        exchanges: ['Coinbase', 'Binance', 'Gemini', 'Crypto.com', 'Coinhako'],
        restrictions: 'Retail investor protections. Advertising restrictions. Leverage limits. Cold storage requirements.',
        taxes: 'No capital gains tax for individuals. Income tax for businesses. GST exempt for crypto transactions.',
        kyc: 'MAS AML/CFT requirements. Customer due diligence. Enhanced measures for high-risk customers.',
        licenses: 'Major Payment Institution license for large operators. Standard Payment Institution for smaller ones.',
        penalties: 'Up to SGD $1 million fines and 10 years imprisonment. Civil penalties and license revocation.',
        updates: 'Recent: Stablecoin framework consultation. Project Guardian DeFi pilots. Enhanced retail protections.'
      }
    },
    {
      name: 'India',
      code: 'IN',
      flag: '🇮🇳',
      status: 'restricted',
      summary: 'Legal but with significant restrictions, high taxation, and regulatory uncertainty',
      details: {
        legal: 'Legal but not recognized as legal tender. No specific crypto law. RBI restrictions on banking services.',
        exchanges: ['WazirX', 'CoinDCX', 'ZebPay', 'CoinSwitch', 'Unocoin'],
        restrictions: 'Banking restrictions lifted by Supreme Court. High TDS requirements. Advertising restrictions proposed.',
        taxes: '30% flat tax on crypto gains. 1% TDS on transactions. No set-off of losses. Gifts taxable.',
        kyc: 'RBI KYC guidelines. PAN card mandatory. Enhanced due diligence for large transactions.',
        licenses: 'No specific licensing regime. Exchanges operate under existing laws. Regulatory clarity pending.',
        penalties: 'Tax evasion penalties apply. Potential money laundering charges. No specific crypto penalties.',
        updates: 'Recent: 30% crypto tax implemented. TDS rules active. Central Bank Digital Currency (CBDC) pilot launched.'
      }
    },
    {
      name: 'China',
      code: 'CN',
      flag: '🇨🇳',
      status: 'banned',
      summary: 'Complete ban on cryptocurrency trading, mining, and related services',
      details: {
        legal: 'Completely banned. All crypto transactions illegal. Criminal penalties for violations.',
        exchanges: 'All exchanges banned and blocked. VPN use for crypto trading illegal.',
        restrictions: 'Mining banned. Payment services prohibited. Financial institutions cannot provide crypto services.',
        taxes: 'N/A - all crypto activities illegal',
        kyc: 'N/A - all crypto activities illegal',
        licenses: 'No licenses available. All crypto business activities prohibited.',
        penalties: 'Criminal charges for crypto activities. Asset forfeiture. Up to 10 years imprisonment.',
        updates: 'Recent: Digital Yuan (CBDC) expansion. Continued crackdown on crypto activities. Cross-border enforcement.'
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
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cryptocurrency Regulatory Compliance Guide 2025 - Country-Specific Laws</title>
        <meta name="description" content="Complete guide to cryptocurrency regulations worldwide. Learn the legal status, tax implications, and compliance requirements for crypto in your country." />
        <meta name="keywords" content="cryptocurrency regulation, crypto laws, bitcoin legal status, crypto taxes, compliance guide" />
        <meta property="og:title" content="Crypto Regulatory Compliance Guide 2025" />
        <meta property="og:description" content="Navigate crypto regulations worldwide with our comprehensive compliance guide covering legal status, taxes, and requirements by country." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cryptostarterguide.com/regulatory-compliance" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Scale className="h-12 w-12 text-purple-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Regulatory Compliance</h1>
            </div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Navigate the complex world of cryptocurrency regulations with confidence. 
              Get country-specific guidance on legal status, tax obligations, and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Country Selection Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-purple-600" />
                Select Your Country
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
              <div className="bg-white rounded-xl shadow-lg p-8">
                {/* Country Header */}
                <div className="mb-8">
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

                {/* Detailed Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-blue-600" />
                        Legal Status
                      </h3>
                      <p className="text-gray-700">{selectedCountryData.details.legal}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-green-600" />
                        Tax Implications
                      </h3>
                      <p className="text-gray-700">{selectedCountryData.details.taxes}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">KYC Requirements</h3>
                      <p className="text-gray-700">{selectedCountryData.details.kyc}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Recommended Exchanges</h3>
                      <div className="space-y-2">

                  {selectedCountryData.details.licenses && (
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <Scale className="h-5 w-5 mr-2 text-purple-600" />
                        Licensing Requirements
                      </h3>
                      <p className="text-gray-700">{selectedCountryData.details.licenses}</p>
                    </div>
                  )}
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

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Key Restrictions</h3>
                      <p className="text-gray-700">{selectedCountryData.details.restrictions}</p>
                    </div>

                    {selectedCountryData.details.penalties && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                          <AlertTriangle className="h-5 w-5 mr-2" />
                          Penalties & Enforcement
                        </h3>
                        <p className="text-red-700">{selectedCountryData.details.penalties}</p>
                      </div>
                    )}

                    {selectedCountryData.details.updates && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-blue-800 mb-3">📅 Recent Updates</h3>
                        <p className="text-blue-700">{selectedCountryData.details.updates}</p>
                      </div>
                    )}

                    {selectedCountryData.status === 'regulated' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-green-800 mb-2">✅ Compliance Tips</h3>
                        <ul className="text-green-700 space-y-1 text-sm">
                          <li>• Keep detailed records of all transactions</li>
                          <li>• Use regulated exchanges with proper licensing</li>
                          <li>• Report crypto gains according to local tax laws</li>
                          <li>• Complete KYC verification on all platforms</li>
                          <li>• Stay updated on regulatory changes</li>
                          <li>• Consider professional tax advice for large holdings</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/tools"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                  >
                    View Recommended Exchanges
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                  <a
                    href="/learn"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                  >
                    Learn Crypto Basics
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                  <a
                    href="/regulatory-compliance"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Globe className="h-16 w-16 text-purple-400 mx-auto mb-6" />
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
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
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
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
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