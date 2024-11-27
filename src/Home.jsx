import Header from "./Header";
import Intro from "./Intro";
import Details from "./details";
import Footer from "./Footer";
import Recipe from "./Recipe";
import SubIntro from "./SubIntro";
import NavComponent from "./NavComponent";

function Home() {
  return (
    <div>
      <NavComponent />
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
