import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css';
import './routes/Signin';
import './routes/Watchlist';
import Footer from './components/FooterComponent';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
