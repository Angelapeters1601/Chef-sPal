import "bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "./NavComponent";

function Header() {
  return (
    <div className="header-container">
      <div className="title-container">
        <h1 className="title">Chef's Pal </h1>
        <p className="sub-title">Culinary Inspiration at Your Fingertips.</p>
      </div>
      {/* <NavComponent className="nav-component" /> */}
    </div>
  );
}

export default Header;
