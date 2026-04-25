import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>About Us</h3>
                        <p>ConnectCU is a platform designed to help Chitkara University students network and collaborate.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/features">Features</NavLink></li>
                            <li><NavLink to="/profiles">Students</NavLink></li>
                            <li><NavLink to="/communities">Communities</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <ul className="footer-links">
                            <li>Email: support@connectcu.com</li>
                            <li>Phone: +91 123 456 7890</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/" className="social-link" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer">F</a>
                            <a href="https://x.com/" className="social-link" aria-label="Twitter" title="Twitter" target="_blank" rel="noopener noreferrer">T</a>
                            <a href="https://www.instagram.com/" className="social-link" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">I</a>
                            <a href="https://www.linkedin.com/" className="social-link" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">L</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 ConnectCU - Chitkara University. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
