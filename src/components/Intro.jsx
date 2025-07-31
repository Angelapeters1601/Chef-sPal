import recipe4 from "../assets/recipe4.jpg";
import "./Intro.css";
import { GiCookingPot, GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <section className="intro-section">
      {/* Decorative elements */}
      <div className="floating-icon icon-1">
        <GiCookingPot />
      </div>
      <div className="floating-icon icon-2">
        <GiKnifeFork />
      </div>

      <div className="intro-container">
        <div className="intro-image-wrapper">
          <img src={recipe4} className="intro-img" alt="Delicious cuisine" />
          <div className="image-frame"></div>
          <div className="image-highlight"></div>
        </div>

        <div className="intro-text-content">
          <div className="title-wrapper">
            <h1 className="intro-title">
              <span className="title-line">Welcome to</span>
              <span className="title-accent">Chef's Pal</span>
            </h1>
            <div className="title-underline"></div>
          </div>

          <p className="intro-description">
            Where culinary adventure begins! Discover and explore a diverse
            range of recipes tailored to your tastes and dietary needs.
          </p>

          <div className="cta-container">
            <Link to="/recipes">
              <button className="cta-button">
                <span>Start Cooking</span>
                <div className="button-hover-effect"></div>
              </button>
            </Link>
            <div className="cta-decoration">
              <div className="dot"></div>
              <div className="line"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
