import "./Recipe.css";
import ErrorMessage from "../ui/ErrorMessage";
import RecipeList from "./RecipeList";
import Loader from "../ui/Loader";
import { useRecipeContext } from "../context/RecipeContext";

function Recipe() {
  const { recipe, isLoading, error } = useRecipeContext();

  return (
    <section className="recipe-section">
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className="recipe-grid">
        {recipe.length > 0 &&
          recipe.map((r) => (
            <RecipeList recipe={r.title} image={r.image} key={r.id} />
          ))}
      </div>
    </section>
  );
}
export default Recipe;
// https://api.spoonacular.com/recipes/complexSearch
