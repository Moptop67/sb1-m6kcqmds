import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, AlertTriangle, ExternalLink, Globe, Shield, Scale, FileText, Users, Star, TrendingUp } from 'lucide-react';

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
      onramp: {
        description: 'Getting Australian dollars into crypto exchanges is straightforward with multiple fast, secure options:',
        methods: [
          {
            name: 'Bank Transfer (OSKO/PayID)',
            description: 'Direct bank transfer using PayID or BSB/Account',
            fee: 'Free - $2',
            speed: 'Fast',
            limit: 'Up to $50,000/day'
          },
          {
            name: 'BPAY',
            description: 'Pay using your bank\'s BPAY system',
            fee: 'Free',
            speed: 'Same day',
            limit: 'Up to $10,000/day'
          },
          {
            name: 'Debit Card',
            description: 'Instant purchase with Visa/Mastercard',
            fee: '1-3%',
            speed: 'Instant',
            limit: 'Up to $5,000/day'
          },
          {
            name: 'POLi Payments',
            description: 'Direct online banking payment',
            fee: '$2-5',
            speed: 'Fast',
            limit: 'Up to $20,000/day'
          }
        ],
        tips: [
          'PayID is the fastest and cheapest method for most exchanges',
          'Start with small amounts ($50-200) for your first deposit',
          'Bank transfers are usually free but may take 1-2 hours',
          'Debit cards are instant but have higher fees - good for urgent purchases'
        ]
      },
      offramp: {
        description: 'Converting crypto back to AUD and withdrawing to your bank account:',
        methods: [
          {
            name: 'Bank Transfer',
            description: 'Withdraw AUD directly to your bank account',
            fee: 'Free - $5',
            speed: '1-2 business days',
            limit: 'Up to $100,000/day'
          },
          {
            name: 'PayID Withdrawal',
            description: 'Fast withdrawal using PayID',
            fee: 'Free - $2',
            speed: 'Same day',
            limit: 'Up to $50,000/day'
          },
          {
            name: 'Crypto Debit Card',
            description: 'Spend crypto directly with CoinJar Card',
            fee: '0.5-1%',
            speed: 'Instant',
            limit: 'Up to $5,000/day'
          }
        ],
        warnings: [
          'Large withdrawals may trigger additional verification',
          'Keep records of all withdrawals for tax purposes',
          'Some banks may question large crypto-related deposits',
          'Consider spreading large withdrawals over multiple days'
        ]
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
      onramp: {
        description: 'US residents have several regulated options to fund crypto accounts:',
        methods: [
          {
            name: 'ACH Bank Transfer',
            description: 'Link your bank account for direct transfers',
            fee: 'Free',
            speed: '3-5 business days',
            limit: 'Up to $25,000/day'
          },
          {
            name: 'Wire Transfer',
            description: 'Fast bank wire for large amounts',
            fee: '$10-25',
            speed: 'Same day',
            limit: 'Up to $500,000/day'
          },
          {
            name: 'Debit Card',
            description: 'Instant purchase with Visa/Mastercard',
            fee: '2-4%',
            speed: 'Instant',
            limit: 'Up to $1,000/day'
          },
          {
            name: 'PayPal/Apple Pay',
            description: 'Digital wallet funding (select exchanges)',
            fee: '1-2%',
            speed: 'Instant',
            limit: 'Up to $2,500/day'
          }
        ],
        tips: [
          'ACH transfers are free but take 3-5 days to clear',
          'Start with small debit card purchases for instant access',
          'Wire transfers are best for large amounts ($10,000+)',
          'Some banks block crypto purchases - call ahead to notify them'
        ]
      },
      offramp: {
        description: 'Converting crypto to USD and withdrawing to US bank accounts:',
        methods: [
          {
            name: 'ACH Bank Transfer',
            description: 'Standard withdrawal to linked bank account',
            fee: 'Free',
            speed: '1-3 business days',
            limit: 'Up to $25,000/day'
          },
          {
            name: 'Wire Transfer',
            description: 'Fast withdrawal for large amounts',
            fee: '$25',
            speed: 'Same day',
            limit: 'Up to $500,000/day'
          },
          {
            name: 'Coinbase Card',
            description: 'Spend crypto directly with Visa debit card',
            fee: '2.49%',
            speed: 'Instant',
            limit: 'Up to $2,500/day'
          }
        ],
        warnings: [
          'Large withdrawals may require additional verification',
          'Report all gains/losses to IRS on Form 8949',
          'Some banks may hold large crypto-related deposits',
          'Keep detailed records for tax reporting'
        ]
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
      onramp: {
        description: 'UK residents can fund crypto accounts through several FCA-regulated methods:',
        methods: [
          {
            name: 'Bank Transfer (Faster Payments)',
            description: 'Direct transfer from UK bank account',
            fee: 'Free',
            speed: 'Same day',
            limit: 'Up to £25,000/day'
          },
          {
            name: 'Debit Card',
            description: 'Instant purchase with UK debit card',
            fee: '1-3%',
            speed: 'Instant',
            limit: 'Up to £2,000/day'
          },
          {
            name: 'Open Banking',
            description: 'Secure connection to your bank via Open Banking',
            fee: 'Free',
            speed: 'Instant',
            limit: 'Up to £10,000/day'
          }
        ],
        tips: [
          'Faster Payments are free and usually arrive within hours',
          'Some banks block crypto purchases - Monzo, Starling are crypto-friendly',
          'Open Banking is the most secure instant funding method',
          'Start small (£50-100) for your first purchase'
        ]
      },
      offramp: {
        description: 'Converting crypto to GBP and withdrawing to UK bank accounts:',
        methods: [
          {
            name: 'Bank Transfer',
            description: 'Withdraw GBP to your UK bank account',
            fee: 'Free - £1',
            speed: 'Same day',
            limit: 'Up to £50,000/day'
          },
          {
            name: 'Crypto Debit Card',
            description: 'Spend crypto directly with cards like Crypto.com',
            fee: '0-2%',
            speed: 'Instant',
            limit: 'Up to £5,000/day'
          }
        ],
        warnings: [
          'Keep records for HMRC Capital Gains Tax reporting',
          'Large withdrawals may trigger bank security checks',
          'Annual CGT allowance is £6,000 (2024/25)',
          'Consider timing withdrawals to optimize tax efficiency'
        ]
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
      onramp: {
        description: 'Canadian residents can fund crypto accounts through regulated, secure methods:',
        methods: [
          {
            name: 'Interac e-Transfer',
            description: 'Standard Canadian online banking transfer',
            fee: 'Free - $1.50',
            speed: 'Same day',
            limit: 'Up to $10,000/day'
          },
          {
            name: 'Bank Wire',
            description: 'Direct wire transfer for large amounts',
            fee: '$15-30',
            speed: 'Same day',
            limit: 'Up to $250,000/day'
          },
          {
            name: 'Debit Card',
            description: 'Instant purchase with Canadian debit card',
            fee: '2-4%',
            speed: 'Instant',
            limit: 'Up to $2,000/day'
          }
        ],
        tips: [
          'Interac e-Transfer is the most popular funding method',
          'Most major Canadian banks support crypto exchanges',
          'Start with small amounts ($100-500) initially',
          'Wire transfers are best for amounts over $10,000'
        ]
      },
      offramp: {
        description: 'Converting crypto to CAD and withdrawing to Canadian bank accounts:',
        methods: [
          {
            name: 'Bank Transfer',
            description: 'Direct withdrawal to Canadian bank account',
            fee: 'Free - $5',
            speed: '1-2 business days',
            limit: 'Up to $50,000/day'
          },
          {
            name: 'Interac e-Transfer',
            description: 'Receive funds via Interac e-Transfer',
            fee: '$1-3',
            speed: 'Same day',
            limit: 'Up to $3,000/day'
          }
        ],
        warnings: [
          'Report all crypto gains/losses to CRA',
          '50% of capital gains are taxable',
          'Keep detailed transaction records',
          'Large withdrawals may require additional verification'
        ]
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
    },
    {
      name: 'India',
      code: 'IN',
      flag: '🇮🇳',
      status: 'regulated',
      title: 'How to Begin With Crypto in India (2025)',
      subtitle: 'Ready to start your crypto journey in India? Navigate RBI guidelines and high taxation with our comprehensive beginner guide for Indian residents.',
      legalStatus: {
        title: 'Is Crypto Legal in India?',
        content: 'Cryptocurrency is legal in India but heavily regulated and taxed. The Reserve Bank of India (RBI) and Securities and Exchange Board of India (SEBI) oversee crypto activities. While trading is permitted, the government has imposed a 30% flat tax on crypto gains and 1% TDS on all transactions.'
      },
      onramp: {
        description: 'Indian residents can fund crypto accounts through several regulated methods:',
        methods: [
          {
            name: 'UPI (Unified Payments Interface)',
            description: 'Instant transfer using UPI apps like PhonePe, Paytm, GPay',
            fee: 'Free',
            speed: 'Instant',
            limit: 'Up to ₹1,00,000/day'
          },
          {
            name: 'IMPS/NEFT',
            description: 'Bank transfer via IMPS or NEFT',
            fee: 'Free - ₹5',
            speed: 'Same day',
            limit: 'Up to ₹10,00,000/day'
          },
          {
            name: 'Bank Transfer',
            description: 'Direct bank account transfer',
            fee: 'Free',
            speed: '1-2 hours',
            limit: 'Up to ₹50,00,000/day'
          },
          {
            name: 'Debit Card',
            description: 'Instant purchase with Indian debit card',
            fee: '2-3%',
            speed: 'Instant',
            limit: 'Up to ₹2,00,000/day'
          }
        ],
        tips: [
          'UPI is the fastest and most popular funding method',
          'Some banks may block crypto transactions - check with your bank',
          'Start with small amounts (₹1,000-5,000) for your first purchase',
          'IMPS transfers are usually processed within minutes'
        ]
      },
      offramp: {
        description: 'Converting crypto to INR and withdrawing to Indian bank accounts:',
        methods: [
          {
            name: 'Bank Transfer',
            description: 'Withdraw INR directly to your bank account',
            fee: 'Free - ₹10',
            speed: '1-3 business days',
            limit: 'Up to ₹10,00,000/day'
          },
          {
            name: 'UPI Withdrawal',
            description: 'Fast withdrawal using UPI (limited exchanges)',
            fee: 'Free',
            speed: 'Same day',
            limit: 'Up to ₹1,00,000/day'
          },
          {
            name: 'P2P Trading',
            description: 'Sell crypto directly to other users',
            fee: '0.1-0.5%',
            speed: 'Instant',
            limit: 'Varies by platform'
          }
        ],
        warnings: [
          '30% tax applies to all crypto gains - no exemptions',
          '1% TDS is deducted on all crypto transactions above ₹10,000',
          'Keep detailed records for income tax filing',
          'Large withdrawals may trigger bank security checks',
          'Report all crypto income in your ITR filing'
        ]
      },
      steps: [
        'Choose an exchange registered with Indian authorities',
        'Complete KYC with Aadhaar, PAN card, and bank details',
        'Fund your account using UPI or bank transfer',
        'Start with Bitcoin or Ethereum for beginners',
        'Understand the 30% tax implications before trading',
        'Keep detailed transaction records for tax filing'
      ],
      taxes: {
        title: 'Indian Tax Requirements',
        content: 'India has some of the world\'s highest crypto taxes:',
        requirements: [
          'Pay 30% flat tax on all crypto gains (no deductions allowed)',
          '1% TDS (Tax Deducted at Source) on transactions above ₹10,000',
          'No set-off of losses against other income',
          'Report all crypto income in ITR-2 or ITR-3',
          'Keep records of all transactions with dates and INR values'
        ]
      },
      compliance: {
        title: 'Indian Compliance Tips',
        tips: [
          'Only use exchanges that comply with Indian KYC/AML norms',
          'Ensure your exchange reports transactions to tax authorities',
          'Be prepared for 1% TDS deduction on all trades',
          'Consult a CA for complex tax situations',
          'Avoid P2P trading with unverified parties'
        ]
      },
      localExchanges: [
        { name: 'WazirX', registration: 'Yes', features: 'Most popular, INR deposits, P2P trading', audSupport: 'Yes', rating: 4.2 },
        { name: 'CoinDCX', registration: 'Yes', features: 'Large selection, futures trading, SIP', audSupport: 'Yes', rating: 4.3 },
        { name: 'CoinSwitch', registration: 'Yes', features: 'User-friendly, educational content', audSupport: 'Yes', rating: 4.1 },
        { name: 'Bitbns', registration: 'Yes', features: 'Low fees, margin trading', audSupport: 'Yes', rating: 4.0 },
        { name: 'Giottus', registration: 'Yes', features: 'Secure, institutional grade', audSupport: 'Yes', rating: 4.2 }
      ],
      globalExchanges: [
        { name: 'Binance', regulation: 'Global registration', features: 'Largest selection, lowest fees', audSupport: 'Limited', rating: 4.8 },
        { name: 'KuCoin', regulation: 'Global registration', features: 'Wide altcoin selection, trading bots', audSupport: 'Limited', rating: 4.4 },
        { name: 'OKX', regulation: 'Global registration', features: 'Advanced trading, derivatives', audSupport: 'Limited', rating: 4.2 }
      ],
      checklist: [
        'Verify the exchange complies with Indian regulations',
        'Prepare Aadhaar, PAN card, and bank account details',
        'Understand the 30% tax and 1% TDS implications',
        'Set up proper record-keeping for tax filing',
        'Start with small amounts due to high taxation'
      ]
    },
    {
      name: 'Vietnam',
      code: 'VN',
      flag: '🇻🇳',
      status: 'regulated',
      title: 'How to Begin With Crypto in Vietnam (2025)',
      subtitle: 'Ready to start your crypto journey in Vietnam? Navigate SBV regulations and understand the legal framework with our comprehensive beginner guide for Vietnamese residents.',
      legalStatus: {
        title: 'Is Crypto Legal in Vietnam?',
        content: 'Cryptocurrency is legal to hold and trade as an investment in Vietnam, but prohibited as a payment method. The State Bank of Vietnam (SBV) and Ministry of Finance regulate crypto activities. While trading is permitted, using crypto for payments is strictly forbidden.'
      },
      onramp: {
        description: 'Vietnamese residents can fund crypto accounts through several regulated methods:',
        methods: [
          {
            name: 'Bank Transfer (VietinBank, BIDV)',
            description: 'Direct transfer from major Vietnamese banks',
            fee: '10,000-50,000 VND',
            speed: '1-2 hours',
            limit: 'Up to 500M VND/day'
          },
          {
            name: 'Vietcombank Transfer',
            description: 'Fast processing through Vietcombank',
            fee: '11,000 VND',
            speed: '30 minutes',
            limit: 'Up to 200M VND/day'
          },
          {
            name: 'Techcombank Transfer',
            description: 'Lower fees through Techcombank',
            fee: '6,600 VND',
            speed: '1 hour',
            limit: 'Up to 300M VND/day'
          },
          {
            name: 'P2P Trading (Cash/Bank)',
            description: 'Direct trading with other users',
            fee: '0.1-1%',
            speed: 'Variable',
            limit: 'Varies by platform'
          }
        ],
        tips: [
          'Bank transfers are the most reliable method for large amounts',
          'Vietcombank offers fast processing and wide acceptance',
          'Techcombank has lower fees, good for regular trading',
          'Start with small amounts (1-5M VND) for your first purchase'
        ]
      },
      offramp: {
        description: 'Converting crypto to VND and withdrawing to Vietnamese bank accounts:',
        methods: [
          {
            name: 'Bank Withdrawal',
            description: 'Standard withdrawal to Vietnamese bank account',
            fee: '20,000-100,000 VND',
            speed: '2-6 hours',
            limit: 'Up to 500M VND/day'
          },
          {
            name: 'P2P Cash Trading',
            description: 'Face-to-face trading in major cities',
            fee: '0.5-2%',
            speed: 'Instant',
            limit: 'Up to 100M VND/transaction'
          },
          {
            name: 'International Wire',
            description: 'For large amounts, higher fees',
            fee: '$15-30',
            speed: '1-3 days',
            limit: 'Up to $50,000/month'
          }
        ],
        warnings: [
          'Using crypto for payments is prohibited',
          'Banks may restrict crypto-related transactions',
          'Tax reporting is mandatory for gains',
          'Keep detailed records for tax purposes',
          'Large withdrawals may trigger bank security checks'
        ]
      },
      steps: [
        'Choose an exchange that accepts Vietnamese users',
        'Complete identity verification with Vietnamese ID',
        'Fund your account using bank transfer or P2P',
        'Start with Bitcoin or Ethereum for beginners',
        'Use only for investment, not payments',
        'Keep detailed trading records for tax purposes'
      ],
      taxes: {
        title: 'Vietnamese Tax Requirements',
        content: 'Crypto gains are subject to personal income tax at progressive rates (5-35%):',
        requirements: [
          'Capital gains from crypto trading are taxed as investment income',
          'Progressive tax rates from 5% to 35% based on income level',
          'Proper documentation required for tax filing',
          'Report all crypto gains in annual tax returns',
          'Keep records of all transactions with dates and VND values'
        ]
      },
      compliance: {
        title: 'Vietnamese Compliance Tips',
        tips: [
          'Only use crypto for investment, not payments',
          'Complete identity verification with Vietnamese documents',
          'Keep detailed trading records for tax purposes',
          'Report crypto gains in annual tax returns',
          'Stay updated on evolving regulations'
        ]
      },
      localExchanges: [
        { name: 'Remitano', registration: 'Yes', features: 'P2P focus, VND support', audSupport: 'Yes', rating: 4.1 },
        { name: 'VNDC', registration: 'Yes', features: 'Vietnamese stablecoin', audSupport: 'Yes', rating: 3.8 },
        { name: 'Coinhako', registration: 'Yes', features: 'Regional exchange, simple UI', audSupport: 'Yes', rating: 3.9 }
      ],
      globalExchanges: [
        { name: 'Binance', regulation: 'Accessible', features: 'P2P VND trading, huge selection', audSupport: 'Yes', rating: 4.8 },
        { name: 'KuCoin', regulation: 'Accessible', features: 'Wide altcoin range, futures', audSupport: 'No', rating: 4.4 },
        { name: 'Huobi', regulation: 'Accessible', features: 'Asian focus, VND pairs', audSupport: 'Limited', rating: 4.2 },
        { name: 'OKX', regulation: 'Accessible', features: 'Advanced trading, derivatives', audSupport: 'No', rating: 4.3 }
      ],
      checklist: [
        'Verify the exchange accepts Vietnamese users',
        'Prepare Vietnamese ID and bank account details',
        'Understand that crypto payments are prohibited',
        'Set up proper record-keeping for tax filing',
        'Start with small amounts to understand regulations'
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'regulated': return 'border-green-500 bg-green-50';
      case 'restricted': return 'border-yellow-500 bg-yellow-50';
      case 'banned': return 'border-red-500 bg-red-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
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

                {/* On-ramp and Off-ramp */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <TrendingUp className="h-6 w-6 mr-3 text-green-600" />
                    3. Getting Money In & Out (On-ramp/Off-ramp)
                  </h2>
                  
                  {/* On-ramp Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-green-700">
                      💰 Getting Money IN (On-ramp) - How to Fund Your Account
                    </h3>
                    <p className="text-gray-700 mb-4">{selectedCountryData.onramp.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedCountryData.onramp.methods.map((method, index) => (
                        <div key={index} className="border border-green-200 rounded-lg p-4 bg-green-50">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-900">{method.name}</h4>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              method.speed === 'Instant' ? 'bg-green-100 text-green-800' :
                              method.speed === 'Fast' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {method.speed}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                          <div className="text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Fee:</span>
                              <span className="font-medium">{method.fee}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Limit:</span>
                              <span className="font-medium">{method.limit}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">💡 Pro Tips for Funding:</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        {selectedCountryData.onramp.tips.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Off-ramp Section */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-red-700">
                      💸 Getting Money OUT (Off-ramp) - How to Cash Out
                    </h3>
                    <p className="text-gray-700 mb-4">{selectedCountryData.offramp.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedCountryData.offramp.methods.map((method, index) => (
                        <div key={index} className="border border-red-200 rounded-lg p-4 bg-red-50">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-900">{method.name}</h4>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              method.speed === 'Instant' ? 'bg-green-100 text-green-800' :
                              method.speed === 'Fast' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {method.speed}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                          <div className="text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Fee:</span>
                              <span className="font-medium">{method.fee}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Limit:</span>
                              <span className="font-medium">{method.limit}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-bold text-yellow-800 mb-2">⚠️ Important Cash-Out Notes:</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        {selectedCountryData.offramp.warnings.map((warning, index) => (
                          <li key={index} className="flex items-start">
                            <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                            {warning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Tax Requirements */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-purple-600" />
                    4. {selectedCountryData.taxes.title}
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
                    5. {selectedCountryData.compliance.title}
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

        {/* European Union */}
        <section id="eu" className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-4">🇪🇺</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">European Union (EU)</h2>
              <p className="text-gray-600 mt-1">MiCA regulation brings unified crypto rules across all 27 EU member states</p>
            </div>
          </div>

          {/* Legal Status */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">✅ Legal Status (2025)</h3>
            <ul className="space-y-2 text-green-700">
              <li>• <strong>Fully legal</strong> under MiCA (Markets in Crypto-Assets) regulation</li>
              <li>• <strong>Unified rules</strong> across all 27 EU member states since 2024</li>
              <li>• <strong>Consumer protection</strong> with mandatory licensing for exchanges</li>
              <li>• <strong>Stablecoin regulations</strong> with reserve requirements</li>
              <li>• <strong>Anti-money laundering</strong> compliance required</li>
            </ul>
          </div>

          {/* Step-by-Step Process */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">🚀 Getting Started: Step-by-Step</h3>
            <div className="space-y-4">
              {[
                'Choose a MiCA-licensed exchange (look for regulatory badges)',
                'Complete KYC verification with EU ID/passport + proof of address',
                'Deposit EUR using SEPA, bank transfer, or card payments',
                'Buy crypto with transparent fee display and consumer protections',
                'Enable 2FA and use strong passwords for security',
                'Consider hardware wallet for amounts over €1,000'
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* On-ramp Methods */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">💰 On-ramp: Getting EUR Into Crypto</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Payment Method</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Fees</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Speed</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Daily Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">
                      <div className="font-medium">SEPA Transfer</div>
                      <div className="text-sm text-gray-600">Most popular EU method</div>
                    </td>
                    <td className="py-3 px-4 text-green-600 font-medium">Free - €1</td>
                    <td className="py-3 px-4">1-2 hours</td>
                    <td className="py-3 px-4">€50,000+</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div className="font-medium">Instant SEPA</div>
                      <div className="text-sm text-gray-600">Available 24/7</div>
                    </td>
                    <td className="py-3 px-4">€0.70 - €2</td>
                    <td className="py-3 px-4 text-green-600 font-medium">Instant</td>
                    <td className="py-3 px-4">€15,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div className="font-medium">Debit/Credit Card</div>
                      <div className="text-sm text-gray-600">Visa, Mastercard</div>
                    </td>
                    <td className="py-3 px-4">1.8% - 3.5%</td>
                    <td className="py-3 px-4 text-green-600 font-medium">Instant</td>
                    <td className="py-3 px-4">€2,000 - €10,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div className="font-medium">Open Banking</div>
                      <div className="text-sm text-gray-600">Direct bank connection</div>
                    </td>
                    <td className="py-3 px-4 text-green-600 font-medium">Free - €1</td>
                    <td className="py-3 px-4">15 minutes</td>
                    <td className="py-3 px-4">€25,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>💡 Pro Tip:</strong> SEPA transfers are cheapest for regular purchases. Use cards only for urgent buys due to higher fees.
              </p>
            </div>
          </div>

          {/* Off-ramp Methods */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">💸 Off-ramp: Converting Crypto Back to EUR</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Withdrawal Method</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Fees</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Processing Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Daily Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">
                      <div className="font-medium">SEPA Withdrawal</div>
                      <div className="text-sm text-gray-600">To EU bank account</div>
                    </td>
                    <td className="py-3 px-4 text-green-600 font-medium">Free - €1</td>
                    <td className="py-3 px-4">1-3 business days</td>
                    <td className="py-3 px-4">€50,000+</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div className="font-medium">Instant SEPA</div>
                      <div className="text-sm text-gray-600">Fast withdrawal</div>
                    </td>
                    <td className="py-3 px-4">€1 - €5</td>
                    <td className="py-3 px-4 text-green-600 font-medium">15 minutes</td>
                    <td className="py-3 px-4">€15,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div className="font-medium">Crypto Debit Card</div>
                      <div className="text-sm text-gray-600">Spend directly</div>
                    </td>
                    <td className="py-3 px-4">0% - 2%</td>
                    <td className="py-3 px-4 text-green-600 font-medium">Instant</td>
                    <td className="py-3 px-4">€5,000 - €25,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>⚠️ Important:</strong> Large withdrawals (€10,000+) may require additional verification and tax documentation.
              </p>
            </div>
          </div>

          {/* Tax Information */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">📊 Tax & Record-Keeping (Varies by Country)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Common EU Tax Rules:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Capital gains tax</strong> on crypto profits</li>
                  <li>• <strong>FIFO method</strong> commonly used</li>
                  <li>• <strong>Annual reporting</strong> in tax returns</li>
                  <li>• <strong>Different rates</strong> for short vs long-term</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Record-Keeping Requirements:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>All transactions</strong> with EUR values</li>
                  <li>• <strong>Purchase/sale dates</strong> and amounts</li>
                  <li>• <strong>Exchange records</strong> and receipts</li>
                  <li>• <strong>Wallet addresses</strong> and transfers</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
              <p className="text-purple-800 text-sm">
                <strong>📝 Note:</strong> Tax rules vary by EU country. Germany has different rules than France or Netherlands. 
                Consult local tax advisors for specific guidance.
              </p>
            </div>
          </div>

          {/* Exchange Recommendations */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">🏆 Recommended Exchanges for EU Users</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">🇪🇺 EU-Based (MiCA Licensed)</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Exchange</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Rating</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Features</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">EUR Support</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">
                        <div className="font-medium">Bitstamp</div>
                        <div className="text-sm text-gray-600">Luxembourg-based, oldest EU exchange</div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>4.7</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">High security, institutional grade, SEPA</td>
                      <td className="py-3 px-4 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <div className="font-medium">Bitpanda</div>
                        <div className="text-sm text-gray-600">Austria-based, beginner-friendly</div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>4.5</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">User-friendly, stocks/crypto, debit card</td>
                      <td className="py-3 px-4 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <div className="font-medium">Kraken</div>
                        <div className="text-sm text-gray-600">US-based but EU compliant</div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>4.6</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">Advanced trading, staking, low fees</td>
                      <td className="py-3 px-4 text-center text-green-600">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">🌍 Global (EU Accessible)</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Exchange</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Rating</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Features</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">EUR Support</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">
                        <div className="font-medium">Binance</div>
                        <div className="text-sm text-gray-600">Largest global exchange</div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>4.8</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">Lowest fees, huge selection, advanced tools</td>
                      <td className="py-3 px-4 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <div className="font-medium">Coinbase</div>
                        <div className="text-sm text-gray-600">US-based, beginner-friendly</div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>4.6</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">Easy to use, high security, regulated</td>
                      <td className="py-3 px-4 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <div className="font-medium">KuCoin</div>
                        <div className="text-sm text-gray-600">Wide altcoin selection</div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>4.4</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">Many altcoins, trading bots, low fees</td>
                      <td className="py-3 px-4 text-center text-yellow-600">P2P</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Compliance Checklist */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">✅ EU Beginner Compliance Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Before You Start:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• ✅ Verify exchange has MiCA license</li>
                  <li>• ✅ Prepare EU ID/passport + proof of address</li>
                  <li>• ✅ Understand your country's specific tax rules</li>
                  <li>• ✅ Set up secure email and 2FA</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">After Your First Purchase:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• ✅ Download transaction records</li>
                  <li>• ✅ Set up crypto tax tracking software</li>
                  <li>• ✅ Consider hardware wallet for security</li>
                  <li>• ✅ Never invest more than you can afford to lose</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
            {/* European Union */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🇪🇺</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">European Union</h3>
                  <p className="text-sm text-gray-600">MiCA regulation brings unified crypto rules across all 27 EU member states</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Legal Status (2025)
                </h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                    <span><strong>Fully legal</strong> under MiCA regulation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                    <span><strong>Unified rules</strong> across 27 member states</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                    <span><strong>Consumer protection</strong> with mandatory licensing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                    <span><strong>Stablecoin regulations</strong> with reserves</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">💳 On-ramp Methods:</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>SEPA Transfer:</strong> Free-€1, 1-2 hours, €50,000+ limits</li>
                  <li><strong>Instant SEPA:</strong> €0.70-€2, instant, €15,000 limits</li>
                  <li><strong>Debit/Credit Cards:</strong> 1.8%-3.5%, instant, €2,000-€10,000 limits</li>
                  <li><strong>Open Banking:</strong> Free-€1, 15 minutes, €25,000 limits</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">💰 Off-ramp Methods:</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>SEPA Withdrawal:</strong> Free-€1, 1-3 days, €50,000+ limits</li>
                  <li><strong>Instant SEPA:</strong> €1-€5, 15 minutes, €15,000 limits</li>
                  <li><strong>Crypto Debit Cards:</strong> 0%-2%, instant spending</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">📊 Tax Structure:</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>Capital gains tax</strong> on profits (varies by country)</li>
                  <li><strong>FIFO method</strong> commonly used</li>
                  <li><strong>Annual reporting</strong> requirements</li>
                  <li><strong>Different rates</strong> for short vs long-term holdings</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">🏆 Recommended Exchanges:</h4>
                <div className="text-sm space-y-1">
                  <div><strong>EU-Based (MiCA Licensed):</strong> Bitstamp, Bitpanda, Kraken</div>
                  <div><strong>Global (EU Accessible):</strong> Binance, Coinbase, KuCoin</div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">✅ Compliance Checklist:</h4>
                <ul className="text-xs space-y-1">
                  <li>• Verify exchange has MiCA license</li>
                  <li>• Prepare EU ID/passport + proof of address</li>
                  <li>• Research country-specific tax rules</li>
                  <li>• Set up secure email and 2FA</li>
                  <li>• Download transaction records</li>
                  <li>• Set up crypto tax tracking software</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-yellow-800 text-xs">
                  <strong>📝 Note:</strong> Tax rules vary by EU country. Germany has different rules than France or Netherlands. Consult local tax advisors for specific guidance.
                </p>
              </div>
            </div>
      </div>
    </div>
  );
};

export default RegulatoryCompliance;
