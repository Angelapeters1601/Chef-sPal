import { useState } from "react";
import { FiClock } from "react-icons/fi";
import { FaLeaf, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import RecipeModal from "./RecipeModal";
import "./HomePageRecipeList.css";

function HomePageRecipeList({
  recipe,
  image,
  time,
  diet,
  vegan,
  dishTypes,
  occasions,
  summary,
  weightWatcherSmartPoints,
  spoonacularScore,
  glutenFree,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const MAX_DIETS = 3;

  const formattedDiets = Array.isArray(diet) ? diet : [];
  const displayDiets = formattedDiets.slice(0, MAX_DIETS);
  const extraDietsCount = formattedDiets.length - MAX_DIETS;

  return (
    <>
      <div className="recipe-card">
        <div className="image-wrapper">
          <img
            src={image}
            alt={recipe}
            className="recipe-image"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
            }}
          />
          <div className="gradient-overlay"></div>
          <span className="cooking-time">
            <FiClock className="time-icon" />
            {time} mins
          </span>
        </div>

        <div className="card-content">
          <h3 className="recipe-title">{recipe}</h3>
          <div className="recipe-details">
            <div className="diet-tags">
              {displayDiets.map((d, i) => (
                <span key={i} className="diet-tag">
                  {d.replace(/\b\w/g, (l) => l.toUpperCase())}
                </span>
              ))}
              {extraDietsCount > 0 && (
                <span className="extra-diets">+{extraDietsCount}</span>
              )}
            </div>
            <span
              className={`vegan-tag ${
                vegan.type === FaLeaf ? "is-vegan" : "not-vegan"
              }`}
            >
              {vegan}
              {vegan.type === FaLeaf ? "Vegan" : "Non-Vegan"}
            </span>
          </div>
          <button className="view-button" onClick={() => setIsModalOpen(true)}>
            View Recipe
            <svg className="arrow-icon" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <RecipeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        recipe={recipe}
        image={image}
        diet={diet}
        vegan={vegan}
        dishTypes={dishTypes}
        occasions={occasions}
        summary={summary}
        weightWatcherSmartPoints={weightWatcherSmartPoints}
        spoonacularScore={spoonacularScore}
        glutenFree={
          glutenFree ? (
            <span className="gluten-free-tag">
              <FaCheckCircle className="gluten-free-icon" />
              Gluten Free
            </span>
          ) : (
            <span className="gluten-free-tag not-gluten-free">
              <FaTimesCircle className="gluten-free-icon" />
              Contains Gluten
            </span>
          )
        }
      />
    </>
  );
}

export default HomePageRecipeList;
