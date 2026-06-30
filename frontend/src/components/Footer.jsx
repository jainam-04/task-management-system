import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Tasky</h2>

          <p>Manage your tasks easily and stay productive every day.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <p>Instagram</p>

          <p>Twitter</p>

          <p>LinkedIn</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tasky. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
