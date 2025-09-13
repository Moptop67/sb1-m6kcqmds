import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Coins } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Affiliate Disclosure Banner */}
      <div className="bg-blue-900 text-white text-center py-2 text-sm">
        <p>
          📢 This site contains affiliate links. We may earn a commission when you click or make purchases. 
          <Link to="/disclosure" className="underline ml-1">Learn more</Link>
        </p>
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-blue-900">CryptoStarterGuide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setIsLearnDropdownOpen(true)}
                onMouseLeave={() => setIsLearnDropdownOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 font-medium"
              >
                <span>Learn Crypto</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isLearnDropdownOpen && (
                <div
                  onMouseEnter={() => setIsLearnDropdownOpen(true)}
                  onMouseLeave={() => setIsLearnDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-lg border py-2 z-50"
                >
                  <Link to="/start-here" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Start Here (Complete Beginners)
                  </Link>
                  <Link to="/learn" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Beginner Basics
                  </Link>
                  <Link to="/learn#intermediate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Intermediate Topics
                  </Link>
                  <Link to="/learn#advanced" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Advanced Topics
                  </Link>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button
                onMouseEnter={() => setIsToolsDropdownOpen(true)}
                onMouseLeave={() => setIsToolsDropdownOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 font-medium"
              >
                <span>Tools & Reviews</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isToolsDropdownOpen && (
                <div
                  onMouseEnter={() => setIsToolsDropdownOpen(true)}
                  onMouseLeave={() => setIsToolsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border py-2 z-50"
                >
                  <Link to="/tools#exchanges" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Exchange Reviews
                  </Link>
                  <Link to="/tools#wallets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Wallet Reviews
                  </Link>
                  <Link to="/tools#trading" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Trading Tools
                  </Link>
                  <Link to="/tools#tax" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Tax Software
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/news" className="text-gray-700 hover:text-blue-900 font-medium">
              News & Analysis
            </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/start-here" className="text-gray-700 hover:text-blue-900">
                Start Here
              </Link>
              <Link to="/learn" className="text-gray-700 hover:text-blue-900">
                Learn Crypto
              </Link>
              <Link to="/tools" className="text-gray-700 hover:text-blue-900">
                Tools & Reviews
              </Link>
              <Link to="/news" className="text-gray-700 hover:text-blue-900">
                News & Analysis
              </Link>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-full">
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;