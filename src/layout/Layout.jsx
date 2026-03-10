import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BuyMeCoffee from '../components/BuyMeCoffee';

import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <Header />
      <main
        key={location.pathname}
        className="page-transition"
        style={{ flex: 1, padding: '20px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}
      >
        {children}
      </main>
      <BuyMeCoffee />
      <Footer />
    </div>
  );
};

export default Layout;
