import "./App.css";
import Header from "./Header";
import Intro from "./Intro";
import Details from "./details";
import Footer from "./Footer";
import Recipe from "./Recipe";
import SubIntro from "./assets/SubIntro";

function App() {
  return (
    <>
      <div className="app">
        <div className="background"></div>
        <div className="content">
          <Header />
          <Intro />
          <SubIntro />
          <Recipe />
          <Details />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
