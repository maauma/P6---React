import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AccommodationPage from './pages/AccommodationPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import Style from './css/style.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/accommodation/:id" element={ <AccommodationPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
