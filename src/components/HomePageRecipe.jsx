import "./HomePageRecipe.css";
import ErrorMessage from "../ui/ErrorMessage";
import HomePageRecipeList from "./HomePageRecipeList";
import Loader from "../ui/Loader";
import { useRecipeContext } from "../context/RecipeContext";
import { FaLeaf, FaTimesCircle } from "react-icons/fa";

function HomePageRecipe() {
  const {
    recipe,
    isLoading,
    error,
    dishTypes,
    glutenFree,
    occasions,
    summary,
    weightWatcherSmartPoints,
    spoonacularScore,
  } = useRecipeContext();

  return (
    <section className="recipe-section">
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className="recipe-grid">
        {recipe.length > 0 &&
          recipe.map((r) => (
            <HomePageRecipeList
              recipe={r.title}
              time={r.readyInMinutes}
              image={r.image}
              diet={r.diets}
              vegan={
                r.vegan ? (
                  <FaLeaf className="vegan-icon" />
                ) : (
                  <FaTimesCircle className="non-vegan-icon" />
                )
              }
              dishTypes={r.dishTypes}
              occasions={r.occasions}
              summary={r.summary}
              weightWatcherSmartPoints={r.weightWatcherSmartPoints}
              spoonacularScore={r.spoonacularScore}
              glutenFree={r.glutenFree ? "yes" : "no"}
              key={r.id}
            />
          ))}
      </div>
    </section>
  );
}
export default HomePageRecipe;
// https://api.spoonacular.com/recipes/complexSearch
