import { GiCookingPot, GiMeal, GiCook } from "react-icons/gi";
import { FaHeart, FaClock, FaLeaf } from "react-icons/fa";
import servicesHeroImage from "../assets/recipe.webp";
import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  const serviceCards = [
    {
      icon: <GiCookingPot className="service-icon" />,
      title: "Recipe Discovery",
      description:
        "Explore thousands of chef-curated recipes with our intelligent search and filtering system tailored to your dietary preferences.",
      feature: "Personalized recommendations",
    },
    {
      icon: <GiMeal className="service-icon" />,
      title: "Meal Planning",
      description:
        "Generate weekly meal plans that balance nutrition and variety, with automatic grocery lists to simplify your shopping.",
      feature: "Diet-specific plans available",
    },
    {
      icon: <GiCook className="service-icon" />,
      title: "Cooking Guidance",
      description:
        "Step-by-step video tutorials and interactive cooking timers to help you master techniques from basic to advanced.",
      feature: "Chef-crafted tutorials",
    },
    {
      icon: <FaHeart className="service-icon" />,
      title: "Health Tracking",
      description:
        "Monitor nutritional intake with detailed breakdowns of calories, macros, and micronutrients for every recipe.",
      feature: "Fitness goal integration",
    },
    {
      icon: <FaClock className="service-icon" />,
      title: "Time-Saving Tools",
      description:
        "Quick 30-minute meals, one-pot recipes, and meal prep solutions designed for busy lifestyles.",
      feature: "Efficiency-focused filters",
    },
    {
      icon: <FaLeaf className="service-icon" />,
      title: "Sustainable Cooking",
      description:
        "Learn zero-waste techniques and discover recipes that make the most of seasonal, local ingredients.",
      feature: "Seasonal ingredient guides",
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}

      <section className="services-hero">
        <div className="hero-image-container">
          <img
            src={servicesHeroImage}
            alt="Chef preparing food"
            className="hero-background-image"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
            }}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Our Culinary Services</h1>
          <p className="hero-subtitle">
            Elevate your cooking experience with our expertly crafted tools and
            resources
          </p>
          <div className="hero-scroll-indicator">
            <span>Explore</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-container">
        <div className="services-grid">
          {serviceCards.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-feature">
                <span className="feature-badge">Featured</span>
                {service.feature}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <h2 className="cta-title">Ready to Transform Your Cooking?</h2>
        <p className="cta-text">
          Join thousands of home chefs who've elevated their skills with Chef's
          Pal
        </p>
        <Link to="/recipes">
          <button className="cta-button">
            Get Started Now
            <span className="button-arrow">→</span>
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Services;
