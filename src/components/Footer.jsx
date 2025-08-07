import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/*  Logo and Tagline  */}
                <div className="footer-section logo">
                    <div className="logo-content">
                        <img src="/images/logo.png" alt="Jhigu Newa Chhe" className="footer-logo" />
                        <h1>Jhigu Newa Chhe</h1>
                    </div>

                    <div className="logo-text">
                        <p>Authentic Newari Cuisine from Heart Of Kathmandu</p>
                        <p>Chunikhel, Budhanilkantha-13, Kathmandu</p>
                    </div>
                </div>


                {/*  Quick Links  */}
                <div className="footer-section links">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/booknow">Book Now</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/*  Newsletter Signup  */}
                <div className="footer-section newsletter">
                    <h3>Join Our Mailing List</h3>
                    <p>Get updates on seasonal menus, offers & cultural events.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                {/*  Opening Hours & Social  */}
                <div className="footer-section opening hours">
                    <h3>Opening Hours</h3>
                    <p>Mon-Fri: 10am-9pm</p>
                    <p>Sun-Sat: 10am-10pm</p>

                    <div className="social-icons">
                        <Link to="https://www.facebook.com/"><img src="/images/fb.svg" alt="Facebook" /></Link>
                        <Link to="https://www.instagram.com/"><img src="/images/insta.svg" alt="Instagram" /></Link>
                        <Link to="https://x.com/"><img src="/images/twitter.svg" alt="Twitter" /></Link>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Jhigu Newa Chhe. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
