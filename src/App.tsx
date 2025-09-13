import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoMarketBanner from './components/CryptoMarketBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import LearnCrypto from './pages/LearnCrypto';
import ToolsReviews from './pages/ToolsReviews';
import NewsAnalysis from './pages/NewsAnalysis';
import StartHere from './pages/StartHere';
import BeginnerGuide from './pages/BeginnerGuide';
import ExchangeReview from './pages/ExchangeReview';
import WalletReview from './pages/WalletReview';
import UnderstandingCrypto from './pages/UnderstandingCrypto';
import BinanceReview from './pages/BinanceReview';
import CoinbaseReview from './pages/CoinbaseReview';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <CryptoMarketBanner />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/learn" element={<LearnCrypto />} />
          <Route path="/tools" element={<ToolsReviews />} />
          <Route path="/news" element={<NewsAnalysis />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/guide/beginner-bitcoin" element={<BeginnerGuide />} />
          <Route path="/review/binance-vs-coinbase" element={<ExchangeReview />} />
          <Route path="/review/ledger-vs-trezor" element={<WalletReview />} />
          <Route path="/guide/understanding-crypto" element={<UnderstandingCrypto />} />
          <Route path="/review/binance" element={<BinanceReview />} />
          <Route path="/review/coinbase" element={<CoinbaseReview />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;