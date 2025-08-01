import { useState } from "react";
import "./RecipesPage.css";
import RecipesPageList from "./RecipesPageList";
import Search from "../components/Search";
import { GiMeal, GiForkKnifeSpoon } from "react-icons/gi";
import {
  FaLeaf,
  FaCheckCircle,
  FaFire,
  FaClock,
  FaFilter,
} from "react-icons/fa";

function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    vegan: false,
    glutenFree: false,
    cookingTime: 0,
    difficulty: "",
    calories: 0,
  });

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

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      vegan: false,
      glutenFree: false,
      cookingTime: 0,
      difficulty: "",
      calories: 0,
    });
  };

  const filteredCategories = recipeCategories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="search-filter-container">
            <Search onSearch={setSearchTerm} />
            <button
              className={`filter-toggle ${showFilters ? "active" : ""}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter /> {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {showFilters && (
            <div className="filters-panel">
              <div className="filter-group">
                <label className="filter-label">
                  <input
                    type="checkbox"
                    name="vegan"
                    checked={filters.vegan}
                    onChange={handleFilterChange}
                    className="filter-checkbox"
                  />
                  <FaLeaf className="filter-icon" /> Vegan
                </label>
                <label className="filter-label">
                  <input
                    type="checkbox"
                    name="glutenFree"
                    checked={filters.glutenFree}
                    onChange={handleFilterChange}
                    className="filter-checkbox"
                  />
                  <FaCheckCircle className="filter-icon" /> Gluten Free
                </label>
              </div>

              <div className="filter-group">
                <label className="filter-label">
                  <FaClock className="filter-icon" /> Max Cooking Time:
                  <select
                    name="cookingTime"
                    value={filters.cookingTime}
                    onChange={handleFilterChange}
                    className="filter-select"
                  >
                    <option value="0">Any</option>
                    <option value="15">≤ 15 mins</option>
                    <option value="30">≤ 30 mins</option>
                    <option value="60">≤ 1 hour</option>
                    <option value="120">≤ 2 hours</option>
                  </select>
                </label>
              </div>

              <div className="filter-group">
                <label className="filter-label">
                  Difficulty:
                  <select
                    name="difficulty"
                    value={filters.difficulty}
                    onChange={handleFilterChange}
                    className="filter-select"
                  >
                    <option value="">Any</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </label>
              </div>

              <div className="filter-group">
                <label className="filter-label">
                  <FaFire className="filter-icon" /> Max Calories:
                  <select
                    name="calories"
                    value={filters.calories}
                    onChange={handleFilterChange}
                    className="filter-select"
                  >
                    <option value="0">Any</option>
                    <option value="300">≤ 300 kcal</option>
                    <option value="500">≤ 500 kcal</option>
                    <option value="800">≤ 800 kcal</option>
                  </select>
                </label>
              </div>

              <button className="reset-filters" onClick={resetFilters}>
                Reset All Filters
              </button>
            </div>
          )}

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
        <RecipesPageList
          selectedCategory={selectedCategory}
          filters={filters}
        />
      </section>
    </div>
  );
}

export default RecipesPage;
