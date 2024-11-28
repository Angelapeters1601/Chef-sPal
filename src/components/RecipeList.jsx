function RecipeList({ recipe, image }) {
  return (
    <div className="recipe-list-container">
      <div className="recipe-item">
        <p>{recipe}</p>
        <img src={image} />
      </div>
    </div>
  );
}

export default RecipeList;
