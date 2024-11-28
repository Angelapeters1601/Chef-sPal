import Header from "../components/Header";
import Intro from "../components/Intro";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Recipe from "../components/Recipe";
import SubIntro from "../components/SubIntro";
import NavComponent from "../components/NavComponent";

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
