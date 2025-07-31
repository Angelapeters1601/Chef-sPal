import HomePageIntro from "../components/HomePageIntro";
import HomePageDetails from "../components/HomePageDetails";
import HomePageRecipe from "../components/HomePageRecipe";
import HomePageSubIntro from "../components/HomePageSubIntro";

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <HomePageIntro />
        <HomePageSubIntro />
        <HomePageRecipe />
        <HomePageDetails />
      </div>
    </div>
  );
}

export default Home;
