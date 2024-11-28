import React, { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import RecipeList from "./RecipeList";
import Loader from "./Loader";
import { useRecipeContext } from "../context/RecipeContext";

function Recipe() {
  const { recipe, isLoading, error } = useRecipeContext();

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
