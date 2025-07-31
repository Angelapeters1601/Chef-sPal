import { GiSpoon } from "react-icons/gi";
import "./HomePageSubIntro.css";

function HomePageSubIntro() {
  return (
    <section className="sub-intro-section">
      <div className="section-header">
        <GiSpoon className="section-icon" />
        <h2>Our Featured Recipes</h2>
      </div>
      <p className="section-subtitle">
        Handpicked culinary treasures from around the world
      </p>
    </section>
  );
}

export default HomePageSubIntro;
