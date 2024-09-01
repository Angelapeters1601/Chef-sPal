import React, { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import RecipeList from "./RecipeList";
import Loader from "./Loader";

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const key = import.meta.env.VITE_SPOONACULAR_API_KEY;

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedData = await response.json();
        console.log(fetchedData.results);
        setRecipe(fetchedData.results);
        setError("");
      } catch {
        console.error("Error fetching recipes:", error);
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {recipe.length > 0 &&
        recipe.map((r) => (
          <RecipeList recipe={r.title} image={r.image} key={r.id} />
        ))}
    </div>
  );
}

export default Recipe;
// https://api.spoonacular.com/recipes/complexSearch
