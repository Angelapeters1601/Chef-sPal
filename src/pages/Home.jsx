import Intro from "../components/Intro";
import Details from "../components/Details";
import Recipe from "../components/Recipe";
import SubIntro from "../components/SubIntro";

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <Intro />
        <SubIntro />
        <Recipe />
        <Details />
      </div>
    </div>
  );
}

export default Home;
