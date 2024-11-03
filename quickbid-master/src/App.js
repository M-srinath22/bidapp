import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SellPage from './components/SellPage';
import BidPage from './components/BidPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import WalletPage from './components/WalletPage';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuctionPage from './components/AuctionPage';

function App() {
  // State to manage the products added via SellPage
  const [products, setProducts] = useState([]);

  // Define the addProduct function
  const addProduct = (product) => {
    setProducts([...products, product]); // Add the new product to the list
    console.log('New product added:', product);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sell"
          element={<SellPage addProduct={addProduct} />} // Pass addProduct as a prop to SellPage
        />
        <Route
          path="/bid"
          element={<BidPage bids={products} />} // Pass the products as bids to BidPage
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auction" element={<AuctionPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
