import RecipesCard from "./RecipesCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useRecipeContext } from "../context/RecipeContext";

function RecipesList() {
  const { isLoading, error, mealTypeRecipes } = useRecipeContext();

  return (
    <div className="recipes-list">
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && mealTypeRecipes?.length === 0 && (
        <p>No recipes found!</p>
      )}

      {mealTypeRecipes?.length > 0 &&
        mealTypeRecipes.map((r) => (
          <RecipesCard
            mealTypeRecipes={r.title}
            mealTypeImage={r.image}
            key={r.id}
          />
        ))}
    </div>
  );
}

export default RecipesList;
