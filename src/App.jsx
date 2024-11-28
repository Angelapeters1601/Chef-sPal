import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { RecipeContextProvider } from "./context/RecipeContext";
// import NavComponent from "./components/NavComponent";

function App() {
  return (
    <BrowserRouter>
      <RecipeContextProvider>
        <div className="app">
          <div className="background"></div>
          <div className="content">
            {/* <NavComponent /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </RecipeContextProvider>
    </BrowserRouter>
  );
}

export default App;
