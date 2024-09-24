// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// import "./App.css";
// import Home from "./Home";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <div className="background"></div>
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />}></Route>
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavComponent from "./NavComponent";
import Footer from "./Footer"; // Import NavComponent

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="background"></div>
        <div className="content">
          <NavComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
