import React, { useEffect, useState, useCallback } from "react";
import { useRecipeContext } from "../context/RecipeContext";
import RecipesList from "./RecipesListCard";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import "./RecipesListCard.css";

function RecipesPageList({ selectedCategory, filters }) {
  const {
    isLoading,
    error,
    fetchRecipesByDishType,
    favorites,
    toggleFavorite,
  } = useRecipeContext();
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

  const fetchData = useCallback(async () => {
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
    setRecipes(data || []);
    setCurrentPage(1);
  }, [selectedCategory, fetchRecipesByDishType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const applyFilters = useCallback(
    (recipe) => {
      if (filters.vegan && !recipe.vegan) return false;
      if (filters.glutenFree && !recipe.glutenFree) return false;
      if (filters.cookingTime > 0 && recipe.cookingTime > filters.cookingTime)
        return false;
      if (
        filters.difficulty &&
        recipe.difficulty.toLowerCase() !== filters.difficulty.toLowerCase()
      )
        return false;

      if (filters.calories > 0 && recipe.calories > filters.calories)
        return false;
      if (filters.showFavoritesOnly && !favorites.includes(recipe.id))
        return false;
      return true;
    },
    [filters, favorites]
  );

  const filteredRecipes = recipes.filter(applyFilters);
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
          {filteredRecipes.length === 0 ? (
            <p className="no-recipes">
              {filters.showFavoritesOnly
                ? "You have no favorite recipes yet!"
                : selectedCategory
                ? `No ${selectedCategory.toLowerCase()} recipes match your filters`
                : "No recipes match your filters"}
            </p>
          ) : (
            <>
              <div className="recipes-grid">
                {currentRecipes.map((r) => (
                  <RecipesList
                    key={r.id}
                    id={r.id}
                    title={r.title}
                    image={r.image}
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
