import "./Contact.css";
import { MdEmail, MdPhone, MdAccessTime } from "react-icons/md";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import contactHeroImage from "../assets/img2.png";

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-image-container">
          <img
            src={contactHeroImage}
            alt="Chef preparing food in a kitchen"
            className="hero-background-image"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
            }}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Contact Chef's Pal</h1>
          <p className="hero-subtitle">
            We'd love to hear from you! Whether you have questions, feedback, or
            suggestions, our team is here to help improve your cooking
            experience.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <div className="contact-methods">
        <div className="contact-card">
          <MdEmail className="contact-icon" />
          <h3>Email Us</h3>
          <p>For general inquiries and support</p>
          <a href="mailto:support@chefspal.com" className="contact-link">
            support@chefspal.com
          </a>
        </div>

        <div className="contact-card">
          <MdPhone className="contact-icon" />
          <h3>Call Us</h3>
          <p>Available Monday to Friday</p>
          <a href="tel:+2349015096441" className="contact-link">
            +234 901 509 6441
          </a>
          <div className="hours">
            <MdAccessTime /> 9AM - 6PM WAT
          </div>
        </div>

        <div className="contact-card">
          <div className="social-icons">
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaFacebook className="social-icon" />
          </div>
          <h3>Connect With Us</h3>
          <p>Follow for recipes and updates</p>
          <div className="social-links">
            <a href="#" className="social-link">
              @chefspal
            </a>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="contact-feedback">
        <h2>Share Your Feedback</h2>
        <p>
          Have a recipe idea or feature request? Your input helps us improve!
        </p>
        <form className="feedback-form">
          <textarea
            placeholder="Your suggestions..."
            className="feedback-input"
            rows="5"
          ></textarea>
          <button type="submit" className="submit-btn">
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
