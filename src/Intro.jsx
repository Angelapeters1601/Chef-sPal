import recipe from "./assets/recipe.jpg";
import recipe2 from "./assets/recipe.webp";
import recipe4 from "./assets/recipe4.jpg";

function Intro() {
  return (
    <div className="intro">
      <img src={recipe4} className="intro-img" alt="Recipe" />
      {/* <img src={recipe} className="intro-img" alt="Recipe" /> */}
      {/* <img src={recipe2} className="intro-img" alt="Recipe" /> */}

      <p>
        Welcome to our Recipe Search App, where culinary adventure begins!
        Discover and explore a diverse range of recipes tailored to your tastes
        and dietary needs. With a user-friendly interface and powerful search
        tools, finding and saving your favorite dishes is effortless. <br />
        Transform your cooking routine and start your flavor journey today!
      </p>
      {/* <img src={recipe2} className="intro-img" alt="Recipe" /> */}
    </div>
  );
}

export default Intro;
