import "./RecipesCard.css";

function RecipesCard({ mealTypeRecipes, mealTypeImage }) {
  return (
    <div className="recipes-card">
      <h2>{mealTypeRecipes}</h2>
      <img src={mealTypeImage} />
      <img src={mealTypeImage} alt={`Image of ${mealTypeRecipes}`} />
    </div>
  );
}

export default RecipesCard;
