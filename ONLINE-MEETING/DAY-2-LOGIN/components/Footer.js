import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: <a href="mailto:meetopia@gmail.com" className="footer-link">meetopia@gmail.com</a></p>
        <p>Address: 123 Main Street, EB Colony, Coimbatore</p>
      </div>

      <div className="footer-section">
        <h4>Features</h4>
        <ul>
          <li><a href="www.google.com" className="footer-link">Feature 1</a></li>
          <li><a href="www.google.com" className="footer-link">Feature 2</a></li>
          <li><a href="www.google.com" className="footer-link">Feature 3</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <a href="www.google.com" className="footer-link">Facebook</a> | <a href="www.google.com" className="footer-link">Twitter</a>
      </div>
    </div>
  );
};

export default Footer;
