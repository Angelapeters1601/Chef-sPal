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
  FaShoppingBasket,
  FaDownload,
  FaTimes,
} from "react-icons/fa";

function RecipesPageDetails() {
  const { id } = useParams();
  const { fetchRecipeById, toggleFavorite, favorites } = useRecipeContext();
  const [recipe, setRecipe] = useState(null);
  const [showShoppingList, setShowShoppingList] = useState(false);

  useEffect(() => {
    async function loadRecipe() {
      const data = await fetchRecipeById(id);
      setRecipe(data);
    }
    loadRecipe();
  }, [id, fetchRecipeById]);

  const generateShoppingList = () => {
    return recipe?.ingredients
      ?.map((ingredient) => `- ${ingredient}\n`)
      .join("");
  };

  const downloadShoppingList = () => {
    if (!recipe) return;

    const content = `
Shopping List for: ${recipe.title}\n\n
INGREDIENTS:\n${generateShoppingList()}\n
MEAL PLANNING TIPS:\n
1. Prep ingredients in advance (wash, chop, measure)\n
2. Double the recipe for easy leftovers\n
3. Store perishables in airtight containers\n
4. Consider ingredient substitutions if needed\n
5. Plan cooking order for efficiency\n
`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${recipe.title.replace(/\s+/g, "-")}-shopping-list.txt`;
    link.click();
  };

  if (!recipe) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading recipe details...</p>
      </div>
    );
  }

  return (
    <div className="recipe-detail-container">
      <header className="recipe-header">
        <div className="recipe-title-container">
          <h1 className="recipe-title">{recipe.title}</h1>
          <div className="action-buttons">
            <button
              className="shopping-list-button"
              onClick={() => setShowShoppingList(true)}
              aria-label="Open shopping list"
            >
              <FaShoppingBasket className="icon" />
              <span>Shopping List</span>
            </button>
          </div>
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
          {recipe.vegan && (
            <span className="dietary-tag vegan">
              <FaLeaf /> Vegan
            </span>
          )}
          {recipe.glutenFree && (
            <span className="dietary-tag gluten-free">
              <FaCheckCircle /> Gluten Free
            </span>
          )}
          {recipe.difficulty && (
            <span className="dietary-tag difficulty">{recipe.difficulty}</span>
          )}
        </div>
      </header>

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
        </div>
      </div>

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

      {showShoppingList && (
        <div className="modal-overlay">
          <div className="shopping-list-modal">
            <button
              className="close-modal"
              onClick={() => setShowShoppingList(false)}
              aria-label="Close shopping list"
            >
              <FaTimes />
            </button>
            <h3>Shopping List for {recipe.title}</h3>
            <div className="shopping-list-content">
              <h4>Ingredients:</h4>
              <ul>
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>

              <h4>Meal Planning Tips:</h4>
              <ol>
                <li>Prep ingredients in advance (wash, chop, measure)</li>
                <li>Double the recipe for easy leftovers</li>
                <li>Store perishables in airtight containers</li>
                <li>Consider ingredient substitutions if needed</li>
                <li>Plan cooking order for efficiency</li>
              </ol>
            </div>
            <button className="download-button" onClick={downloadShoppingList}>
              <FaDownload /> Download Shopping List
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipesPageDetails;
