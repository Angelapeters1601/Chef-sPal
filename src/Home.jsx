import Header from "./Header";
import Intro from "./Intro";
import Details from "./details";
import Footer from "./Footer";
import Recipe from "./Recipe";
import SubIntro from "./assets/SubIntro";

function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <SubIntro />
      <Recipe />
      <Details />
      <Footer />
    </div>
  );
}

export default Home;
