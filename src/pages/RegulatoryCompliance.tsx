import React, { useState } from 'react';
import { Globe, Shield, AlertTriangle, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

const RegulatoryCompliance = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countries = [
    {
      id: 'usa',
      name: 'United States',
      flag: '🇺🇸',
      status: 'Complex',
      statusColor: 'yellow',
      summary: 'State-by-state regulations, federal oversight by multiple agencies'
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      status: 'Regulated',
      statusColor: 'green',
      summary: 'FCA regulated, clear guidelines for exchanges and businesses'
    },
    {
      id: 'eu',
      name: 'European Union',
      flag: '🇪🇺',
      status: 'MiCA Framework',
      statusColor: 'green',
      summary: 'Comprehensive MiCA regulation provides EU-wide clarity'
    },
    {
      id: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      status: 'Provincial',
      statusColor: 'yellow',
      summary: 'Provincial securities regulators oversee crypto activities'
    },
    {
      id: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      status: 'Regulated',
      statusColor: 'green',
      summary: 'ASIC oversight, exchanges must be licensed'
    },
    {
      id: 'singapore',
      name: 'Singapore',
      flag: '🇸🇬',
      status: 'Licensed',
      statusColor: 'green',
      summary: 'MAS licensing required, clear regulatory framework'
    },
    {
      id: 'japan',
      name: 'Japan',
      flag: '🇯🇵',
      status: 'Licensed',
      statusColor: 'green',
      summary: 'FSA licensing, well-established crypto regulations'
    },
    {
      id: 'india',
      name: 'India',
      flag: '🇮🇳',
      status: 'Taxed',
      statusColor: 'yellow',
      summary: '30% tax on crypto gains, TDS requirements'
    }
  ];

  const getStatusColor = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      red: 'bg-red-100 text-red-800'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const CountryButton = ({ country }: { country: any }) => (
    <button
      onClick={() => setSelectedCountry(selectedCountry === country.id ? null : country.id)}
      className={`w-full text-left p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
        selectedCountry === country.id
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{country.flag}</span>
          <h3 className="text-lg font-semibold text-gray-900">{country.name}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(country.statusColor)}`}>
          {country.status}
        </span>
      </div>
      <p className="text-gray-600 text-sm">{country.summary}</p>
    </button>
  );

  const USAContent = () => (
    <div className="bg-gray-50 rounded-xl p-8">
      <div className="flex items-center mb-6">
        <span className="text-3xl mr-4">🇺🇸</span>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">United States Crypto Regulations</h2>
          <p className="text-gray-600">Complex federal and state oversight</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">✅ What's Legal</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Buying and holding cryptocurrency</span>
            </li>
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Trading on registered exchanges</span>
            </li>
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Using crypto for payments</span>
            </li>
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Mining cryptocurrency</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Restrictions</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Must report gains for taxes</span>
            </li>
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Some states restrict certain activities</span>
            </li>
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Unregistered securities may be illegal</span>
            </li>
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>KYC/AML requirements for exchanges</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">🏛️ Regulatory Bodies</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900">SEC</h4>
            <p className="text-sm text-gray-600">Securities and Exchange Commission - oversees crypto securities</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">CFTC</h4>
            <p className="text-sm text-gray-600">Commodity Futures Trading Commission - regulates crypto derivatives</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">FinCEN</h4>
            <p className="text-sm text-gray-600">Financial Crimes Enforcement Network - AML/KYC requirements</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-4">🏆 Recommended Exchanges for US Users</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Coinbase</h4>
              <p className="text-sm text-gray-600">Fully regulated, publicly traded, best for beginners</p>
            </div>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </a>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Kraken</h4>
              <p className="text-sm text-gray-600">Well-regulated, advanced trading features</p>
            </div>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const UKContent = () => (
    <div className="bg-gray-50 rounded-xl p-8">
      <div className="flex items-center mb-6">
        <span className="text-3xl mr-4">🇬🇧</span>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">United Kingdom Crypto Regulations</h2>
          <p className="text-gray-600">FCA regulated with clear guidelines</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">✅ What's Legal</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Buying and holding cryptocurrency</span>
            </li>
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Trading on FCA-registered exchanges</span>
            </li>
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Using crypto for payments</span>
            </li>
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Mining cryptocurrency</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Requirements</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Capital gains tax on profits</span>
            </li>
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Use FCA-registered exchanges</span>
            </li>
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Crypto advertising restrictions</span>
            </li>
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Enhanced consumer warnings</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-4">🏆 Recommended Exchanges for UK Users</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Coinbase</h4>
              <p className="text-sm text-gray-600">FCA registered, user-friendly, great for beginners</p>
            </div>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </a>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Kraken</h4>
              <p className="text-sm text-gray-600">FCA registered, advanced features, low fees</p>
            </div>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const EUContent = () => (
    <div className="bg-gray-50 rounded-xl p-8">
      <div className="flex items-center mb-6">
        <span className="text-3xl mr-4">🇪🇺</span>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">European Union Crypto Regulations</h2>
          <p className="text-gray-600">MiCA framework provides comprehensive regulation</p>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-bold text-green-800 mb-4">📋 MiCA Regulation (Markets in Crypto-Assets)</h3>
        <p className="text-green-700 mb-4">
          The EU's comprehensive crypto regulation framework that came into effect in 2024, providing clear rules across all member states.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center text-green-700">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Unified rules across all EU countries</span>
          </li>
          <li className="flex items-center text-green-700">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Consumer protection requirements</span>
          </li>
          <li className="flex items-center text-green-700">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Stablecoin regulations</span>
          </li>
          <li className="flex items-center text-green-700">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Exchange licensing requirements</span>
          </li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">✅ What's Legal</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Buying and holding cryptocurrency</span>
            </li>
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Trading on licensed exchanges</span>
            </li>
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Using crypto for payments</span>
            </li>
            <li className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Mining cryptocurrency</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Requirements</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Tax obligations vary by country</span>
            </li>
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Use MiCA-compliant exchanges</span>
            </li>
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Enhanced disclosure requirements</span>
            </li>
            <li className="flex items-center text-yellow-700">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span>Environmental sustainability rules</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-4">🏆 Recommended Exchanges for EU Users</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Coinbase</h4>
              <p className="text-sm text-gray-600">MiCA compliant, available across EU, beginner-friendly</p>
            </div>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </a>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Kraken</h4>
              <p className="text-sm text-gray-600">MiCA compliant, advanced trading, strong security</p>
            </div>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCountryContent = () => {
    switch (selectedCountry) {
      case 'usa':
        return <USAContent />;
      case 'uk':
        return <UKContent />;
      case 'eu':
        return <EUContent />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Globe className="h-16 w-16 mx-auto mb-6 text-purple-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cryptocurrency Regulatory Compliance</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Navigate crypto regulations with confidence. Get country-specific compliance guides, 
              legal status updates, and recommended exchanges for major markets worldwide.
            </p>
            <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 inline-block">
              <p className="text-purple-100 text-sm">
                <Shield className="h-4 w-4 inline mr-2" />
                Updated January 2025 • Legal information for educational purposes only
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Global Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Global Regulatory Landscape</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regulated Markets</h3>
              <p className="text-gray-600 mb-4">Clear legal frameworks with licensed exchanges and consumer protections</p>
              <div className="text-sm text-gray-500">
                UK, EU, Japan, Singapore, Australia
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complex Regulations</h3>
              <p className="text-gray-600 mb-4">Multiple regulatory bodies or evolving frameworks requiring careful navigation</p>
              <div className="text-sm text-gray-500">
                USA, Canada, India, South Korea
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Restricted/Banned</h3>
              <p className="text-gray-600 mb-4">Significant restrictions or outright bans on cryptocurrency activities</p>
              <div className="text-sm text-gray-500">
                China, Bangladesh, Nepal, Algeria
              </div>
            </div>
          </div>
        </section>

        {/* Country Selection */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Select Your Country</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Get detailed regulatory information, legal status, tax implications, and recommended exchanges for your country.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country) => (
              <CountryButton key={country.id} country={country} />
            ))}
          </div>
        </section>

        {/* Country-Specific Content */}
        {selectedCountry && (
          <section className="mb-16">
            {renderCountryContent()}
          </section>
        )}

        {/* General Compliance Tips */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Universal Compliance Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">📋 Record Keeping</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Keep detailed transaction records</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Document purchase prices and dates</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Track transfers between wallets</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Use crypto tax software</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">🏛️ Exchange Selection</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Use regulated exchanges in your jurisdiction</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Verify licensing and compliance</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Complete KYC verification</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Understand reporting requirements</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">Legal Disclaimer</h3>
                <p className="text-yellow-700 text-sm">
                  This information is for educational purposes only and does not constitute legal or financial advice. 
                  Cryptocurrency regulations change frequently and vary by jurisdiction. Always consult with qualified 
                  legal and tax professionals in your country before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Tools */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Compliant with the Right Tools</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Use professional-grade tools to track your crypto transactions and stay compliant with tax regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              CoinLedger Tax Software
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
            <a
              href="#"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center justify-center"
            >
              View All Compliance Tools
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegulatoryCompliance;