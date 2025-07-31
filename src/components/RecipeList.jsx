import "./RecipeList.css";

function RecipeList({ recipe, image }) {
  return (
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
        <span className="cooking-time">35 min</span>
      </div>

      <div className="card-content">
        <h3 className="recipe-title">{recipe}</h3>
        <div className="recipe-details">
          <span className="difficulty">Intermediate</span>
          <span className="category">Italian</span>
        </div>
        <button className="view-button">
          View Recipe
          <svg className="arrow-icon" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default RecipeList;
