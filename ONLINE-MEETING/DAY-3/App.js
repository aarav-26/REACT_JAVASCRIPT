import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Admin from './Admin';
import CardCarousel from './components/CardCarousel';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import './App.css';
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <Router>
        <nav className="header-container">
          <div className="brand">
            <Link to="/">MEETOPIA</Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>Meetings</li>
            <li>
              <Link to="/contact" >Contact us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <CardCarousel />
                <Footer />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
