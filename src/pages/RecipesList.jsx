import React, { useState, useEffect } from "react";

function RecipesList() {
  const [recipes, setrecipes] = useState({});

  useEffect(() => {}, []);

  return (
    <div className="recipes-list">
      <h1>List of recipes</h1>
    </div>
  );
}
export default RecipesList;
