import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Shield, CheckCircle, AlertTriangle, ExternalLink, FileText, Users, TrendingUp, ArrowLeft, XCircle } from 'lucide-react';

const RegulatoryCompliance = () => {
  const [selectedCountry, setSelectedCountry] = useState('australia');

  const countries = [
    { id: 'australia', name: 'Australia', flag: '🇦🇺', users: '1.2M+', status: 'Legal & Regulated' },
    { id: 'usa', name: 'United States', flag: '🇺🇸', users: '52M+', status: 'Legal & Regulated' },
    { id: 'india', name: 'India', flag: '🇮🇳', users: '100M+', status: 'Legal with Tax' },
    { id: 'pakistan', name: 'Pakistan', flag: '🇵🇰', users: '4.1M+', status: 'Restricted' },
    { id: 'vietnam', name: 'Vietnam', flag: '🇻🇳', users: '16.1M+', status: 'Restricted' },
    { id: 'brazil', name: 'Brazil', flag: '🇧🇷', users: '10.4M+', status: 'Legal & Regulated' },
    { id: 'nigeria', name: 'Nigeria', flag: '🇳🇬', users: '22.3M+', status: 'Restricted Banking' },
    { id: 'indonesia', name: 'Indonesia', flag: '🇮🇩', users: '11.5M+', status: 'Legal as Commodity' },
    { id: 'ukraine', name: 'Ukraine', flag: '🇺🇦', users: '5.2M+', status: 'Legal & Regulated' },
    { id: 'philippines', name: 'Philippines', flag: '🇵🇭', users: '4.2M+', status: 'Legal & Regulated' },
    { id: 'russia', name: 'Russia', flag: '🇷🇺', users: '17.1M+', status: 'Restricted' }
  ];

  const getStatusColor = (status: string) => {
    if (status.includes('Legal & Regulated')) return 'text-green-600 bg-green-100';
    if (status.includes('Legal')) return 'text-blue-600 bg-blue-100';
    if (status.includes('Restricted')) return 'text-red-600 bg-red-100';
    return 'text-gray-600 bg-gray-100';
  };

  const CountryCard = ({ country }: { country: any }) => (
    <button
      onClick={() => setSelectedCountry(country.id)}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all hover:shadow-lg ${
        selectedCountry === country.id
          ? 'border-blue-500 bg-blue-50 shadow-lg'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{country.flag}</span>
          <h3 className="font-bold text-gray-900">{country.name}</h3>
        </div>
        {selectedCountry === country.id && (
          <CheckCircle className="h-5 w-5 text-blue-600" />
        )}
      </div>
        {/* Brazil Guide */}
        {selectedCountry === 'brazil' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🇧🇷</span>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">CryptoStarted Guide: How to Begin With Crypto in Brazil (2025)</h1>
                <p className="text-gray-600 mt-2">Ready to buy your first cryptocurrency in Brazil? CryptoStarted Guide keeps it simple—covering local laws, top exchanges, essential buying/selling steps, and reliable ways to convert between BRL and crypto.</p>
              </div>
            </div>

            {/* Legal Status */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Is Crypto Legal in Brazil?</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-green-800 font-semibold mb-2">Cryptocurrency is fully legal in Brazil</p>
                    <p className="text-green-700">
                      Regulated framework under Federal Law No. 14.478/2022. Key agencies—Banco Central do Brasil (BCB) and CVM (Securities Commission)—require exchanges to be registered, follow strict AML/KYC compliance, and maintain transparent transaction reporting. New comprehensive rules covering licensing and asset tokenization are set to roll out through 2025–2026.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started: Simple Steps for Beginners</h2>
              <div className="space-y-4">
                {[
                  'Pick a trusted Brazilian exchange: See the list below for the best options.',
                  'Verify your account (KYC): Upload CPF (tax ID), photo ID, proof of address.',
                  'Deposit BRL: Use Pix (instant payment system), bank transfer, boleto, debit/credit card.',
                  'Buy crypto: Instantly purchase Bitcoin, Ethereum, stablecoins, or other tokens.',
                  'Secure your funds: Use strong passwords, activate two-factor authentication, and transfer large holdings to personal wallets for added safety.'
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Local Exchanges */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Crypto Exchanges for Brazil (2025)</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Top Local Centralized Exchanges</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Features</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">BRL Deposit</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">KYC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { name: 'Mercado Bitcoin', features: '300+ coins, asset tokenization, trusted & regulated', brl: 'Yes', kyc: 'CPF' },
                        { name: 'Foxbit', features: '100+ coins, low fees, Pix, simple app', brl: 'Yes', kyc: 'CPF' },
                        { name: 'NovaDAX', features: '500+ coins, competitive fees, Pix & bank transfer', brl: 'Yes', kyc: 'CPF' },
                        { name: 'Bitso', features: 'Pan-Latin platform, low fees, deep liquidity', brl: 'Yes', kyc: 'CPF' },
                        { name: 'Binance Brazil', features: '400+ coins, lowest spot fees, global liquidity', brl: 'Yes', kyc: 'Photo ID' }
                      ].map((exchange, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 font-medium text-gray-900">{exchange.name}</td>
                          <td className="px-6 py-4 text-gray-600">{exchange.features}</td>
                          <td className="px-6 py-4 text-green-600 font-medium">{exchange.brl}</td>
                          <td className="px-6 py-4 text-gray-600">{exchange.kyc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Note:</strong> Pix, Brazil's instant payment system, is supported at all exchanges for fast deposits and withdrawals.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Leading Global Exchanges for Brazilians</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Market Reach</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">BRL On/Off Ramp</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">KYC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { name: 'Binance', reach: 'Largest global exchange', ramp: 'Yes (Pix, bank, P2P)', kyc: 'Photo ID' },
                        { name: 'Bitso', reach: 'Latin America-wide, deep liquidity', ramp: 'Yes (Pix, bank)', kyc: 'CPF' },
                        { name: 'Bybit', reach: 'Global, powerful tools', ramp: 'Yes (P2P, stablecoins)', kyc: 'Photo ID' }
                      ].map((exchange, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 font-medium text-gray-900">{exchange.name}</td>
                          <td className="px-6 py-4 text-gray-600">{exchange.reach}</td>
                          <td className="px-6 py-4 text-green-600 font-medium">{exchange.ramp}</td>
                          <td className="px-6 py-4 text-gray-600">{exchange.kyc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* On/Off Ramps */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">On-Ramp & Off-Ramp: Move Between BRL and Crypto</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-3">What Are On/Off Ramps?</h3>
                <ul className="text-blue-800 space-y-2">
                  <li><strong>On-ramp:</strong> Deposit BRL to buy crypto—using Pix, bank, or third-party methods.</li>
                  <li><strong>Off-ramp:</strong> Sell crypto for BRL and withdraw instantly to your bank or through Pix.</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Best On-Ramp Options</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Local exchanges:</strong> Mercado Bitcoin, Foxbit, NovaDAX, Bitso, and Binance Brazil all offer Pix, bank transfer, and boleto for BRL deposits.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Global access:</strong> Binance and Bitso allow BRL on-ramps through their Brazilian platforms, supporting Pix and P2P options.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Fiat-to-crypto platforms:</strong> OneSafe and Onramper streamline BRL-to-crypto onboarding.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Best Off-Ramp Methods</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Local exchanges:</strong> Sell crypto for BRL and withdraw to bank or Pix—usually near-instant, with low fees.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Global exchanges:</strong> Binance Brazil and Bitso offer P2P and Pix off-ramps for crypto sales.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Dedicated off-ramp services:</strong> OneSafe accelerates crypto-to-BRL payout, reducing fees and delays.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">On/Off Ramp FAQs</h2>
              <div className="space-y-6">
                {[
                  { q: 'KYC required?', a: 'Yes—every reputable ramp asks for CPF (Brazilian tax ID), photo ID, and proof of address.' },
                  { q: 'Limits?', a: 'Deposit/withdrawal limits vary by platform, but Pix often allows very high caps for verified users.' },
                  { q: 'Tax obligations?', a: 'Brazilians must report all crypto profits; currently, capital gains and regular income apply, plus annual declarations for transactions exceeding R$35,000.' },
                  { q: 'Transfer speed?', a: 'Pix enables almost instant deposits/withdrawals, and most exchanges process on/off ramps within 1–2 business days.' }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tax & Compliance */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax & Compliance Essentials</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Crypto profits are subject to progressive tax rates in Brazil; consult a registered tax advisor for current details.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>All transactions above R$35,000/year must be declared using Receita Federal forms.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Only use registered, CVM/BCB-compliant exchanges and never share personal keys or credentials.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Regulation is rapidly evolving; bookmark CryptoStarted Guide for news and the latest regulatory updates.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Checklist */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Beginner Checklist</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <ul className="space-y-3">
                  {[
                    'Register with a leading, KYC-compliant exchange (Mercado Bitcoin, Foxbit, etc.)',
                    'Prepare your CPF, photo ID, and proof of address',
                    'Compare fees, coins, on/off ramp methods, and security features',
                    'Activate 2FA, use strong passwords, and move larger holdings to personal wallets',
                    'Stay updated at CryptoStarted Guide for fresh regulatory news, scams, and best exchange reviews'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-green-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Back Button */}
            <button
              onClick={() => setSelectedCountry(null)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Country Selection
            </button>
          </div>
        )}

        {/* Brazil Guide */}
        {selectedCountry === 'brazil' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🇧🇷</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Brazil Crypto Guide</h2>
                <p className="text-gray-600">Complete guide to cryptocurrency in Brazil</p>
              </div>
            </div>

            {/* Legal Status */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Is Crypto Legal in Brazil?</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-green-800 font-semibold mb-2">Fully Legal & Regulated</p>
                    <p className="text-green-700">
                      Cryptocurrency is fully legal in Brazil, with a regulated framework developed under Federal Law No. 14.478/2022. 
                      Key agencies—including Banco Central do Brasil (BCB) and CVM (Securities Commission)—require exchanges and service 
                      providers to be registered, follow strict AML/KYC compliance, and maintain transparent transaction reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Started: Simple Steps for Beginners</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pick a trusted Brazilian exchange</h4>
                    <p className="text-gray-600">See the list below for the best options.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Verify your account (KYC)</h4>
                    <p className="text-gray-600">Upload CPF (tax ID), photo ID, proof of address.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Deposit BRL</h4>
                    <p className="text-gray-600">Use Pix (instant payment system), bank transfer, boleto, debit/credit card.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Buy crypto</h4>
                    <p className="text-gray-600">Instantly purchase Bitcoin, Ethereum, stablecoins, or other tokens.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure your funds</h4>
                    <p className="text-gray-600">Use strong passwords, activate two-factor authentication, and transfer large holdings to personal wallets.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exchanges */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Crypto Exchanges for Brazil (2025)</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Top Local Centralized Exchanges</h4>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Features</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">BRL Deposit</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">KYC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">Mercado Bitcoin</td>
                        <td className="px-4 py-3 text-sm">300+ coins, asset tokenization, trusted & regulated</td>
                        <td className="px-4 py-3 text-green-600 font-medium">Yes</td>
                        <td className="px-4 py-3 text-sm">CPF</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Foxbit</td>
                        <td className="px-4 py-3 text-sm">100+ coins, low fees, Pix, simple app</td>
                        <td className="px-4 py-3 text-green-600 font-medium">Yes</td>
                        <td className="px-4 py-3 text-sm">CPF</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">NovaDAX</td>
                        <td className="px-4 py-3 text-sm">500+ coins, competitive fees, Pix & bank transfer</td>
                        <td className="px-4 py-3 text-green-600 font-medium">Yes</td>
                        <td className="px-4 py-3 text-sm">CPF</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Bitso</td>
                        <td className="px-4 py-3 text-sm">Pan-Latin platform, low fees, deep liquidity</td>
                        <td className="px-4 py-3 text-green-600 font-medium">Yes</td>
                        <td className="px-4 py-3 text-sm">CPF</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Binance Brazil</td>
                        <td className="px-4 py-3 text-sm">400+ coins, lowest spot fees, global liquidity</td>
                        <td className="px-4 py-3 text-green-600 font-medium">Yes</td>
                        <td className="px-4 py-3 text-sm">Photo ID</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Note:</strong> Pix, Brazil's instant payment system, is supported at all exchanges for fast deposits and withdrawals.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Leading Global Exchanges for Brazilians</h4>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Market Reach</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">BRL On/Off Ramp</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">KYC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">Binance</td>
                        <td className="px-4 py-3 text-sm">Largest global exchange</td>
                        <td className="px-4 py-3 text-green-600 font-medium">Yes (Pix, bank, P2P)</td>
                        <td className="px-4 py-3 text-sm">Photo ID</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Bitso</td>
                        <td className="px-4 py-3 text-sm">Latin America-wide, deep liquidity</td>
                        <td className="px-4 py-3 text-green-600 font-medium">Yes (Pix, bank)</td>
                        <td className="px-4 py-3 text-sm">CPF</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Bybit</td>
                        <td className="px-4 py-3 text-sm">Global, powerful tools</td>
                        <td className="px-4 py-3 text-green-600 font-medium">Yes (P2P, stablecoins)</td>
                        <td className="px-4 py-3 text-sm">Photo ID</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* On/Off Ramps */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Ramp & Off-Ramp: Move Between BRL and Crypto</h3>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-800 mb-2">What Are On/Off Ramps?</h4>
                <ul className="text-blue-700 space-y-1">
                  <li><strong>On-ramp:</strong> Deposit BRL to buy crypto—using Pix, bank, or third-party methods.</li>
                  <li><strong>Off-ramp:</strong> Sell crypto for BRL and withdraw instantly to your bank or through Pix.</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Best On-Ramp Options</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Local exchanges:</strong> Mercado Bitcoin, Foxbit, NovaDAX, Bitso, and Binance Brazil all offer Pix, bank transfer, and boleto for BRL deposits.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Global access:</strong> Binance and Bitso allow BRL on-ramps through their Brazilian platforms, supporting Pix and P2P options.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Fiat-to-crypto platforms:</strong> OneSafe and Onramper streamline BRL-to-crypto onboarding.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Best Off-Ramp Methods</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Local exchanges:</strong> Sell crypto for BRL and withdraw to bank or Pix—usually near-instant, with low fees.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Global exchanges:</strong> Binance Brazil and Bitso offer P2P and Pix off-ramps for crypto sales.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Dedicated off-ramp services:</strong> OneSafe accelerates crypto-to-BRL payout, reducing fees and delays.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tax & Compliance */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tax & Compliance Essentials</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Crypto profits are subject to progressive tax rates in Brazil; consult a registered tax advisor for current details.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>All transactions above R$35,000/year must be declared using Receita Federal forms.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Only use registered, CVM/BCB-compliant exchanges and never share personal keys or credentials.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Regulation is rapidly evolving; bookmark CryptoStarted Guide for news and the latest regulatory updates.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Checklist */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">Quick Beginner Checklist</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Register with a leading, KYC-compliant exchange (Mercado Bitcoin, Foxbit, etc.)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Prepare your CPF, photo ID, and proof of address</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Compare fees, coins, on/off ramp methods, and security features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Activate 2FA, use strong passwords, and move larger holdings to personal wallets</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Stay updated at CryptoStarted Guide for fresh regulatory news, scams, and best exchange reviews</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Ukraine Guide */}
        {selectedCountry === 'ukraine' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-8">
              <span className="text-6xl mr-4">🇺🇦</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">CryptoStarted Guide: How to Begin With Crypto in Ukraine (2025)</h2>
                <p className="text-gray-600 mt-2">Interested in crypto in Ukraine? CryptoStarted Guide gives all the essentials—covering evolving laws, top exchanges, and fast on/off ramps for the Ukrainian hryvnia (UAH) and digital assets.</p>
              </div>
            </div>

            {/* Legal Status */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Is Crypto Legal in Ukraine?</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-green-800 font-semibold mb-2">Yes—crypto is legal and regulated in Ukraine</p>
                    <p className="text-green-700">The foundational "On Virtual Assets" law has passed, yet full licensing and tax rules await final amendments to the Tax Code. The National Securities and Stock Market Commission (NSSMC) is setting rules to align with the EU's MiCA framework.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-yellow-800 font-semibold mb-2">Tax Framework in Transition</p>
                    <p className="text-yellow-700">A key bill passed first reading, proposing 18% income tax and 5% military tax on digital assets. Until the tax law is enacted, crypto service providers operate under basic legalization.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Getting Started: Steps for Beginners</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Select a top exchange</h4>
                      <p className="text-gray-600 text-sm">Find choices below supporting UAH and reliable onboarding</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Complete KYC</h4>
                      <p className="text-gray-600 text-sm">Upload passport/ID, proof of address, and often a selfie for verification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Deposit UAH</h4>
                      <p className="text-gray-600 text-sm">Use bank transfer, cards (Visa/Mastercard), SEPA, Apple Pay, Google Pay, or P2P platforms</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Buy crypto</h4>
                      <p className="text-gray-600 text-sm">Instantly purchase Bitcoin, Ethereum, stablecoins, or altcoins</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Secure your funds</h4>
                      <p className="text-gray-600 text-sm">Enable two-factor authentication, use strong passwords, and move large sums to secure wallets</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Exchanges */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Crypto Exchanges for Ukraine (2025)</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Exchange</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">UAH Support</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">KYC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Bybit</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Ukrainian interface, live local support, 1,800+ coins, low fees</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-medium">Bank, cards, Apple/Google Pay, SEPA</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Passport/ID</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Binance</td>
                      <td className="px-6 py-4 text-sm text-gray-600">High liquidity, beginner-friendly, P2P support</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-medium">Visa/Mastercard/P2P</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Passport/ID</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">OKX</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Advanced trading, Web3 integration</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-medium">Bank transfer</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Passport/ID</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">WhiteBIT</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Eastern Europe leader, fast UAH ramps, lending</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-medium">Bank, SEPA, P2P</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Passport/ID</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">CEX.IO</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Simple onboarding, high security, staking/lending</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-medium">Bank, credit/debit, P2P</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Passport/ID</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* On/Off Ramps */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">On-Ramp & Off-Ramp: Move Between UAH and Crypto</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-800 mb-4">Best On-Ramp Options</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-green-700"><strong>Centralized exchanges:</strong> Bybit, Binance, OKX, WhiteBIT, CEX.IO via bank, cards, Apple/Google Pay, SEPA</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-green-700"><strong>P2P platforms:</strong> Buy crypto direct from verified sellers in UAH</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-green-700"><strong>Fiat-to-crypto services:</strong> Instant UAH-to-crypto via APIs</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-blue-800 mb-4">Best Off-Ramp Methods</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-blue-700"><strong>Sell on exchange:</strong> Convert crypto to UAH, withdraw to bank/card</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-blue-700"><strong>P2P market:</strong> Sell crypto for UAH on local platforms</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-blue-700"><strong>Dedicated services:</strong> Platforms with strong reviews for larger transactions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">On/Off Ramp FAQs</h3>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Is KYC required?</h4>
                  <p className="text-gray-600">Yes—full identity, address, and facial verification are mandatory for legal ramps.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Are there limits?</h4>
                  <p className="text-gray-600">Daily and monthly deposit/withdrawal limits depend on verification level and platform.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Are transactions taxable?</h4>
                  <p className="text-gray-600">An 18% tax plus 5% military levy applies to profits—pending enactment. Keep detailed logs of all trades, conversion rates, and withdrawals for annual filing.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">How fast are transfers?</h4>
                  <p className="text-gray-600">Bank/card/P2P methods are usually instant or processed within 24 hours for verified users.</p>
                </div>
              </div>
            </section>

            {/* Tax & Compliance */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tax & Compliance Essentials</h3>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-yellow-800">Crypto is currently taxed at 18% (income) plus a 5% military levy on profits—pending enactment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Exemptions exist for swaps between virtual assets, small sales, and some promotional earnings</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">All major exchanges require strong AML/KYC per Ukrainian law and EU MiCA alignment</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Only use registered, EU-aligned platforms; beware scams and OTC risk</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Quick Checklist */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Beginner Checklist</h3>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-blue-800">Register with a top Ukrainian exchange (Bybit, Binance, OKX, WhiteBIT, CEX.IO)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-blue-800">Prepare passport/ID, proof of address, and payment method for onboarding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-blue-800">Compare fees, available coins, and deposit/withdrawal options before trading</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-blue-800">Enable enhanced security and transfer large balances to secure external wallets</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-blue-800">Bookmark CryptoStarted Guide for breaking news, regulation, and trusted exchange rankings</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* Indonesia Guide */}
        {selectedCountry === 'indonesia' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🇮🇩</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Indonesia Crypto Guide 2025</h2>
                <p className="text-gray-600">Complete guide to cryptocurrency in Indonesia</p>
              </div>
            </div>

            {/* Legal Status */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Is Crypto Legal in Indonesia?</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-green-800 font-semibold mb-2">Legal as Digital Financial Asset</p>
                    <p className="text-green-700">
                      Cryptocurrency is legal to trade in Indonesia as a regulated digital financial asset, but cannot be used for payments. 
                      Oversight shifted from BAPPEBTI to the Financial Services Authority (OJK) in early 2025.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Regulatory Authority</h4>
                  <p className="text-blue-800">Financial Services Authority (OJK)</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Key Requirement</h4>
                  <p className="text-yellow-800">All exchanges must be OJK-licensed</p>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Started: Steps for Beginners</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Register with an OJK-licensed exchange</h4>
                    <p className="text-gray-600 text-sm">Pick from the options below for IDR support and security</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete KYC</h4>
                    <p className="text-gray-600 text-sm">Provide your KTP (local ID), selfie, and proof of address</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Deposit IDR</h4>
                    <p className="text-gray-600 text-sm">Use bank transfer (Mandiri, BRI, BCA), OVO, GoPay, Dana, ShopeePay</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Buy crypto</h4>
                    <p className="text-gray-600 text-sm">Purchase Bitcoin, Ethereum, stablecoins, or tokens from the whitelist</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stay secure</h4>
                    <p className="text-gray-600 text-sm">Activate 2FA and consider moving large holdings to personal wallets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Exchanges */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Top OJK-Licensed Centralized Exchanges</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Features</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">IDR Support</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">KYC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium">Indodax</td>
                      <td className="px-4 py-3 text-sm">Indonesia's largest, 200+ tokens, deep liquidity</td>
                      <td className="px-4 py-3 text-sm text-green-600">✓ Yes</td>
                      <td className="px-4 py-3 text-sm">KTP, selfie</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Tokocrypto</td>
                      <td className="px-4 py-3 text-sm">Binance-backed, spot/futures, T-Hub education</td>
                      <td className="px-4 py-3 text-sm text-green-600">✓ Yes</td>
                      <td className="px-4 py-3 text-sm">KTP, selfie</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Pintu</td>
                      <td className="px-4 py-3 text-sm">Mobile-first, simple interface, trending coins</td>
                      <td className="px-4 py-3 text-sm text-green-600">✓ Yes</td>
                      <td className="px-4 py-3 text-sm">KTP, selfie</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Triv</td>
                      <td className="px-4 py-3 text-sm">Real-time fiat/crypto, many deposit options</td>
                      <td className="px-4 py-3 text-sm text-green-600">✓ Yes</td>
                      <td className="px-4 py-3 text-sm">KTP, selfie</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Bittime</td>
                      <td className="px-4 py-3 text-sm">Advanced trading, staking, competitive fees</td>
                      <td className="px-4 py-3 text-sm text-green-600">✓ Yes</td>
                      <td className="px-4 py-3 text-sm">KTP, selfie</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Upbit Indonesia</td>
                      <td className="px-4 py-3 text-sm">Korean partner, mobile/web, strong compliance</td>
                      <td className="px-4 py-3 text-sm text-green-600">✓ Yes</td>
                      <td className="px-4 py-3 text-sm">KTP, selfie</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Global Exchanges */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Global Exchanges Accessible from Indonesia</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Features</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">IDR Support</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">KYC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium">Binance</td>
                      <td className="px-4 py-3 text-sm">Global leader, supports Tokocrypto, wide coin range</td>
                      <td className="px-4 py-3 text-sm text-green-600">✓ Via Tokocrypto, P2P</td>
                      <td className="px-4 py-3 text-sm">Passport</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Bybit</td>
                      <td className="px-4 py-3 text-sm">Active trader platform, IDR via P2P</td>
                      <td className="px-4 py-3 text-sm text-green-600">✓ P2P</td>
                      <td className="px-4 py-3 text-sm">Passport</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">MEXC</td>
                      <td className="px-4 py-3 text-sm">Thousands of tokens, low fees, deeper liquidity</td>
                      <td className="px-4 py-3 text-sm text-green-600">✓ P2P, partners</td>
                      <td className="px-4 py-3 text-sm">Passport</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">OKX</td>
                      <td className="px-4 py-3 text-sm">Advanced tools, fiat ramps, robust offering</td>
                      <td className="px-4 py-3 text-sm text-green-600">✓ Via local rails</td>
                      <td className="px-4 py-3 text-sm">Passport</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* On/Off Ramps */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">On-Ramp & Off-Ramp: Move Between IDR and Crypto</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-900 mb-4">Best On-Ramp Methods</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">Local exchanges:</span>
                        <p className="text-sm text-green-700">Bank transfer, OVO, GoPay, Dana, ShopeePay</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">Integrated platforms:</span>
                        <p className="text-sm text-green-700">Durianpay, Alchemy Pay, Onramper</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">P2P:</span>
                        <p className="text-sm text-green-700">Binance, Bybit, OKX verified sellers</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">Best Off-Ramp Methods</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">Local exchanges:</span>
                        <p className="text-sm text-blue-700">Sell crypto for IDR, withdraw to bank/e-wallet</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">Integrated platforms:</span>
                        <p className="text-sm text-blue-700">Durianpay, Onramper fast conversion</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">P2P:</span>
                        <p className="text-sm text-blue-700">Sell to verified buyers on global exchanges</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tax & Compliance */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tax & Compliance Essentials</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-bold text-yellow-900 mb-3">Key Tax Information</h4>
                <ul className="space-y-2 text-yellow-800">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>0.21% final income tax on each crypto trade (auto-withheld)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Service VAT applies only to exchange/platform fees</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Mining income faces standard PPh income tax from 2026</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Only use OJK-licensed exchanges to avoid penalties</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Checklist */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Beginner Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Register with OJK-licensed exchange</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Prepare KTP, selfie, proof of address</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Use bank or e-wallet for IDR deposits</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Enable 2FA and strong passwords</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Use personal wallets for large holdings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Follow CryptoStarted Guide for updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Coming Soon Countries */}
        {selectedCountry && !['australia', 'usa', 'india', 'brazil', 'ukraine', 'indonesia'].includes(selectedCountry) && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedCountryData?.name} Guide Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              We're working on a comprehensive regulatory compliance guide for {selectedCountryData?.name}. 
              This will include local exchange recommendations, tax implications, and step-by-step instructions for getting started with crypto.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Want to be notified when it's ready?</strong> Subscribe to our newsletter to get updates on new country guides.
              </p>
            </div>
            
            {/* Country Grid */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available Country Guides</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {countries.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => setSelectedCountry(country.id)}
                    className={`p-6 rounded-xl border-2 transition-all hover:shadow-lg ${
                      ['australia', 'usa', 'india', 'brazil', 'ukraine', 'indonesia'].includes(country.id)
                        ? 'border-green-200 bg-green-50 hover:border-green-300'
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-4xl mb-3">{country.flag}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{country.name}</h3>
                    <div className="flex items-center justify-center">
                      {['australia', 'usa', 'india', 'brazil', 'ukraine', 'indonesia'].includes(country.id) ? (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Complete Guide
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">{country.users} crypto users</span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(country.status)}`}>
          {country.status}
        </span>
      </div>
    </button>
  );

  const AustraliaContent = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <span className="text-4xl mr-4">🇦🇺</span>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Australia Crypto Guide</h2>
          <p className="text-gray-600">Complete regulatory compliance guide for Australian crypto users</p>
        </div>
      </div>

      {/* Legal Status */}
      <section className="mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-green-800 mb-2">Is Crypto Legal in Australia?</h3>
              <p className="text-green-700">
                Cryptocurrency is <strong>legal in Australia</strong> and regulated as a digital asset by agencies like ASIC and AUSTRAC. 
                All exchanges operating locally must observe anti-money laundering (AML) and counter-terrorism financing rules. 
                That means identity (KYC) checks are a must before trading or holding crypto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Getting Started: Steps for Beginners</h3>
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: 'Choose a registered exchange',
              description: 'Select from those listed with AUSTRAC for safety.'
            },
            {
              step: 2,
              title: 'Complete Know-Your-Customer (KYC) checks',
              description: 'Upload a government ID and proof of address.'
            },
            {
              step: 3,
              title: 'Deposit AUD',
              description: 'Use PayID, Osko, bank transfer, debit card, or other supported payment methods.'
            },
            {
              step: 4,
              title: 'Buy crypto',
              description: 'Purchase popular coins like Bitcoin (BTC) or Ethereum (ETH) as you wish.'
            },
            {
              step: 5,
              title: 'Secure your investment',
              description: 'Use strong passwords, enable two-factor authentication, and for larger amounts move funds into a personal wallet.'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exchange Comparison */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Crypto Exchanges for Australians (2025)</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Local (AUSTRAC-Registered) Exchanges</h4>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Key Features</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">AUD Support</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'CoinSpot', features: 'Most trusted, huge range, easy for new users', aud: 'Yes' },
                  { name: 'Swyftx', features: 'Low fees, top support, beginner app', aud: 'Yes' },
                  { name: 'CoinJar', features: 'Long history, debit card, easy AUD moves', aud: 'Yes' },
                  { name: 'Independent Reserve', features: 'High security, suits businesses too', aud: 'Yes' },
                  { name: 'Digital Surge', features: 'Very low fees, Aussie-run', aud: 'Yes' }
                ].map((exchange, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900">{exchange.name}</td>
                    <td className="px-6 py-4 text-gray-600">{exchange.features}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {exchange.aud}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Major Overseas (Accessible to Aussies)</h4>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Regulation/Location</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Features & Notes</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">AUD Support</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'Binance', regulation: 'Global, top liquidity', features: 'Wide asset list, popular', aud: 'Yes' },
                  { name: 'Kraken', regulation: 'US/Globally trusted', features: 'Great security, easy to use', aud: 'Yes' },
                  { name: 'Coinbase', regulation: 'US/Global, beginner friendly', features: 'Very easy, high trust', aud: 'Yes' },
                  { name: 'OKX/Gate.io', regulation: 'Global, advanced tools', features: 'Many coins, features', aud: 'Limited' },
                  { name: 'Bybit', regulation: 'Global, advanced trading', features: 'Copy trading, derivatives', aud: 'Limited' }
                ].map((exchange, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900">{exchange.name}</td>
                    <td className="px-6 py-4 text-gray-600">{exchange.regulation}</td>
                    <td className="px-6 py-4 text-gray-600">{exchange.features}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        exchange.aud === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {exchange.aud}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Check for the latest updates as overseas access can change with local rules.
          </p>
        </div>
      </section>

      {/* On/Off Ramp Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">On-Ramp & Off-Ramp: Moving Between Crypto and AUD</h3>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-blue-800 mb-3">What is an On/Off Ramp?</h4>
          <div className="space-y-2 text-blue-700">
            <p><strong>On-ramp:</strong> Converting Australian dollars (AUD) into crypto—your gateway to crypto ownership.</p>
            <p><strong>Off-ramp:</strong> Selling crypto and withdrawing back to AUD, direct to your bank account—legally and efficiently.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Best Ways to On-Ramp in Australia</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Local exchanges (recommended for beginners)</p>
                  <p className="text-sm text-gray-600">CoinSpot, Swyftx, CoinJar, Independent Reserve, Digital Surge. All allow instant AUD deposits using PayID, Osko, bank transfer, debit card, or PayPal.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Overseas exchanges</p>
                  <p className="text-sm text-gray-600">Binance, Kraken, OKX—support AUD deposits either directly or through payment gateways.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Fiat-to-crypto services</p>
                  <p className="text-sm text-gray-600">Try RelayPay, Blacksheep, or Onramper for flexible AUD-to-crypto options that connect wallets/services.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">How to Off-Ramp Safely in Australia</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Sell on local exchange</p>
                  <p className="text-sm text-gray-600">Swap crypto to AUD and withdraw using PayID, Osko, or standard bank transfers. CoinSpot, Swyftx, CoinJar, Independent Reserve, and Digital Surge are all fast and reliable.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Global exchange options</p>
                  <p className="text-sm text-gray-600">Binance, Kraken, and OKX (when available), offer AUD withdrawals for verified accounts.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Fiat off-ramp services</p>
                  <p className="text-sm text-gray-600">RelayPay and PayBTC turn crypto back into AUD sent direct to your Australian bank. Useful if you received coins to a separate wallet or exchange.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Crypto ATMs and OTC</p>
                  <p className="text-sm text-gray-600">Some cities feature crypto ATMs and over-the-counter desks for converting larger amounts (photo ID required, fees higher).</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">On/Off Ramp FAQs</h3>
        <div className="space-y-4">
          {[
            {
              question: 'Is ID required?',
              answer: 'Yes—every reputable on/off ramp runs full KYC for legal compliance.'
            },
            {
              question: 'How quick is it?',
              answer: 'Most AUD transactions via PayID or Osko are nearly instant; some transfers take up to 24 hours.'
            },
            {
              question: 'Are there limits?',
              answer: 'Yes—varies by provider and verification, but local exchanges offer high daily limits for trusted users.'
            },
            {
              question: 'Are on/off ramps taxable?',
              answer: 'Yes—every sale or withdrawal is a taxable event. Keep clear records for the ATO each tax year.'
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tax and Compliance */}
      <section className="mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-800 mb-3">Basic Tax and Compliance Tips</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Crypto profits in Australia are subject to capital gains tax.</li>
                <li>• Maintain records for every transaction: dates, amounts, asset, AUD value.</li>
                <li>• Report all activity in your annual tax return and use ATO tools or tax professionals for help.</li>
                <li>• Always use AUSTRAC-registered services and beware of scams—stay informed via ASIC/AUSTRAC updates.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Beginner's Checklist</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <ul className="space-y-3">
            {[
              'Register with an AUSTRAC approved exchange.',
              'Prepare a government photo ID and proof of Aussie address.',
              'Understand fees and limits before trading or cashing out.',
              'Enable enhanced security and consider moving large balances off-exchange.',
              'Bookmark CryptoStarted Guide to stay up to date with evolving local laws and trusted services.'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );

  const ComingSoonContent = ({ countryName }: { countryName: string }) => (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FileText className="h-10 w-10 text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{countryName} Guide Coming Soon</h2>
      <p className="text-gray-600 mb-6">
        We're working on a comprehensive regulatory compliance guide for {countryName}. 
        This will include local exchange recommendations, tax implications, and step-by-step instructions for getting started with crypto.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm">
          <strong>Want to be notified when it's ready?</strong> Subscribe to our newsletter to get updates on new country guides.
        </p>
      </div>
    </div>
  );

  const USAContent = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <span className="text-4xl mr-4">🇺🇸</span>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">USA Crypto Guide</h2>
          <p className="text-gray-600">Complete regulatory compliance guide for US crypto users</p>
        </div>
      </div>

      {/* Legal Status */}
      <section className="mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-green-800 mb-2">Is Crypto Legal in the USA?</h3>
              <p className="text-green-700">
                Cryptocurrency is <strong>legal across the United States</strong>, though regulated by a combination of federal and state laws. 
                Key oversight comes from FinCEN, SEC, and CFTC, with major exchanges required to comply with anti-money laundering (AML) 
                and know-your-customer (KYC) regulations. Each user must verify their identity before trading or holding crypto assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Getting Started: Steps for Beginners</h3>
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: 'Choose a US-licensed exchange',
              description: 'Pick from those listed below for maximum safety and legal compliance.'
            },
            {
              step: 2,
              title: 'Complete Know-Your-Customer (KYC)',
              description: 'Upload a government ID and proof of address.'
            },
            {
              step: 3,
              title: 'Deposit USD',
              description: 'Use bank transfer, wire, debit/credit card, or PayPal.'
            },
            {
              step: 4,
              title: 'Buy crypto',
              description: 'Purchase popular assets like Bitcoin (BTC), Ethereum (ETH), or stablecoins.'
            },
            {
              step: 5,
              title: 'Secure your investment',
              description: 'Activate strong passwords, two-factor authentication, and consider moving large holdings into personal wallets.'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exchange Comparison */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Crypto Exchanges for US Users (2025)</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Major US-Licensed Centralized Exchanges</h4>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Key Features</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">USD Support</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'Coinbase', features: 'Beginner-friendly, top security, PayPal/ACH support', usd: 'Yes' },
                  { name: 'Kraken', features: 'Low fees, excellent security, easy for new users', usd: 'Yes' },
                  { name: 'Binance US', features: 'Huge liquidity, wide asset list, mobile app', usd: 'Yes' },
                  { name: 'Gemini', features: 'Regulated, high compliance, insurance options', usd: 'Yes' },
                  { name: 'Crypto.com', features: 'Versatile app, wide variety of coins, easy card purchases', usd: 'Yes' },
                  { name: 'Bitstamp', features: 'Oldest US exchange, trusted for fiat-crypto swaps', usd: 'Yes' },
                  { name: 'bitFlyer USA', features: 'Great for beginners and low fees', usd: 'Yes' },
                  { name: 'eToro', features: 'Social trading, stocks + crypto, strong compliance', usd: 'Yes' },
                  { name: 'Robinhood', features: 'Simple crypto trading, $0 commissions', usd: 'Yes' }
                ].map((exchange, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900">{exchange.name}</td>
                    <td className="px-6 py-4 text-gray-600">{exchange.features}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {exchange.usd}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            All listed above require identity verification (KYC) and offer full USD deposit/withdrawal support for new users.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Global Exchanges Accessible in the USA</h4>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Regulation/Location</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Features & Notes</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">USD Support</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'OKX', regulation: 'Global, advanced tools', features: 'Bots, many coins, robust interface', usd: 'Limited' },
                  { name: 'Bybit', regulation: 'Global, advanced trading', features: 'Derivatives, spot trading, DeFi', usd: 'Limited' },
                  { name: 'FinchTrade', regulation: 'Swiss OTC, deep liquidity', features: '200+ tokens, institutional on/off ramp', usd: 'Yes' }
                ].map((exchange, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900">{exchange.name}</td>
                    <td className="px-6 py-4 text-gray-600">{exchange.regulation}</td>
                    <td className="px-6 py-4 text-gray-600">{exchange.features}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        exchange.usd === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {exchange.usd}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Check for changing local rules and access eligibility, as overseas options can fluctuate with regulations.
          </p>
        </div>
      </section>

      {/* On/Off Ramp Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">On-Ramp & Off-Ramp: Move Between USD and Crypto</h3>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-blue-800 mb-3">What Are On-Ramps and Off-Ramps?</h4>
          <div className="space-y-2 text-blue-700">
            <p><strong>On-ramp:</strong> Exchange USD for crypto via registered platforms and services.</p>
            <p><strong>Off-ramp:</strong> Sell crypto for USD and withdraw direct to your bank account—safely and lawfully.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Best On-Ramp Methods in the USA</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">US exchanges</p>
                  <p className="text-sm text-gray-600">Coinbase, Kraken, Gemini, Binance US, Crypto.com, Bitstamp, and Robinhood all allow instant USD deposits via ACH bank transfer, wire, debit/credit card, and PayPal.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Overseas exchanges or OTC</p>
                  <p className="text-sm text-gray-600">FinchTrade, OKX offer USD on-ramps for large volume or business transactions (fees and KYC apply).</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Fiat-to-crypto platforms</p>
                  <p className="text-sm text-gray-600">Onramper, Banxa provide direct bank-to-crypto conversions and API integrations for wallets/dapps.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Top Off-Ramp Methods for US Users</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Sell on US exchange</p>
                  <p className="text-sm text-gray-600">Swap crypto back to USD and withdraw via ACH, wire, PayPal, or debit card—all require KYC.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">OTC liquidity providers</p>
                  <p className="text-sm text-gray-600">FinchTrade offers deep liquidity, fast settlement, and secure fiat conversion for high value or institutional users.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Fiat off-ramp platforms</p>
                  <p className="text-sm text-gray-600">Banxa, Onramper and similar services support seamless withdrawal from wallets/dapps to USD bank accounts.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Crypto ATMs & cashout desks</p>
                  <p className="text-sm text-gray-600">Available in select cities for fast physical conversion (higher fees, strict ID verification).</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">On/Off Ramp FAQs</h3>
        <div className="space-y-4">
          {[
            {
              question: 'Is ID required?',
              answer: 'Yes—KYC is mandatory for every regulated US on/off ramp.'
            },
            {
              question: 'Are limits imposed?',
              answer: 'Yes—daily limits vary by exchange, user level and method (Coinbase, Kraken, Gemini have high withdrawal limits for verified users).'
            },
            {
              question: 'How fast are transfers?',
              answer: 'USD withdrawals and deposits through ACH, wire, and PayPal are reliable, with same-day or next-day delivery for most major exchanges.'
            },
            {
              question: 'Are transactions taxable?',
              answer: 'Yes—every sale or withdrawal is a taxable event. Report all crypto activity via IRS Form 8949 and Schedule D, and maintain detailed records.'
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tax and Compliance */}
      <section className="mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-800 mb-3">Tax & Compliance Essentials</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Crypto profits are subject to capital gains and income tax; file every year with the IRS.</li>
                <li>• US exchanges report activity to regulators—always use legitimate platforms.</li>
                <li>• Maintain detailed logs for all trading, conversions, deposits and withdrawals.</li>
                <li>• Monitor evolving federal and state laws (FinCEN, SEC, CFTC, IRS), and keep up-to-date via CryptoStarted Guide.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Beginner's Checklist</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <ul className="space-y-3">
            {[
              'Register only with major US-licensed exchanges (see table above).',
              'Have a government-issued ID and proof of US address for KYC.',
              'Compare fees, limits, and security features before trading or cashing out.',
              'Enable two-factor authentication and move large holdings to personal secure wallets as needed.',
              'Bookmark CryptoStarted Guide for the latest regulatory updates and exchange reviews.'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );

  const IndiaContent = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <span className="text-4xl mr-4">🇮🇳</span>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">India Crypto Guide</h2>
          <p className="text-gray-600">Complete regulatory compliance guide for Indian crypto users</p>
        </div>
      </div>

      {/* Legal Status */}
      <section className="mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-green-800 mb-2">Is Crypto Legal in India?</h3>
              <p className="text-green-700">
                Cryptocurrency is <strong>legal to buy, sell, and hold in India</strong>, but it is not recognized as legal tender. 
                Major agencies like RBI, SEBI, and FIU-IND enforce anti-money laundering (AML), know-your-customer (KYC), 
                and tax rules for exchanges and users. As of 2025, crypto is taxed at 30% on profits and 1% TDS (Tax Deducted at Source) 
                on sales exceeding ₹50,000 per financial year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Getting Started: Steps for Beginners</h3>
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: 'Select a reputable Indian exchange',
              description: 'See the list below for trusted options.'
            },
            {
              step: 2,
              title: 'Complete KYC',
              description: 'Upload PAN card, photo ID, and proof of address.'
            },
            {
              step: 3,
              title: 'Deposit INR',
              description: 'Use UPI, NEFT, RTGS, IMPS, debit/credit card or bank transfer.'
            },
            {
              step: 4,
              title: 'Buy crypto',
              description: 'Purchase Bitcoin, Ethereum, stablecoins, or tokens directly.'
            },
            {
              step: 5,
              title: 'Secure your investment',
              description: 'Set strong passwords, enable two-factor authentication, and consider storing large holdings in personal wallets.'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exchange Comparison */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Crypto Exchanges for India (2025)</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Leading Indian Centralized Exchanges</h4>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Key Features</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">INR Deposit</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">KYC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'CoinDCX', features: '100+ coins, low fees, UPI, bank, easy app', inr: 'Yes', kyc: 'PAN Card' },
                  { name: 'Mudrex', features: '150+ coins, portfolios, USDT/INR, security', inr: 'Yes', kyc: 'PAN Card' },
                  { name: 'CoinSwitch', features: '170+ coins, aggregator, NEFT, IMPS, RTGS', inr: 'Yes', kyc: 'PAN Card' },
                  { name: 'ZebPay', features: 'Oldest, lending, competitive fees', inr: 'Yes', kyc: 'PAN Card' },
                  { name: 'Unocoin', features: '50+ coins, simple INR payments, good support', inr: 'Yes', kyc: 'PAN Card' },
                  { name: 'Bitbns', features: '400+ coins, P2P, UPI, instant INR', inr: 'Yes', kyc: 'PAN Card' }
                ].map((exchange, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900">{exchange.name}</td>
                    <td className="px-6 py-4 text-gray-600">{exchange.features}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {exchange.inr}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{exchange.kyc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Major Global Exchanges Accessible in India</h4>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Exchange</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Markets/Features</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">INR Deposit/Withdrawal</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">KYC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'Binance', features: '500+ coins, low global fees, robust P2P', inr: 'INR via P2P/3rd party', kyc: 'Photo ID' },
                  { name: 'Paxful', features: 'P2P, stablecoins, wide payment options', inr: 'INR via P2P, PayPal', kyc: 'Photo ID' },
                  { name: 'Bybit', features: 'Top global trading, now applies 18% GST', inr: 'INR via P2P, USDT', kyc: 'Photo ID' }
                ].map((exchange, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900">{exchange.name}</td>
                    <td className="px-6 py-4 text-gray-600">{exchange.features}</td>
                    <td className="px-6 py-4 text-gray-600">{exchange.inr}</td>
                    <td className="px-6 py-4 text-gray-600">{exchange.kyc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Local access and funding methods may change over time. Peer-to-peer (P2P) is the main gateway for INR on global platforms.
          </p>
        </div>
      </section>

      {/* On/Off Ramp Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">On-Ramp & Off-Ramp: Moving Between INR and Crypto</h3>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-blue-800 mb-3">What Are On-Ramps and Off-Ramps?</h4>
          <div className="space-y-2 text-blue-700">
            <p><strong>On-ramp:</strong> Deposit INR to buy crypto quickly through bank, UPI, or P2P methods.</p>
            <p><strong>Off-ramp:</strong> Sell crypto for INR and withdraw funds legally and securely to a local bank.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Best On-Ramp Methods</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Indian exchanges</p>
                  <p className="text-sm text-gray-600">CoinDCX, Mudrex, CoinSwitch, ZebPay, Unocoin, and Bitbns support INR deposit via UPI, IMPS, NEFT, bank transfer, and debit/credit cards.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Global exchanges via P2P</p>
                  <p className="text-sm text-gray-600">Binance, Paxful offer INR-supported peer-to-peer on-ramps (users buy crypto direct from verified sellers, payment settled in INR).</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Fiat-to-crypto platforms</p>
                  <p className="text-sm text-gray-600">OneSafe and similar providers offer seamless INR-to-crypto conversion for beginners and businesses.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Best Off-Ramp Methods</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Indian exchange withdrawal</p>
                  <p className="text-sm text-gray-600">Sell crypto back for INR and withdraw using UPI, IMPS, NEFT, RTGS, or straight to your local bank (KYC mandatory).</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Global exchanges P2P</p>
                  <p className="text-sm text-gray-600">Binance, Paxful's P2P desk enables crypto-to-INR sales (payment received from verified buyers).</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Fiat off-ramp services</p>
                  <p className="text-sm text-gray-600">OneSafe streamlines crypto conversion and payout to INR account, eliminating high fees and delays.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">On/Off Ramp FAQs</h3>
        <div className="space-y-4">
          {[
            {
              question: 'Is KYC required?',
              answer: 'Yes—PAN card, photo ID, and address proof are mandatory for all regulated ramps.'
            },
            {
              question: 'Are there limits?',
              answer: 'Yes—top exchanges set INR deposit and withdrawal limits based on user tiers and verification levels.'
            },
            {
              question: 'Are transactions taxable?',
              answer: 'Yes—30% tax on profits plus 1% TDS on sales over ₹50,000 per year. Keep detailed records, including dates, amounts, and INR values for each transaction.'
            },
            {
              question: 'How fast are transfers?',
              answer: 'INR deposits via UPI/IMPS/NEFT are usually real-time or same-day. Off-ramps typically process bank withdrawals within 1–3 business days.'
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tax and Compliance */}
      <section className="mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-800 mb-3">Tax & Compliance Essentials</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Crypto is taxed at 30% on profits and subject to 1% TDS for trades above ₹50,000/year.</li>
                <li>• Declare profits in your Income Tax Return using appropriate forms (ITR-2 for individuals).</li>
                <li>• Track all trades: dates, coin/token, INR values, counterparties, and TDS details.</li>
                <li>• Always use trusted, KYC-compliant exchanges—beware of scam sites, read community reviews, and check with SEBI/FIU-IND for the latest rules.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Beginner's Checklist</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <ul className="space-y-3">
            {[
              'Register with a trusted, KYC-compliant Indian exchange (CoinDCX, Mudrex, etc.).',
              'Prepare your PAN card, photo ID, and address proof for onboarding.',
              'Compare supported coins, fees, deposit/withdrawal methods, and limits.',
              'Use strong passwords and 2FA; move larger balances to secure wallets.',
              'Bookmark CryptoStarted Guide for fresh updates, scam alerts, and exchange comparisons.'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );

  const selectedCountryData = countries.find(c => c.id === selectedCountry);

  return (
    <>
      <Helmet>
        <title>Crypto Regulatory Compliance by Country 2025 — Legal Guide for 11 Top Markets</title>
        <meta name="description" content="Complete cryptocurrency regulatory compliance guide for 11 major countries including Australia, USA, India, Brazil, Nigeria. Learn local crypto laws, exchanges, and tax requirements." />
        <meta name="keywords" content="crypto regulation 2025, cryptocurrency laws by country, crypto compliance guide, Australia crypto legal, USA crypto regulation, India crypto tax, crypto exchanges by country" />
        <meta property="og:title" content="Crypto Regulatory Compliance by Country 2025 — Legal Guide" />
        <meta property="og:description" content="Complete cryptocurrency regulatory compliance guide for 11 major countries. Learn local crypto laws, exchanges, and tax requirements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptostarterguide.com/regulatory-compliance" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto Regulatory Compliance by Country 2025" />
        <meta name="twitter:description" content="Complete cryptocurrency regulatory compliance guide for 11 major countries worldwide." />
        <link rel="canonical" href="https://cryptostarterguide.com/regulatory-compliance" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Crypto Regulatory Compliance by Country",
            "url": "https://cryptostarterguide.com/regulatory-compliance",
            "description": "Complete cryptocurrency regulatory compliance guide for 11 major countries including legal status, exchanges, and tax requirements",
            "keywords": "cryptocurrency regulation, crypto compliance, crypto laws by country, cryptocurrency legal guide",
            "dateModified": new Date().toISOString(),
            "author": {
              "@type": "Organization",
              "name": "CryptoStarterGuide"
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": "Country Crypto Compliance Guides",
              "numberOfItems": 11,
              "itemListElement": countries.map((country, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": `${country.name} Crypto Compliance Guide`,
                "description": `Cryptocurrency regulatory compliance guide for ${country.name}`
              }))
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-green-400/30 rounded-full animate-pulse">
            <div className="w-full h-full flex items-center justify-center text-green-400 text-4xl">⚖️</div>
          </div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-yellow-400/30 rounded-lg rotate-45 animate-bounce">
            <div className="w-full h-full flex items-center justify-center text-yellow-400 text-2xl transform -rotate-45">🏛️</div>
          </div>
          <div className="absolute bottom-40 left-20 w-28 h-28 border-2 border-purple-400/30 rounded-full animate-pulse delay-1000">
            <div className="w-full h-full flex items-center justify-center text-purple-400 text-3xl">🌍</div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/30"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative z-10 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-sm text-white py-20 border-b border-white/10 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-full mb-8 shadow-2xl animate-pulse">
                <Globe className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent drop-shadow-lg">
                Crypto Regulatory Compliance
              </h1>
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed">
                Navigate cryptocurrency regulations with confidence. Complete compliance guides for the world's top 11 crypto markets.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <Users className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">244M+</div>
                  <div className="text-blue-200">Total Crypto Users</div>
                </div>
                <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <Shield className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">11</div>
                  <div className="text-blue-200">Countries Covered</div>
                </div>
                <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <FileText className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-blue-200">Compliance Focused</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Country Selection Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Select Country</h2>
                <div className="space-y-3">
                  {countries.map((country) => (
                    <CountryCard key={country.id} country={country} />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {selectedCountry === 'australia' ? (
                <AustraliaContent />
              ) : selectedCountry === 'usa' ? (
                <USAContent />
              ) : selectedCountry === 'india' ? (
                <IndiaContent />
              ) : (
                <ComingSoonContent countryName={selectedCountryData?.name || 'Selected Country'} />
              )}
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(60px, 60px); }
          }
        `}</style>
      </div>
    </>
  );
};

export default RegulatoryCompliance;