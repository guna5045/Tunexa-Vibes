import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import SongDetail from './pages/SongDetail';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { SongsProvider } from './context/SongsContext';
import ContactButton from './components/ContactButton';

function App() {
  return (
    <SongsProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/song/:id" element={<SongDetail />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
          <ContactButton />
        </Layout>
      </Router>
    </SongsProvider>
  );
}

export default App;
