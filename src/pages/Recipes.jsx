import "./Recipes.css";
import { NavLink } from "react-router-dom";
import RecipesList from "./RecipesList";
import { GiMeal, GiForkKnifeSpoon } from "react-icons/gi";

function Recipes() {
  const recipeCategories = [
    { name: "Dinners", icon: <GiMeal /> },
    { name: "Lunches", icon: <GiForkKnifeSpoon /> },
    { name: "Breakfasts", icon: <GiMeal /> },
    { name: "Desserts", icon: <GiForkKnifeSpoon /> },
    { name: "Drinks", icon: <GiMeal /> },
    { name: "Appetizers", icon: <GiForkKnifeSpoon /> },
    { name: "Snacks", icon: <GiMeal /> },
    { name: "Pastries", icon: <GiForkKnifeSpoon /> },
    { name: "Herbs & Spices", icon: <GiMeal /> },
    { name: "Side Dishes", icon: <GiForkKnifeSpoon /> },
    { name: "Brunch", icon: <GiMeal /> },
  ];

  return (
    <div className="recipes-container">
      <section className="recipes-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-icon">🍳</span>
            Recipes & Culinary Creations
          </h1>
          <p className="hero-description">
            Discover our carefully curated collection of family-tested recipes,
            each designed to bring joy to your kitchen and delicious meals to
            your table.
          </p>
        </div>
      </section>

      <section className="category-navigation">
        <div className="category-container">
          <h2 className="section-title">
            <GiForkKnifeSpoon className="title-icon" />
            Explore Categories
          </h2>
          <div className="category-grid">
            {recipeCategories.map((category, index) => (
              <NavLink to="/" className="category-card" key={index}>
                <div className="category-icon">{category.icon}</div>
                <span className="category-name">{category.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-recipes">
        <h2 className="section-title">
          <GiMeal className="title-icon" />
          Featured Recipes
        </h2>
        <RecipesList />
      </section>
    </div>
  );
}

export default Recipes;
