import { GiCookingPot, GiChefToque, GiMeal } from "react-icons/gi";
import "./HomePageDetails.css";

function HomePageDetails() {
  const philosophyPoints = [
    {
      icon: <GiCookingPot className="philosophy-icon" />,
      title: "The Art of Cooking",
      content:
        "We believe cooking is more than necessity—it's creative expression. Each recipe tells a story, and we provide the canvas for your culinary artistry.",
    },
    {
      icon: <GiChefToque className="philosophy-icon" />,
      title: "Global Flavors",
      content:
        "From Tokyo street food to Parisian pastries, we celebrate world cuisines with authentic yet approachable recipes for home cooks.",
    },
    {
      icon: <GiMeal className="philosophy-icon" />,
      title: "Sustainable Practices",
      content:
        "We promote zero-waste cooking with recipes that utilize whole ingredients and creative solutions for leftovers.",
    },
  ];

  return (
    <section className="philosophy-section">
      <div className="philosophy-header">
        <h2 className="section-title">Our Culinary Philosophy</h2>
        <div className="gold-divider"></div>
        <p className="section-intro">
          At Chef's Pal, we're redefining what it means to cook at home through
          three core principles that guide everything we create.
        </p>
      </div>

      <div className="philosophy-grid">
        {philosophyPoints.map((point, index) => (
          <div key={index} className="philosophy-card">
            <div className="icon-wrapper">{point.icon}</div>
            <h3>{point.title}</h3>
            <p>{point.content}</p>
          </div>
        ))}
      </div>

      <div className="culinary-commitment">
        <h3>Our Commitment to You</h3>
        <p>
          Whether you're looking for quick weekday dinners or weekend culinary
          projects, we're here to make every cooking experience joyful,
          delicious, and uniquely yours.
        </p>
      </div>
    </section>
  );
}

export default HomePageDetails;
