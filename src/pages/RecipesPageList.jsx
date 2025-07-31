import React, { useEffect, useState } from "react";
import RecipesList from "./RecipesListCard";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import { useRecipeContext } from "../context/RecipeContext";
import "./RecipesListCard.css";

function RecipesPageList({ selectedCategory }) {
  const { isLoading, error, fetchRecipesByDishType } = useRecipeContext();
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

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

      // If a category is selected, only fetch that category
      if (selectedCategory) {
        dishTypes = [selectedCategory];
      }

      const data = await fetchRecipesByDishType(dishTypes);
      setRecipes(data);
      setCurrentPage(1);
    };

    fetchData();
  }, [selectedCategory]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="recipes-list-container">
      {!isLoading && !error && (
        <>
          {recipes.length === 0 ? (
            <p className="no-recipes">No recipes found!</p>
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
                    ingridients={r.ingridients}
                    steps={r.steps}
                    cookingTime={r.cookingTime}
                    vegan={r.vegan}
                    glutenFree={r.glutenFree}
                    calories={r.calories}
                    difficulty={r.difficulty}
                    tags={r.tags}
                    ratings={r.ratings}
                    servings={r.servings}
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
