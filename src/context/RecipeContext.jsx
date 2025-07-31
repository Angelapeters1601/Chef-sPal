import { createContext, useContext, useState, useEffect } from "react";
import mockRecipes from "../utils/mockData";

const RecipeContext = createContext();

function RecipeContextProvider({ children }) {
  const [recipe, setRecipe] = useState([]);
  const [readyInMinutes, setreadyInMinutes] = useState("");
  const [mealTypeRecipes, setMealTypeRecipes] = useState([]);
  const [diets, setDiets] = useState([]);
  const [vegan, setVegan] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [dishTypes, setDishTypes] = useState([]);
  const [glutenFree, setGlutenFree] = useState(true);
  const [occasions, setOccasions] = useState([]);
  const [summary, setSummary] = useState("");
  const [weightWatcherSmartPoints, setWeightWatcherSmartPoints] = useState("");
  const [spoonacularScore, setSpoonacularScore] = useState("");
  const [error, setError] = useState("");

  const key = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const fetchRecipes = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // console.log(data.results);
      setRecipe(data.results || []);
      setError("");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=12&addRecipeInformation=true`,
      setRecipe
    );
  }, []);

  const fetchRecipesByDishType = async (dishTypes) => {
    setIsLoading(true);
    try {
      const typesArray = Array.isArray(dishTypes)
        ? dishTypes.map((t) => t.toLowerCase())
        : [dishTypes.toLowerCase()];

      const filteredRecipes = mockRecipes.filter((recipe) =>
        typesArray.includes(recipe.dishType.toLowerCase())
      );

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (!filteredRecipes.length) {
        throw new Error("No recipes found for these dish types");
      }

      console.log(`Fetched recipes for ${dishTypes}:`, filteredRecipes);
      setError("");
      return filteredRecipes;
    } catch (err) {
      console.error("Error fetching mock recipes:", err.message);
      setError("Could not load recipes for these dish types");
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRecipeById = async (id) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const recipe = mockRecipes.find((recipe) => recipe.id.toString() === id);

      if (!recipe) {
        throw new Error("Recipe not found");
      }

      setError("");
      return recipe;
    } catch (err) {
      console.error("Error fetching recipe by ID:", err.message);
      setError("Could not load the recipe");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        isLoading,
        error,
        mealTypeRecipes,
        readyInMinutes,
        diets,
        vegan,
        dishTypes,
        glutenFree,
        occasions,
        summary,
        weightWatcherSmartPoints,
        spoonacularScore,
        fetchRecipesByDishType,
        fetchRecipeById,
      }}
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
