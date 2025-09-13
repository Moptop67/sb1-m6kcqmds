import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Globe, AlertTriangle, CheckCircle, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const RegulatoryCompliance = () => {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  const toggleCountry = (countryId: string) => {
    setExpandedCountry(expandedCountry === countryId ? null : countryId);
  };

  const countries = [
    {
      id: 'eu',
      name: 'European Union (EU)',
      flag: '🇪🇺',
      status: 'Fully Legal',
      statusColor: 'green',
      description: 'MiCA regulation brings unified crypto rules across all 27 EU member states',
      legalStatus: [
        'Fully legal under MiCA (Markets in Crypto-Assets) regulation',
        'Unified rules across all 27 EU member states since 2024',
        'Consumer protection with mandatory licensing for exchanges',
        'Stablecoin regulations with reserve requirements',
        'Anti-money laundering compliance required'
      ],
      gettingStarted: [
        'Choose a MiCA-licensed exchange (look for regulatory badges)',
        'Complete KYC verification with EU ID/passport + proof of address',
        'Deposit EUR using SEPA, bank transfer, or card payments',
        'Buy crypto with transparent fee display and consumer protections',
        'Enable 2FA and use strong passwords for security',
        'Consider hardware wallet for amounts over €1,000'
      ],
      onRamp: {
        methods: [
          {
            name: 'SEPA Transfer',
            description: 'Most popular EU method',
            fees: 'Free - €1',
            speed: '1-2 hours',
            limits: '€50,000+'
          },
          {
            name: 'Instant SEPA',
            description: 'Available 24/7',
            fees: '€0.70 - €2',
            speed: 'Instant',
            limits: '€15,000'
          },
          {
            name: 'Debit/Credit Card',
            description: 'Visa, Mastercard',
            fees: '1.8% - 3.5%',
            speed: 'Instant',
            limits: '€2,000 - €10,000'
          },
          {
            name: 'Open Banking',
            description: 'Direct bank connection',
            fees: 'Free - €1',
            speed: '15 minutes',
            limits: '€25,000'
          }
        ],
        tip: 'Pro Tip: SEPA transfers are cheapest for regular purchases. Use cards only for urgent buys due to higher fees.'
      },
      offRamp: {
        methods: [
          {
            name: 'SEPA Withdrawal',
            description: 'To EU bank account',
            fees: 'Free - €1',
            speed: '1-3 business days',
            limits: '€50,000+'
          },
          {
            name: 'Instant SEPA',
            description: 'Fast withdrawal',
            fees: '€1 - €5',
            speed: '15 minutes',
            limits: '€15,000'
          },
          {
            name: 'Crypto Debit Card',
            description: 'Spend directly',
            fees: '0% - 2%',
            speed: 'Instant',
            limits: '€5,000 - €25,000'
          }
        ],
        warning: 'Important: Large withdrawals (€10,000+) may require additional verification and tax documentation.'
      },
      taxes: {
        structure: [
          'Capital gains tax on crypto profits (varies by country)',
          'FIFO method commonly used',
          'Annual reporting in tax returns',
          'Different rates for short vs long-term holdings'
        ],
        recordKeeping: [
          'All transactions with EUR values',
          'Purchase/sale dates and amounts',
          'Exchange records and receipts',
          'Wallet addresses and transfers'
        ],
        note: 'Note: Tax rules vary by EU country. Germany has different rules than France or Netherlands. Consult local tax advisors for specific guidance.'
      },
      exchanges: {
        euBased: [
          {
            name: 'Bitstamp',
            description: 'Luxembourg-based, oldest EU exchange',
            rating: '4.7',
            features: 'High security, institutional grade, SEPA',
            eurSupport: true
          },
          {
            name: 'Bitpanda',
            description: 'Austria-based, beginner-friendly',
            rating: '4.5',
            features: 'User-friendly, stocks/crypto, debit card',
            eurSupport: true
          },
          {
            name: 'Kraken',
            description: 'US-based but EU compliant',
            rating: '4.6',
            features: 'Advanced trading, staking, low fees',
            eurSupport: true
          }
        ],
        global: [
          {
            name: 'Binance',
            description: 'Largest global exchange',
            rating: '4.8',
            features: 'Lowest fees, huge selection, advanced tools',
            eurSupport: true
          },
          {
            name: 'Coinbase',
            description: 'US-based, beginner-friendly',
            rating: '4.6',
            features: 'Easy to use, high security, regulated',
            eurSupport: true
          },
          {
            name: 'KuCoin',
            description: 'Wide altcoin selection',
            rating: '4.4',
            features: 'Many altcoins, trading bots, low fees',
            eurSupport: false
          }
        ]
      },
      checklist: {
        beforeStart: [
          'Verify exchange has MiCA license',
          'Prepare EU ID/passport + proof of address',
          'Set up SEPA-enabled bank account',
          'Research your country\'s specific tax rules'
        ],
        afterPurchase: [
          'Enable transaction records',
          'Set up crypto tax tracking software',
          'Consider hardware wallet for security',
          'Never invest more than you can afford to lose'
        ]
      }
    },
    {
      id: 'us',
      name: 'United States',
      flag: '🇺🇸',
      status: 'Legal with Regulations',
      statusColor: 'yellow',
      description: 'Complex regulatory landscape with state-by-state variations',
      legalStatus: [
        'Legal to buy, sell, and hold cryptocurrency',
        'Regulated by SEC, CFTC, FinCEN, and state agencies',
        'Different rules for different types of crypto assets',
        'Some states have additional licensing requirements',
        'Banks increasingly crypto-friendly since 2021'
      ],
      gettingStarted: [
        'Choose a US-regulated exchange (Coinbase, Kraken, Gemini)',
        'Complete KYC verification with US ID + SSN',
        'Link bank account or debit card for funding',
        'Start with small amounts to learn the process',
        'Enable two-factor authentication for security',
        'Consider tax implications before large purchases'
      ],
      onRamp: {
        methods: [
          {
            name: 'ACH Bank Transfer',
            description: 'Most popular US method',
            fees: 'Free - $2.99',
            speed: '3-5 business days',
            limits: '$25,000 - $50,000'
          },
          {
            name: 'Wire Transfer',
            description: 'For large amounts',
            fees: '$10 - $25',
            speed: 'Same day',
            limits: '$250,000+'
          },
          {
            name: 'Debit Card',
            description: 'Instant but expensive',
            fees: '3.99%',
            speed: 'Instant',
            limits: '$1,000 - $7,500'
          }
        ],
        tip: 'Pro Tip: Use ACH transfers for regular purchases. Wire transfers for large amounts. Avoid debit cards due to high fees.'
      },
      offRamp: {
        methods: [
          {
            name: 'ACH Withdrawal',
            description: 'To US bank account',
            fees: 'Free - $2.99',
            speed: '1-3 business days',
            limits: '$25,000 - $50,000'
          },
          {
            name: 'Wire Withdrawal',
            description: 'Fast for large amounts',
            fees: '$25 - $50',
            speed: 'Same day',
            limits: '$250,000+'
          }
        ],
        warning: 'Important: Withdrawals over $10,000 trigger CTR (Currency Transaction Report) filing with FinCEN.'
      },
      taxes: {
        structure: [
          'Capital gains tax on crypto sales (0%, 15%, or 20%)',
          'Short-term gains taxed as ordinary income',
          'Long-term gains (held >1 year) get preferential rates',
          'Mining and staking income taxed as ordinary income'
        ],
        recordKeeping: [
          'All transactions with USD values',
          'Purchase dates and amounts',
          'Sale dates and amounts',
          'Exchange records and receipts'
        ]
      },
      exchanges: {
        recommended: [
          {
            name: 'Coinbase',
            description: 'Best for beginners',
            rating: '4.6',
            features: 'User-friendly, regulated, insured'
          },
          {
            name: 'Kraken',
            description: 'Advanced features',
            rating: '4.5',
            features: 'Low fees, staking, futures'
          },
          {
            name: 'Gemini',
            description: 'High security',
            rating: '4.4',
            features: 'Regulated, insured, institutional'
          }
        ]
      }
    },
    {
      id: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      status: 'Fully Legal',
      statusColor: 'green',
      description: 'Clear regulatory framework with MSB registration requirements',
      legalStatus: [
        'Fully legal to buy, sell, and hold cryptocurrency',
        'Regulated by provincial securities commissions',
        'Exchanges must register as Money Service Businesses (MSB)',
        'Clear tax guidance from Canada Revenue Agency (CRA)',
        'Growing institutional adoption and ETF approvals'
      ],
      gettingStarted: [
        'Choose a registered Canadian exchange (Coinsquare, Bitbuy, Newton)',
        'Complete verification with Canadian ID',
        'Fund account via Interac e-Transfer or bank wire',
        'Start with established coins like Bitcoin and Ethereum',
        'Keep detailed records for tax purposes',
        'Consider cold storage for large amounts'
      ],
      onRamp: {
        methods: [
          {
            name: 'Interac e-Transfer',
            description: 'Most popular Canadian method',
            fees: '$1.50 - $5',
            speed: '30 minutes - 2 hours',
            limits: '$3,000 - $10,000'
          },
          {
            name: 'Bank Wire',
            description: 'For large amounts',
            fees: '$15 - $30',
            speed: '1-2 business days',
            limits: '$50,000+'
          },
          {
            name: 'Credit/Debit Card',
            description: 'Instant but higher fees',
            fees: '3.5% - 4%',
            speed: 'Instant',
            limits: '$500 - $2,000'
          }
        ],
        tip: 'Pro Tip: Interac e-Transfer is the most convenient and cost-effective method for most Canadians.'
      },
      offRamp: {
        methods: [
          {
            name: 'Bank Transfer',
            description: 'To Canadian bank account',
            fees: '$5 - $15',
            speed: '1-3 business days',
            limits: '$50,000+'
          },
          {
            name: 'Interac e-Transfer',
            description: 'Smaller amounts',
            fees: '$2 - $5',
            speed: '30 minutes - 2 hours',
            limits: '$3,000'
          }
        ]
      },
      taxes: {
        structure: [
          'Capital gains tax on 50% of crypto profits',
          'Business income tax if trading frequently',
          'Mining income taxed at full rate',
          'Must report in Canadian dollars (CAD)'
        ],
        recordKeeping: [
          'All transactions with CAD values',
          'Purchase and sale dates',
          'Exchange records',
          'Mining/staking records if applicable'
        ]
      },
      exchanges: {
        recommended: [
          {
            name: 'Coinsquare',
            description: 'Largest Canadian exchange',
            rating: '4.2',
            features: 'CAD trading, regulated, established'
          },
          {
            name: 'Bitbuy',
            description: 'User-friendly interface',
            rating: '4.3',
            features: 'Easy to use, good support, mobile app'
          },
          {
            name: 'Newton',
            description: 'Low fees',
            rating: '4.1',
            features: 'No trading fees, Interac e-Transfer'
          }
        ]
      }
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      status: 'Legal with FCA Oversight',
      statusColor: 'yellow',
      description: 'Regulated by FCA with strict advertising and consumer protection rules',
      legalStatus: [
        'Legal to buy, sell, and hold cryptocurrency',
        'Regulated by Financial Conduct Authority (FCA)',
        'Exchanges must be FCA registered',
        'Strict advertising rules for crypto promotions',
        'Consumer protection measures in place'
      ],
      gettingStarted: [
        'Choose an FCA-registered exchange',
        'Complete KYC with UK ID and proof of address',
        'Fund via bank transfer or Faster Payments',
        'Be aware of FCA consumer warnings',
        'Keep records for HMRC tax reporting',
        'Consider ISA implications for investments'
      ],
      onRamp: {
        methods: [
          {
            name: 'Bank Transfer (Faster Payments)',
            description: 'Most common UK method',
            fees: 'Free - £2',
            speed: 'Instant - 2 hours',
            limits: '£25,000 - £50,000'
          },
          {
            name: 'Debit Card',
            description: 'Instant but expensive',
            fees: '3.99%',
            speed: 'Instant',
            limits: '£500 - £2,000'
          },
          {
            name: 'Open Banking',
            description: 'Direct bank connection',
            fees: 'Free - £1',
            speed: '15 minutes',
            limits: '£10,000'
          }
        ],
        tip: 'Pro Tip: Many UK banks block crypto purchases. Revolut, Monzo, and Starling are generally crypto-friendly.'
      },
      offRamp: {
        methods: [
          {
            name: 'Bank Transfer',
            description: 'To UK bank account',
            fees: 'Free - £2',
            speed: '1-2 business days',
            limits: '£50,000+'
          },
          {
            name: 'Faster Payments',
            description: 'Instant withdrawal',
            fees: '£1 - £5',
            speed: 'Instant',
            limits: '£25,000'
          }
        ]
      },
      taxes: {
        structure: [
          'Capital Gains Tax on profits above £6,000 annual allowance',
          'Income tax on mining/staking rewards',
          'Different rates for basic (10%) vs higher (20%) rate taxpayers',
          'Must report to HMRC in Self Assessment'
        ],
        recordKeeping: [
          'All transactions in GBP values',
          'Purchase and disposal dates',
          'Costs and fees paid',
          'Records of gifts or transfers'
        ]
      },
      exchanges: {
        recommended: [
          {
            name: 'Coinbase',
            description: 'FCA registered, beginner-friendly',
            rating: '4.5',
            features: 'Regulated, insured, easy to use'
          },
          {
            name: 'Kraken',
            description: 'Advanced trading features',
            rating: '4.4',
            features: 'Low fees, staking, professional tools'
          },
          {
            name: 'Binance',
            description: 'Large selection, low fees',
            rating: '4.3',
            features: 'Many coins, advanced features'
          }
        ]
      }
    },
    {
      id: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      status: 'Fully Legal',
      statusColor: 'green',
      description: 'Well-regulated market with AUSTRAC oversight and clear tax guidance',
      legalStatus: [
        'Fully legal to buy, sell, and hold cryptocurrency',
        'Regulated by AUSTRAC (anti-money laundering)',
        'Exchanges must register as Digital Currency Exchanges',
        'Clear tax guidance from Australian Taxation Office (ATO)',
        'Growing institutional and retail adoption'
      ],
      gettingStarted: [
        'Choose an AUSTRAC-registered exchange',
        'Complete 100-point ID check with Australian documents',
        'Fund via bank transfer, POLi, or BPAY',
        'Start with major cryptocurrencies',
        'Keep detailed records for ATO reporting',
        'Consider SMSF for large investments'
      ],
      onRamp: {
        methods: [
          {
            name: 'Bank Transfer (NPP)',
            description: 'New Payments Platform',
            fees: 'Free - $2',
            speed: 'Instant - 1 hour',
            limits: '$50,000+'
          },
          {
            name: 'POLi Payments',
            description: 'Direct bank connection',
            fees: '$2 - $5',
            speed: 'Instant',
            limits: '$10,000'
          },
          {
            name: 'BPAY',
            description: 'Bill payment system',
            fees: 'Free - $2',
            speed: '1-2 hours',
            limits: '$20,000'
          }
        ],
        tip: 'Pro Tip: NPP transfers are fastest and cheapest. Some banks (like CBA) may delay crypto transactions.'
      },
      offRamp: {
        methods: [
          {
            name: 'Bank Transfer',
            description: 'To Australian bank account',
            fees: 'Free - $5',
            speed: '1-2 business days',
            limits: '$100,000+'
          },
          {
            name: 'NPP Withdrawal',
            description: 'Instant withdrawal',
            fees: '$2 - $10',
            speed: 'Instant',
            limits: '$50,000'
          }
        ]
      },
      taxes: {
        structure: [
          'Capital Gains Tax on crypto profits',
          '50% CGT discount if held >12 months',
          'Personal use asset exemption under $10,000',
          'Business income if trading frequently'
        ],
        recordKeeping: [
          'All transactions in AUD values',
          'Purchase and sale dates',
          'Costs and fees',
          'Wallet addresses and exchange records'
        ]
      },
      exchanges: {
        recommended: [
          {
            name: 'CoinSpot',
            description: 'Largest Australian exchange',
            rating: '4.3',
            features: 'AUD trading, many coins, local support'
          },
          {
            name: 'Swyftx',
            description: 'Low fees, good UX',
            rating: '4.4',
            features: 'Competitive fees, easy to use, tax tools'
          },
          {
            name: 'Independent Reserve',
            description: 'Institutional grade',
            rating: '4.2',
            features: 'High security, OTC trading, regulated'
          }
        ]
      }
    },
    {
      id: 'india',
      name: 'India',
      flag: '🇮🇳',
      status: 'Legal with High Taxes',
      statusColor: 'yellow',
      description: 'Legal but heavily taxed with 30% tax rate and 1% TDS on transactions',
      legalStatus: [
        'Legal to buy, sell, and hold cryptocurrency',
        'Not recognized as legal tender',
        'Heavy taxation regime since April 2022',
        '1% TDS (Tax Deducted at Source) on all transactions',
        'No set-off of losses allowed'
      ],
      gettingStarted: [
        'Choose a compliant Indian exchange (WazirX, CoinDCX, ZebPay)',
        'Complete KYC with Aadhaar/PAN verification',
        'Fund via UPI, IMPS, or bank transfer',
        'Understand tax implications before investing',
        'Keep detailed records for ITR filing',
        'Consider long-term holding strategy'
      ],
      onRamp: {
        methods: [
          {
            name: 'UPI',
            description: 'Most popular Indian method',
            fees: 'Free - ₹10',
            speed: 'Instant',
            limits: '₹1,00,000 - ₹5,00,000'
          },
          {
            name: 'IMPS',
            description: 'Immediate Payment Service',
            fees: '₹5 - ₹25',
            speed: 'Instant',
            limits: '₹2,00,000'
          },
          {
            name: 'Bank Transfer (NEFT/RTGS)',
            description: 'For large amounts',
            fees: '₹10 - ₹50',
            speed: '30 minutes - 2 hours',
            limits: '₹10,00,000+'
          }
        ],
        tip: 'Pro Tip: UPI is fastest and cheapest. Be aware of 1% TDS deduction on all purchases above ₹10,000.'
      },
      offRamp: {
        methods: [
          {
            name: 'Bank Transfer',
            description: 'To Indian bank account',
            fees: '₹10 - ₹100',
            speed: '1-3 business days',
            limits: '₹10,00,000+'
          },
          {
            name: 'UPI Withdrawal',
            description: 'Instant withdrawal',
            fees: 'Free - ₹25',
            speed: 'Instant',
            limits: '₹1,00,000'
          }
        ],
        warning: 'Important: 1% TDS applies on sales. 30% tax on profits with no loss offset allowed.'
      },
      taxes: {
        structure: [
          '30% tax on crypto gains (no exemption limit)',
          '1% TDS on transactions above ₹10,000',
          'No set-off of crypto losses against other income',
          'Must report in ITR-2 or ITR-3'
        ],
        recordKeeping: [
          'All transactions with INR values',
          'TDS certificates from exchanges',
          'Purchase and sale dates',
          'Exchange statements and receipts'
        ]
      },
      exchanges: {
        recommended: [
          {
            name: 'WazirX',
            description: 'Largest Indian exchange',
            rating: '4.1',
            features: 'INR trading, P2P, many altcoins'
          },
          {
            name: 'CoinDCX',
            description: 'Professional trading',
            rating: '4.2',
            features: 'Advanced tools, futures, lending'
          },
          {
            name: 'ZebPay',
            description: 'Beginner-friendly',
            rating: '4.0',
            features: 'Easy to use, educational content'
          }
        ]
      }
    },
    {
      id: 'vietnam',
      name: 'Vietnam',
      flag: '🇻🇳',
      status: 'Legal for Investment Only',
      statusColor: 'yellow',
      description: 'Legal to hold and trade but prohibited for payments and commerce',
      legalStatus: [
        'Legal for investment and trading purposes',
        'Prohibited for payments and commercial transactions',
        'Regulated by State Bank of Vietnam (SBV) and Ministry of Finance',
        'Can hold crypto but cannot use to buy goods/services',
        'Evolving regulatory framework with potential changes'
      ],
      gettingStarted: [
        'Choose exchanges with VND support (Remitano, VNDC)',
        'Complete KYC with Vietnamese ID verification',
        'Fund via bank transfer or P2P trading',
        'Understand investment-only restrictions',
        'Keep detailed records for tax purposes',
        'Stay updated on regulatory changes'
      ],
      onRamp: {
        methods: [
          {
            name: 'Bank Transfer',
            description: 'VietinBank, BIDV, Vietcombank, Techcombank',
            fees: '6,600 - 50,000 VND',
            speed: '30 minutes - 2 hours',
            limits: '500,000,000 VND daily'
          },
          {
            name: 'P2P Trading',
            description: 'Direct user-to-user trading',
            fees: '0.5% - 1%',
            speed: '15 minutes - 1 hour',
            limits: 'Varies by seller'
          }
        ],
        tip: 'Pro Tip: P2P trading often offers better rates but requires more caution. Use reputable platforms only.'
      },
      offRamp: {
        methods: [
          {
            name: 'Bank Withdrawal',
            description: 'To Vietnamese bank account',
            fees: '10,000 - 100,000 VND',
            speed: '1-3 business days',
            limits: '1,000,000,000 VND'
          },
          {
            name: 'P2P Cash Trading',
            description: 'Meet in person in major cities',
            fees: '0% - 2%',
            speed: 'Immediate',
            limits: 'Negotiable'
          },
          {
            name: 'International Wire',
            description: 'For large amounts',
            fees: '$15 - $50',
            speed: '3-5 business days',
            limits: '$50,000+'
          }
        ],
        warning: 'Important: Requires tax documentation for large withdrawals. Banking restrictions may apply.'
      },
      taxes: {
        structure: [
          'Progressive income tax (5-35%) on crypto gains',
          'Capital gains taxed as investment income',
          'Mandatory reporting in annual tax returns',
          'Different rates for residents vs non-residents'
        ],
        recordKeeping: [
          'All transactions with VND values',
          'Purchase and sale dates',
          'Exchange records and receipts',
          'Bank transfer confirmations'
        ]
      },
      exchanges: {
        local: [
          {
            name: 'Remitano',
            description: 'P2P platform with VND support',
            rating: '4.0',
            features: 'P2P trading, escrow service, local support'
          },
          {
            name: 'VNDC',
            description: 'Vietnamese stablecoin platform',
            rating: '3.8',
            features: 'VND-pegged stablecoin, local banking'
          },
          {
            name: 'Coinhako',
            description: 'Singapore-based with Vietnam support',
            rating: '4.1',
            features: 'Regulated, beginner-friendly, VND support'
          }
        ],
        global: [
          {
            name: 'Binance',
            description: 'P2P VND trading available',
            rating: '4.8',
            features: 'Largest selection, P2P VND, low fees'
          },
          {
            name: 'KuCoin',
            description: 'Wide altcoin selection',
            rating: '4.4',
            features: 'Many altcoins, trading bots, no KYC for small amounts'
          },
          {
            name: 'Huobi',
            description: 'Professional trading platform',
            rating: '4.3',
            features: 'Advanced tools, OTC trading, derivatives'
          }
        ]
      },
      compliance: {
        allowed: [
          'Buying and holding cryptocurrency as investment',
          'Trading between different cryptocurrencies',
          'Transferring to personal wallets',
          'International transfers for investment'
        ],
        prohibited: [
          'Using crypto to pay for goods or services',
          'Accepting crypto payments for business',
          'Crypto ATM operations',
          'Issuing crypto-backed loans'
        ]
      }
    },
    {
      id: 'brazil',
      name: 'Brazil',
      flag: '🇧🇷',
      status: 'Fully Legal',
      statusColor: 'green',
      description: 'Comprehensive regulatory framework with PIX integration and favorable tax structure',
      legalStatus: [
        'Fully legal with comprehensive CVM and BCB regulation',
        'One of the most crypto-friendly frameworks in Latin America',
        'Clear rules for exchanges and taxation since 2022',
        'PIX payment system integration for instant transfers',
        'Growing institutional adoption and Bitcoin ETFs'
      ],
      gettingStarted: [
        'Choose a CVM-registered exchange (Mercado Bitcoin, Bitso, NovaDAX)',
        'Complete KYC with CPF and Brazilian documents',
        'Fund via PIX for instant, cheap transfers',
        'Understand tax-free threshold for small investors',
        'Keep records for monthly DARF payments if needed',
        'Consider dollar-cost averaging strategy'
      ],
      onRamp: {
        methods: [
          {
            name: 'PIX',
            description: 'Brazil\'s instant payment system - Most popular',
            fees: 'Free - 0.5%',
            speed: 'Instant',
            limits: 'R$ 50,000 daily'
          },
          {
            name: 'Bank Transfer (TED/DOC)',
            description: 'Traditional bank transfer',
            fees: 'R$ 5 - R$ 15',
            speed: '1-2 hours',
            limits: 'R$ 100,000+'
          },
          {
            name: 'Credit/Debit Card',
            description: 'Instant but higher fees',
            fees: '2.9% - 6.9%',
            speed: 'Instant',
            limits: 'R$ 5,000 - R$ 20,000'
          }
        ],
        tip: 'Pro Tip: PIX is revolutionary for crypto in Brazil - instant, cheap, and available 24/7. Most exchanges offer PIX integration.'
      },
      offRamp: {
        methods: [
          {
            name: 'PIX Withdrawal',
            description: 'Instant withdrawal to Brazilian bank',
            fees: 'Free - 1%',
            speed: 'Instant',
            limits: 'R$ 50,000 daily'
          },
          {
            name: 'Bank Transfer (TED)',
            description: 'Traditional withdrawal method',
            fees: 'R$ 5 - R$ 20',
            speed: '1-2 hours',
            limits: 'R$ 100,000+'
          },
          {
            name: 'P2P Trading',
            description: 'Direct user-to-user sales',
            fees: '0.5% - 1.5%',
            speed: '15 minutes - 1 hour',
            limits: 'Varies by buyer'
          }
        ]
      },
      taxes: {
        structure: [
          'Day Trading: 20% tax on all gains',
          'Long-term Holdings: 15% tax on gains over R$ 35,000/month',
          'Small Sales: Tax-free under R$ 35,000/month in sales',
          'DARF payment system for monthly tax payments'
        ],
        recordKeeping: [
          'All transactions with BRL values',
          'Monthly sales totals for tax threshold',
          'Purchase dates for day trading vs long-term classification',
          'Exchange statements and DARF payment receipts'
        ],
        tip: 'Pro Tip: Brazil has one of the most favorable tax structures globally - small investors pay no tax on sales under R$ 35,000/month!'
      },
      exchanges: {
        local: [
          {
            name: 'Mercado Bitcoin',
            description: 'Largest Brazilian exchange',
            rating: '4.3',
            features: 'PIX integration, CVM registered, local support'
          },
          {
            name: 'Bitso',
            description: 'Mexican exchange with Brazil operations',
            rating: '4.4',
            features: 'Low fees, PIX support, mobile-first'
          },
          {
            name: 'NovaDAX',
            description: 'Professional trading platform',
            rating: '4.2',
            features: 'Advanced tools, staking, CVM compliant'
          },
          {
            name: 'Foxbit',
            description: 'Established Brazilian platform',
            rating: '4.1',
            features: 'PIX integration, educational content, regulated'
          }
        ],
        global: [
          {
            name: 'Binance',
            description: 'Global leader with PIX and P2P BRL',
            rating: '4.8',
            features: 'Lowest fees, huge selection, PIX support'
          },
          {
            name: 'KuCoin',
            description: 'Wide altcoin selection',
            rating: '4.4',
            features: 'Many altcoins, trading bots, P2P BRL'
          },
          {
            name: 'OKX',
            description: 'Professional trading features',
            rating: '4.3',
            features: 'Advanced trading, derivatives, P2P BRL'
          }
        ]
      },
      compliance: {
        requirements: [
          'CPF verification for all exchanges',
          'CVM registration verification for local exchanges',
          'Monthly tax reporting if sales exceed R$ 35,000',
          'DARF payment system for tax payments'
        ],
        benefits: [
          'Tax-free trading for small investors',
          'PIX instant payment integration',
          'Clear regulatory framework',
          'Growing institutional support'
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cryptocurrency Regulatory Compliance by Country - 2025 Guide</title>
        <meta name="description" content="Complete guide to cryptocurrency regulations, legal status, and compliance requirements by country. Stay compliant with local crypto laws worldwide." />
        <meta name="keywords" content="cryptocurrency regulation, crypto legal status, compliance guide, crypto laws by country, bitcoin regulation" />
        <meta property="og:title" content="Cryptocurrency Regulatory Compliance by Country - 2025 Guide" />
        <meta property="og:description" content="Navigate crypto regulations worldwide with our comprehensive compliance guide covering legal status, taxes, and requirements by country." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://cryptostarterguide.com/regulatory-compliance" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Regulatory Compliance
              <span className="text-purple-300"> by Country</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Navigate cryptocurrency regulations worldwide with confidence. Get country-specific guidance on legal status, taxes, and compliance requirements.
            </p>
            <div className="bg-purple-800 bg-opacity-50 rounded-lg p-6 inline-block">
              <p className="text-purple-100 text-lg">
                <Globe className="h-6 w-6 inline mr-2" />
                <strong>Updated January 2025</strong> • Covering major markets worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-yellow-50 border-b border-yellow-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-800 mb-2">Important Legal Disclaimer</h3>
              <p className="text-yellow-700">
                This information is for educational purposes only and should not be considered legal or tax advice. 
                Cryptocurrency regulations change frequently. Always consult with qualified legal and tax professionals 
                in your jurisdiction before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Global Regulatory Landscape</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Fully Legal</h3>
              <p className="text-green-700">
                Countries with clear, supportive regulatory frameworks for cryptocurrency trading and investment.
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Regulated</h3>
              <p className="text-yellow-700">
                Legal but with specific restrictions, licensing requirements, or complex compliance rules.
              </p>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-800 mb-2">Restricted</h3>
              <p className="text-red-700">
                Significant limitations, banking restrictions, or unclear legal status requiring extra caution.
              </p>
            </div>
          </div>
        </section>

        {/* Country-Specific Guides */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Country-Specific Compliance Guides</h2>
          
          <div className="space-y-6">
            {countries.map((country) => (
              <div key={country.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Country Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleCountry(country.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{country.name}</h3>
                        <p className="text-gray-600">{country.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        country.statusColor === 'green' ? 'bg-green-100 text-green-800' :
                        country.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {country.status}
                      </span>
                      
                      {expandedCountry === country.id ? (
                        <ChevronUp className="h-6 w-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedCountry === country.id && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Legal Status */}
                      <div className="bg-white rounded-lg p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          Legal Status (2025)
                        </h4>
                        <ul className="space-y-2">
                          {country.legalStatus.map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Getting Started */}
                      <div className="bg-white rounded-lg p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <Shield className="h-5 w-5 text-blue-600 mr-2" />
                          Getting Started: Step-by-Step
                        </h4>
                        <ol className="space-y-2">
                          {country.gettingStarted.map((step, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                                {index + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    {/* On-ramp Methods */}
                    <div className="mt-8 bg-white rounded-lg p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                        On-ramp: Getting {country.id === 'eu' ? 'EUR' : country.id === 'us' ? 'USD' : country.id === 'canada' ? 'CAD' : country.id === 'uk' ? 'GBP' : country.id === 'australia' ? 'AUD' : country.id === 'india' ? 'INR' : country.id === 'vietnam' ? 'VND' : 'BRL'} Into Crypto
                      </h4>
                      
                      <div className="overflow-x-auto mb-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 px-3 font-semibold text-gray-900">Payment Method</th>
                              <th className="text-left py-2 px-3 font-semibold text-gray-900">Fees</th>
                              <th className="text-left py-2 px-3 font-semibold text-gray-900">Speed</th>
                              <th className="text-left py-2 px-3 font-semibold text-gray-900">Daily Limits</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {country.onRamp.methods.map((method, index) => (
                              <tr key={index}>
                                <td className="py-3 px-3">
                                  <div>
                                    <div className="font-medium text-gray-900">{method.name}</div>
                                    <div className="text-gray-600 text-xs">{method.description}</div>
                                  </div>
                                </td>
                                <td className="py-3 px-3 text-green-600 font-medium">{method.fees}</td>
                                <td className="py-3 px-3">{method.speed}</td>
                                <td className="py-3 px-3">{method.limits}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {country.onRamp.tip && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <p className="text-blue-800 text-sm">{country.onRamp.tip}</p>
                        </div>
                      )}
                    </div>

                    {/* Off-ramp Methods */}
                    <div className="mt-8 bg-white rounded-lg p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="h-5 w-5 text-red-600 mr-2 transform rotate-180" />
                        Off-ramp: Converting Crypto Back to {country.id === 'eu' ? 'EUR' : country.id === 'us' ? 'USD' : country.id === 'canada' ? 'CAD' : country.id === 'uk' ? 'GBP' : country.id === 'australia' ? 'AUD' : country.id === 'india' ? 'INR' : country.id === 'vietnam' ? 'VND' : 'BRL'}
                      </h4>
                      
                      <div className="overflow-x-auto mb-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 px-3 font-semibold text-gray-900">Withdrawal Method</th>
                              <th className="text-left py-2 px-3 font-semibold text-gray-900">Fees</th>
                              <th className="text-left py-2 px-3 font-semibold text-gray-900">Processing Time</th>
                              <th className="text-left py-2 px-3 font-semibold text-gray-900">Daily Limits</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {country.offRamp.methods.map((method, index) => (
                              <tr key={index}>
                                <td className="py-3 px-3">
                                  <div>
                                    <div className="font-medium text-gray-900">{method.name}</div>
                                    <div className="text-gray-600 text-xs">{method.description}</div>
                                  </div>
                                </td>
                                <td className="py-3 px-3 text-green-600 font-medium">{method.fees}</td>
                                <td className="py-3 px-3">{method.speed}</td>
                                <td className="py-3 px-3">{method.limits}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {country.offRamp.warning && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <div className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                            <p className="text-yellow-800 text-sm">{country.offRamp.warning}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tax & Record-Keeping */}
                    <div className="mt-8 bg-white rounded-lg p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Shield className="h-5 w-5 text-purple-600 mr-2" />
                        Tax & Record-Keeping {country.id === 'eu' ? '(Varies by Country)' : ''}
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">
                            {country.id === 'eu' ? 'Common EU Tax Rules:' : 'Tax Structure:'}
                          </h5>
                          <ul className="space-y-1">
                            {country.taxes.structure.map((item, index) => (
                              <li key={index} className="flex items-start text-sm text-gray-700">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Record-Keeping Requirements:</h5>
                          <ul className="space-y-1">
                            {country.taxes.recordKeeping.map((item, index) => (
                              <li key={index} className="flex items-start text-sm text-gray-700">
                                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {country.taxes.note && (
                        <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-3">
                          <p className="text-purple-800 text-sm">{country.taxes.note}</p>
                        </div>
                      )}

                      {country.taxes.tip && (
                        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                          <p className="text-green-800 text-sm">{country.taxes.tip}</p>
                        </div>
                      )}
                    </div>

                    {/* Recommended Exchanges */}
                    <div className="mt-8 bg-white rounded-lg p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <ExternalLink className="h-5 w-5 text-blue-600 mr-2" />
                        Recommended Exchanges for {country.name} Users
                      </h4>
                      
                      {/* EU-specific layout */}
                      {country.id === 'eu' && (
                        <div className="space-y-6">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              EU-Based (MiCA Licensed)
                            </h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              {country.exchanges.euBased.map((exchange, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h6 className="font-semibold text-gray-900">{exchange.name}</h6>
                                    <div className="flex items-center text-sm">
                                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                      <span>{exchange.rating}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-2">{exchange.description}</p>
                                  <p className="text-xs text-gray-500 mb-3">{exchange.features}</p>
                                  <div className="flex items-center justify-between">
                                    <span className={`text-xs px-2 py-1 rounded ${
                                      exchange.eurSupport ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                    }`}>
                                      {exchange.eurSupport ? '✓ EUR Support' : 'No EUR'}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Globe className="h-4 w-4 text-blue-600 mr-2" />
                              Global (EU Accessible)
                            </h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              {country.exchanges.global.map((exchange, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h6 className="font-semibold text-gray-900">{exchange.name}</h6>
                                    <div className="flex items-center text-sm">
                                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                      <span>{exchange.rating}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-2">{exchange.description}</p>
                                  <p className="text-xs text-gray-500 mb-3">{exchange.features}</p>
                                  <div className="flex items-center justify-between">
                                    <span className={`text-xs px-2 py-1 rounded ${
                                      exchange.eurSupport ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                      {exchange.eurSupport ? '✓ EUR Support' : '✗ No EUR'}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Vietnam-specific layout */}
                      {country.id === 'vietnam' && (
                        <div className="space-y-6">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3">Local Vietnamese Platforms</h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              {country.exchanges.local.map((exchange, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h6 className="font-semibold text-gray-900">{exchange.name}</h6>
                                    <div className="flex items-center text-sm">
                                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                      <span>{exchange.rating}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-2">{exchange.description}</p>
                                  <p className="text-xs text-gray-500">{exchange.features}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3">Global Exchanges (VND Support)</h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              {country.exchanges.global.map((exchange, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h6 className="font-semibold text-gray-900">{exchange.name}</h6>
                                    <div className="flex items-center text-sm">
                                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                      <span>{exchange.rating}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-2">{exchange.description}</p>
                                  <p className="text-xs text-gray-500">{exchange.features}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Brazil-specific layout */}
                      {country.id === 'brazil' && (
                        <div className="space-y-6">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3">Local Brazilian Exchanges</h5>
                            <div className="grid md:grid-cols-2 gap-4">
                              {country.exchanges.local.map((exchange, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h6 className="font-semibold text-gray-900">{exchange.name}</h6>
                                    <div className="flex items-center text-sm">
                                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                      <span>{exchange.rating}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-2">{exchange.description}</p>
                                  <p className="text-xs text-gray-500">{exchange.features}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3">Global Exchanges (BRL Support)</h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              {country.exchanges.global.map((exchange, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h6 className="font-semibold text-gray-900">{exchange.name}</h6>
                                    <div className="flex items-center text-sm">
                                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                      <span>{exchange.rating}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-2">{exchange.description}</p>
                                  <p className="text-xs text-gray-500">{exchange.features}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Standard layout for other countries */}
                      {!['eu', 'vietnam', 'brazil'].includes(country.id) && (
                        <div className="grid md:grid-cols-3 gap-4">
                          {country.exchanges.recommended.map((exchange, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-gray-900">{exchange.name}</h6>
                                <div className="flex items-center text-sm">
                                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                  <span>{exchange.rating}</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{exchange.description}</p>
                              <p className="text-xs text-gray-500">{exchange.features}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Vietnam Compliance Section */}
                    {country.id === 'vietnam' && country.compliance && (
                      <div className="mt-8 bg-white rounded-lg p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <Shield className="h-5 w-5 text-yellow-600 mr-2" />
                          Compliance: What's Allowed vs Prohibited
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-green-800 mb-2 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Allowed Activities
                            </h5>
                            <ul className="space-y-1">
                              {country.compliance.allowed.map((item, index) => (
                                <li key={index} className="flex items-start text-sm text-green-700">
                                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-red-800 mb-2 flex items-center">
                              <AlertTriangle className="h-4 w-4 mr-2" />
                              Prohibited Activities
                            </h5>
                            <ul className="space-y-1">
                              {country.compliance.prohibited.map((item, index) => (
                                <li key={index} className="flex items-start text-sm text-red-700">
                                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Brazil Compliance Section */}
                    {country.id === 'brazil' && country.compliance && (
                      <div className="mt-8 bg-white rounded-lg p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          Brazilian Compliance Requirements & Benefits
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Requirements</h5>
                            <ul className="space-y-1">
                              {country.compliance.requirements.map((item, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-700">
                                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Benefits</h5>
                            <ul className="space-y-1">
                              {country.compliance.benefits.map((item, index) => (
                                <li key={index} className="flex items-start text-sm text-green-700">
                                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* EU Beginner Compliance Checklist */}
                    {country.id === 'eu' && country.checklist && (
                      <div className="mt-8 bg-white rounded-lg p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          EU Beginner Compliance Checklist
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Before You Start:</h5>
                            <ul className="space-y-2">
                              {country.checklist.beforeStart.map((item, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">After Your First Purchase:</h5>
                            <ul className="space-y-2">
                              {country.checklist.afterPurchase.map((item, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* General Compliance Tips */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Universal Compliance Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Before You Start:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Research your local laws and regulations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Choose regulated, reputable exchanges
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Understand tax implications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Set up proper record-keeping systems
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Ongoing Compliance:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Keep detailed transaction records
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Report crypto income and gains
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Stay updated on regulatory changes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Consult professionals for large amounts
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegulatoryCompliance;