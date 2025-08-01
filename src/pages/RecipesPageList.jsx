import React, { useEffect, useState } from "react";
import RecipesList from "./RecipesListCard";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import { useRecipeContext } from "../context/RecipeContext";
import { FaHeart } from "react-icons/fa";
import "./RecipesListCard.css";

function RecipesPageList({ selectedCategory }) {
  const { isLoading, error, fetchRecipesByDishType } = useRecipeContext();
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const recipesPerPage = 10;

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let dishTypes = [
        "Dinners",
        "Lunches",
        "Breakfasts",
        "Appetizers",
        "Pastries",
        "Herbs & Spices",
        "Snacks",
        "Desserts",
        "Side Dishes",
      ];

      if (selectedCategory) {
        dishTypes = [selectedCategory];
      }

      const data = await fetchRecipesByDishType(dishTypes);
      setRecipes(data);
      setCurrentPage(1);
    };

    fetchData();
  }, [selectedCategory, fetchRecipesByDishType]);

  const toggleFavorite = (recipeId) => {
    setFavorites((prev) => {
      let newFavorites;
      if (prev.includes(recipeId)) {
        newFavorites = prev.filter((id) => id !== recipeId);
      } else {
        newFavorites = [...prev, recipeId];
      }
      localStorage.setItem("favoriteRecipes", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const filteredRecipes = showFavoritesOnly
    ? recipes.filter((recipe) => favorites.includes(recipe.id))
    : recipes;

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="recipes-list-container">
      {!isLoading && !error && (
        <>
          <div
            className="filters-container"
            style={{
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              style={{
                padding: "0.5rem 1rem",
                background: showFavoritesOnly ? "#4a6f28" : "#f0f0f0",
                color: showFavoritesOnly ? "white" : "#333",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <FaHeart color={showFavoritesOnly ? "white" : "#e74c3c"} />
              {showFavoritesOnly ? "Show All Recipes" : "Show Favorites Only"}
            </button>
          </div>

          {filteredRecipes.length === 0 ? (
            <p className="no-recipes">
              {showFavoritesOnly
                ? "You have no favorite recipes yet!"
                : "No recipes found!"}
            </p>
          ) : (
            <>
              <div className="recipes-grid">
                {currentRecipes.map((r) => (
                  <RecipesList
                    id={r.id}
                    title={r.title}
                    image={r.image}
                    key={r.id}
                    dishType={r.dishType}
                    occasion={r.occasion}
                    summary={r.summary}
                    cookingTime={r.cookingTime}
                    vegan={r.vegan}
                    glutenFree={r.glutenFree}
                    calories={r.calories}
                    difficulty={r.difficulty}
                    tags={r.tags}
                    ratings={r.ratings}
                    servings={r.servings}
                    isFavorite={favorites.includes(r.id)}
                    onFavoriteToggle={toggleFavorite}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                  >
                    «
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    ‹
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={currentPage === pageNum ? "active" : ""}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    ›
                  </button>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                  >
                    »
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default RecipesPageList;
