import React from 'react';
import { Link } from 'react-router-dom';
import { Coins, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coins className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">CryptoStarterGuide</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted source for cryptocurrency education and honest reviews. Learn crypto from beginner to pro.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><Link to="/start-here" className="text-gray-400 hover:text-white">Start Here</Link></li>
              <li><Link to="/learn" className="text-gray-400 hover:text-white">Beginner Guides</Link></li>
              <li><Link to="/learn#intermediate" className="text-gray-400 hover:text-white">Intermediate</Link></li>
              <li><Link to="/learn#advanced" className="text-gray-400 hover:text-white">Advanced</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools & Reviews</h3>
            <ul className="space-y-2">
              <li><Link to="/tools#exchanges" className="text-gray-400 hover:text-white">Exchange Reviews</Link></li>
              <li><Link to="/tools#wallets" className="text-gray-400 hover:text-white">Wallet Reviews</Link></li>
              <li><Link to="/tools#trading" className="text-gray-400 hover:text-white">Trading Tools</Link></li>
              <li><Link to="/tools#tax" className="text-gray-400 hover:text-white">Tax Software</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Compliance & Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/regulatory-compliance" className="text-gray-400 hover:text-white">Regulatory Compliance</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/disclosure" className="text-gray-400 hover:text-white">Affiliate Disclosure</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CryptoStarterGuide.com. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Cryptocurrency investments carry risk. Past performance does not guarantee future results. 
            This site contains affiliate links and we may earn commissions from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;