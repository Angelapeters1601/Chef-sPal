import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3 className="footer-title">Contact Us</h3>
          <p>
            <MdLocationOn size={30} color="#db8e1e" /> Benin, City, Edo State,
            Nigeria
          </p>
          <p>
            <MdEmail size={30} color="#db8e1e" /> angelnwattaha@gmail.com
          </p>
          <p>
            <MdPhone size={30} color="#db8e1e" /> + (234) - 810 435 2294
          </p>
        </div>
        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <h3 className="footer-title">Follow Us</h3>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Chef'sPal by Angela. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
