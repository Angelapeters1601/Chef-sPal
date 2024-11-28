import { createContext, useContext, useState, useEffect } from "react";

const RecipeContext = createContext();

function RecipeContextProvider({ children }) {
  const [recipe, setRecipe] = useState([]);
  const [mealTypeRecipes, setMealTypeRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const key = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const selectedMealTypes = [
    "main course",
    "side dish",
    // "dessert",
    // "appetizer",
    // "salad",
    // "bread",
    // "breakfast",
    // "soup",
    // "beverage",
    // "sauce",
    // "marinade",
    // "fingerfood",
    // "snack",
    // "drink",
  ];

  const mealTypeQuery = selectedMealTypes.join(",");

  const fetchRecipes = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.results);
      setRecipe(data.results || []);
      setError("");
    } catch (err) {
      console.error("Error fetching recipes:", err.message);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}`,
      setRecipe
    );
  }, []);

  useEffect(() => {
    fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast
    `,
      setMealTypeRecipes
    );
  }, []);

  //   useEffect(() => {
  //     fetchRecipes(
  //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&type=${mealTypeQuery}&number=5`,
  //       setMealTypeRecipes
  //     );
  //   }, []);

  return (
    <RecipeContext.Provider
      value={{ recipe, isLoading, error, mealTypeRecipes }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

function useRecipeContext() {
  const value = useContext(RecipeContext);
  if (value === undefined)
    throw new Error(
      "Used RecipeContext outside of Provider. The context can only be used in children of the Provider"
    );
  return value;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useRecipeContext, RecipeContextProvider };
