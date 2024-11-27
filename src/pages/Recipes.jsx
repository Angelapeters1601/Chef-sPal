import "./Recipes.css";
import { NavLink } from "react-router-dom";
import NavComponent from "../NavComponent";
import RecipesList from "./RecipesList";
import Footer from "../footer";

function Recipes() {
  return (
    <>
      <NavComponent />

      <div className="recipes">
        <h2>Recipes & Cooking Ideas 😋</h2>
        <p>
          We know the deal. We feel your pain. Here are our superstar workhouse
          recipes, designed and tested to help you cook a great family meal.
        </p>
        <div className="recipes-card-list">
          <h3>Explore</h3>
          <NavLink to="/" className="nav-link">
            Dinners
          </NavLink>
          <NavLink to="/" className="nav-link">
            Lunches
          </NavLink>
          <NavLink to="/" className="nav-link">
            Breakfasts
          </NavLink>
          <NavLink to="/" className="nav-link">
            Desserts
          </NavLink>
          <NavLink to="/" className="nav-link">
            Drinks
          </NavLink>
          <NavLink to="/" className="nav-link">
            Appetizers
          </NavLink>{" "}
          <NavLink to="/" className="nav-link">
            snacks
          </NavLink>{" "}
          <NavLink to="/" className="nav-link">
            pastries
          </NavLink>{" "}
          <NavLink to="/" className="nav-link">
            Herbs & spices
          </NavLink>{" "}
          <NavLink to="/" className="nav-link">
            Side dishes
          </NavLink>
          <NavLink to="/" className="nav-link">
            brunch
          </NavLink>
        </div>
      </div>
      <RecipesList />
      <Footer />
    </>
  );
}

export default Recipes;
