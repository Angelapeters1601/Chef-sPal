import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3 className="footer-title">Contact Us</h3>
          <p>
            <MdLocationOn size={20} color="#db8e1e" /> Lagos, Nigeria
          </p>
          <p>
            <MdEmail size={20} color="#db8e1e" /> angelnwattaha@gmail.com
          </p>
          <p>
            <MdPhone size={20} color="#db8e1e" /> + (234) - 810 435 2294
          </p>
        </div>
        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <h3 className="footer-title">Follow Us</h3>
          <a
            href="https://github.com/Angelapeters1601"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com/nwattah.angela"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/mavoolumma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/angelapeters"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/nwattah-angela"
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
