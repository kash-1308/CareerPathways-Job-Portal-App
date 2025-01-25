import React from 'react';
import './Footer.css';
import logo from '../Navbar/logosss-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">
        <div className="footer-column">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <p className="footer-text">
           At Career Pathways, our mission is to bridge the gap between job seekers and employers by providing easy access to job opportunities, career resources, skill-building tools and professional growth. 
          </p>
          <div className="footer-social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>


        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="address">
            <i className="fa-solid fa-location-dot"></i>
            <span className="footer-text">
            <i class="ri-map-pin-2-fill"></i> <a href="https://www.google.com/maps/dir/26.8458542,80.8945014/INCUGUS+Cowork+-+Vibhuti+Khand,+Gomti+Nagar,+C-84,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010/@26.8553115,80.9050941,13z/data=!3m1!4b1!4m9!" target="_blank" rel="noopener noreferrer">
                Ground Floor, Tower 1, C-84, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India
              </a>
            </span>
          </div>
          <div className="phone">
            <span className="footer-text">
            <i class="ri-phone-fill"></i> <a href="tel:+919670941377">+91 9670941377</a>
            </span>
          </div>
          <div className="email-footer">
            <span className="footer-text">
            <i class="ri-mail-unread-fill"></i> <a href="mailto:careerpathways@gmail.com">careerpathways@gmail.com</a>
            </span>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/SignUp" className="footer-link">Sign-Up</a></li>
            <li><a href="/login" className="footer-link">Login</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">Copyright © CareerPathways 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer; 