import "./About.css";
import Faq from "../components/Faq";
import {
  GiCookingPot,
  GiChefToque,
  GiTeamIdea,
  GiMeal,
  GiCook,
} from "react-icons/gi";
import { FaHistory, FaQuestionCircle, FaAward, FaUsers } from "react-icons/fa";
import { MdOutlineRestaurant, MdFoodBank } from "react-icons/md";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="about-title">
            <GiCookingPot className="title-icon" />
            About Chef'sPal
          </h1>
          <p className="about-tagline">
            Where culinary passion meets innovation
          </p>
          <p className="hero-description">
            Founded in 2018, Chef'sPal has grown from a simple recipe app to a
            comprehensive culinary platform serving over 50,000 food enthusiasts
            worldwide. Our mission is to democratize gourmet cooking.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <span className="stat-number">50,000+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-item">
            <MdFoodBank className="stat-icon" />
            <span className="stat-number">2,500+</span>
            <span className="stat-label">Recipes</span>
          </div>
          <div className="stat-item">
            <FaAward className="stat-icon" />
            <span className="stat-number">12</span>
            <span className="stat-label">Awards Won</span>
          </div>
        </div>
      </div>

      <section className="about-section mission-section">
        <div className="section-header">
          <GiChefToque className="section-icon" />
          <h2>Our Culinary Philosophy</h2>
        </div>
        <div className="section-content">
          <div className="mission-grid">
            <div className="mission-point">
              <GiCook className="mission-icon" />
              <h3>Accessible Excellence</h3>
              <p>
                We believe gourmet cooking should be approachable. Our
                step-by-step guides and video tutorials make professional
                techniques accessible to home cooks.
              </p>
            </div>
            <div className="mission-point">
              <MdOutlineRestaurant className="mission-icon" />
              <h3>Global Flavors</h3>
              <p>
                From Tokyo street food to Parisian pastries, we celebrate world
                cuisines with authentic yet adaptable recipes.
              </p>
            </div>
            <div className="mission-point">
              <GiMeal className="mission-icon" />
              <h3>Sustainable Cooking</h3>
              <p>
                We promote zero-waste cooking with recipes that utilize whole
                ingredients and creative leftovers solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section history-section">
        <div className="section-header">
          <FaHistory className="section-icon" />
          <h2>Our Journey</h2>
        </div>
        <div className="section-content">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h4>Concept Born</h4>
                <p>Founded by chef Angela Peters in her Lagos home kitchen</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h4>First Recognition</h4>
                <p>Won "Best Culinary App" at Nigerian Tech Awards</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4>Global Expansion</h4>
                <p>Launched international version with 5 language options</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>Current Milestone</h4>
                <p>Serving 50,000+ users across 3 continents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section team-section">
        <div className="section-header">
          <GiTeamIdea className="section-icon" />
          <h2>Meet The Culinary Team</h2>
        </div>
        <div className="section-content">
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo chef-1"></div>
              <h3>Angela Peters</h3>
              <p className="member-title">Founder & Executive Chef</p>
              <p className="member-bio">
                Trained in Paris and Tokyo, brings 15 years of professional
                kitchen experience.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo chef-2"></div>
              <h3>Marcus Adeleke</h3>
              <p className="member-title">Head of Recipe Development</p>
              <p className="member-bio">
                Specializes in fusion cuisine and dietary-specific cooking.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo chef-3"></div>
              <h3>Zainab Okoro</h3>
              <p className="member-title">Pastry Chef</p>
              <p className="member-bio">
                Award-winning baker with expertise in gluten-free desserts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section faq-section">
        <div className="section-header">
          <FaQuestionCircle className="section-icon" />
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="section-content">
          <Faq />
        </div>
      </section>
    </div>
  );
}

export default About;
