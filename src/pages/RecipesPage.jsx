import { useState } from "react";
import "./RecipesPage.css";
import { NavLink } from "react-router-dom";
import RecipesPageList from "./RecipesPageList";
import Search from "../components/Search";
import { GiMeal, GiForkKnifeSpoon } from "react-icons/gi";

function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

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
  ];

  const filteredCategories = recipeCategories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(
      categoryName === selectedCategory ? null : categoryName
    );
  };

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
          <Search onSearch={handleSearch} />
          <div className="category-grid">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <button
                  className={`category-card ${
                    selectedCategory === category.name ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <div className="category-icon">{category.icon}</div>
                  <span className="category-name">{category.name}</span>
                </button>
              ))
            ) : (
              <div className="no-results">
                No categories found matching "{searchTerm}"
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="featured-recipes">
        <h2 className="section-title">
          <GiMeal className="title-icon" />
          {selectedCategory
            ? `${selectedCategory} Recipes`
            : "Featured Recipes"}
        </h2>
        <RecipesPageList selectedCategory={selectedCategory} />
      </section>
    </div>
  );
}

export default RecipesPage;
