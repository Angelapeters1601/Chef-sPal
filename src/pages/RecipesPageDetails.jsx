import { useParams } from "react-router-dom";
import { useRecipeContext } from "../context/RecipeContext";
import { useEffect, useState } from "react";
import "./RecipesPageDetails.css";
import {
  FaClock,
  FaUtensils,
  FaFire,
  FaLeaf,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";

function RecipesPageDetails() {
  const { id } = useParams();
  const { fetchRecipeById, toggleFavorite, isFavorite } = useRecipeContext();
  const [recipe, setRecipe] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    async function loadRecipe() {
      const data = await fetchRecipeById(id);
      setRecipe(data);
      setIsFavorited(isFavorite(data.id));
    }
    loadRecipe();
  }, [id, fetchRecipeById, isFavorite]);

  const handleFavorite = () => {
    toggleFavorite(recipe.id);
    setIsFavorited(!isFavorited);
  };

  if (!recipe)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading recipe details...</p>
      </div>
    );

  return (
    <div className="recipe-detail-container">
      {/* Recipe Header */}
      <header className="recipe-header">
        <div className="recipe-title-container">
          <h1 className="recipe-title">{recipe.title}</h1>
          {/* <button
            className={`favorite-button ${isFavorited ? "favorited" : ""}`}
            onClick={handleFavorite}
          >
            {isFavorited ? (
              <FaBookmark color="red" />
            ) : (
              <FaRegBookmark color="pink" />
            )}
            <span>{isFavorited ? "Saved" : "Save Recipe"}</span>
          </button> */}
        </div>

        <div className="recipe-meta">
          <div className="meta-item">
            <FaClock />
            <span>{recipe.cookingTime} mins</span>
          </div>
          <div className="meta-item">
            <FaUtensils />
            <span>
              {recipe.servings} serving{recipe.servings !== 1 ? "s" : ""}
            </span>
          </div>
          {recipe.rating && (
            <div className="meta-item">
              <FaStar />
              <span>{recipe.rating}/5</span>
            </div>
          )}
          {recipe.calories && (
            <div className="meta-item">
              <FaFire />
              <span>{recipe.calories} kcal</span>
            </div>
          )}
        </div>

        <div className="dietary-tags">
          {recipe.vegan === true && (
            <span className="dietary-tag vegan">
              <FaLeaf /> Vegan friendly
            </span>
          )}
          {recipe.vegan === false && (
            <span className="dietary-tag non-vegan">
              <FaTimesCircle /> Non Vegan
            </span>
          )}
          {recipe.glutenFree && (
            <span className="dietary-tag gluten-free">
              <FaCheckCircle /> Gluten Free
            </span>
          )}
          {recipe.difficulty && (
            <span className="dietary-tag difficulty">
              Difficulty: {recipe.difficulty}
            </span>
          )}
        </div>
      </header>

      {/* Recipe Image and Summary */}
      <div className="recipe-image-summary">
        <div className="recipe-image-container">
          <img
            src={recipe.image || "/default-recipe.jpg"}
            alt={recipe.title}
            className="recipe-main-image"
          />
        </div>
        <div className="recipe-summary">
          <h3>About This Recipe</h3>
          <p>{recipe.summary}</p>
          {recipe.occasion && (
            <p className="recipe-occasion">
              <strong>Perfect for:</strong> {recipe.occasion}
            </p>
          )}
          {recipe.dishType && (
            <p className="recipe-category">
              <strong>Category:</strong> {recipe.dishType}
            </p>
          )}
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="recipe-section">
        <h3 className="section-title">
          <FaUtensils /> Ingredients
        </h3>
        <ul className="ingredients-list">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="recipe-section">
        <h3 className="section-title">Instructions</h3>
        <ol className="instructions-list">
          {recipe.steps?.map((step, index) => (
            <li key={index} className="instruction-step">
              <span className="step-number">{index + 1}.</span>
              <span className="step-text">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Tags Section */}
      {recipe.tags?.length > 0 && (
        <div className="recipe-section">
          <h3 className="section-title">Tags</h3>
          <div className="tags-container">
            {recipe.tags.map((tag, index) => (
              <span key={index} className="recipe-tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipesPageDetails;
