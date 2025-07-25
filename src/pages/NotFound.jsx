import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./NotFound.css";
import NotFoundImg from "../assets/img4.png";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="image-container">
          <img
            src={NotFoundImg}
            alt="Lost chef illustration"
            className="not-found-image"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1551218372-a1aed9a30aa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
            }}
          />
        </div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="not-found-actions">
          <NavLink to="/" className="not-found-button home-button">
            <FaHome className="button-icon" />
            Return Home
          </NavLink>
        </div>

        <div className="not-found-decoration">
          <div className="gold-bar"></div>
          <div className="light-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
