import React from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaRegClock,
  FaFire,
  FaUtensils,
  FaCheckCircle,
  FaStar,
  FaHeart,
} from "react-icons/fa";

export default function RecipesListCard({
  id,
  title,
  image,
  dishType,
  occasion,
  summary,
  cookingTime,
  vegan,
  glutenFree,
  calories,
  difficulty,
  tags,
  ratings,
  servings,
}) {
  return (
    <Link to={`/recipes/${id}`} className="recipe-card-link">
      <div className="recipe-card">
        <div className="card-image-container">
          <img
            src={image || "/default-recipe.jpg"}
            alt={title}
            className="recipe-img"
          />
          <button
            className="favorite-button"
            onClick={(e) => {
              e.preventDefault();
              // Handle favorite logic will be here
            }}
          >
            <FaHeart />
          </button>
          {ratings && (
            <div className="rating-badge">
              <FaStar className="star-icon" />
              <span>{Math.round(ratings)}</span>
            </div>
          )}
        </div>

        <div className="recipe-content">
          <div className="card-header">
            <h2 className="recipe-title">{title}</h2>
            <div className="dietary-tags">
              {vegan && (
                <span className="dietary-tag vegan">
                  <FaLeaf /> Vegan
                </span>
              )}
              {glutenFree && (
                <span className="dietary-tag gluten-free">
                  <FaCheckCircle /> Gluten Free
                </span>
              )}
            </div>
          </div>

          <p className="recipe-summary">{summary?.substring(0, 100)}...</p>

          <div className="recipe-meta">
            <div className="meta-item">
              <FaRegClock />
              <span>{cookingTime} mins</span>
            </div>
            <div className="meta-item">
              <FaFire />
              <span>{calories} kcal</span>
            </div>
            <div className="meta-item">
              <FaUtensils />
              <span>
                {servings} serving{servings !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <div className="category-tags">
            {dishType && (
              <span className="category-tag dish-type">{dishType}</span>
            )}
            {occasion && (
              <span className="category-tag occasion">{occasion}</span>
            )}
            {difficulty && (
              <span className="category-tag difficulty">{difficulty}</span>
            )}
          </div>

          {tags?.length > 0 && (
            <div className="keyword-tags">
              {tags.slice(0, 3).map((tag, idx) => (
                <span key={idx} className="keyword-tag">
                  #{tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="keyword-tag more-tags">
                  +{tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
