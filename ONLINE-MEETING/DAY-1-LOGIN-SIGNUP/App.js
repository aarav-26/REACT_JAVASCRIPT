import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Admin from './Admin';
import './App.css'
const App = () => {
  return (
    <div>
    <Router>
      <nav>
        <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
            About
          </li>
          <li>
            Meetings
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;
