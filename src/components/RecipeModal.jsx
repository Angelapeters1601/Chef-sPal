import { useEffect } from "react";
import {
  FaLeaf,
  FaRegTimesCircle,
  FaCheckCircle,
  FaStar,
  FaWeight,
  FaUtensils,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";
import "./RecipeModal.css";

function RecipeModal({
  isOpen,
  onClose,
  recipe,
  image,
  diet = [],
  vegan,
  dishTypes = [],
  occasions = [],
  summary,
  weightWatcherSmartPoints,
  spoonacularScore,
  glutenFree,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Decorative elements */}
        <div className="floral-corner top-left"></div>
        <div className="floral-corner top-right"></div>
        <div className="floral-corner bottom-left"></div>
        <div className="floral-corner bottom-right"></div>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
          <span className="close-tooltip">Close</span>
        </button>
        <div className="modal-header">
          <div className="title-wrapper">
            <h1 className="modal-title">{recipe}</h1>
            <div className="title-underline"></div>
          </div>
          <div className="dietary-badges">
            <div className={`dietary-badge ${vegan ? "vegan" : "non-vegan"}`}>
              <div className="badge-icon">
                {vegan ? <FaLeaf /> : <FaRegTimesCircle />}
              </div>
              <span>{vegan ? "Vegan" : "Non-Vegan"}</span>
            </div>
            <div
              className={`dietary-badge ${
                glutenFree ? "gluten-free" : "contains-gluten"
              }`}
            >
              <div className="badge-icon">
                {glutenFree ? <FaCheckCircle /> : <FaRegTimesCircle />}
              </div>
              <span>{glutenFree ? "Gluten Free" : "Contains Gluten"}</span>
            </div>
          </div>
        </div>
        <div className="modal-img">
          <img src={image} alt="recipe-image" />
        </div>
        <div className="modal-body">
          {summary && (
            <div className="info-section summary-section">
              <div className="section-header">
                <h2 className="section-title">Recipe Summary</h2>
                <div className="section-divider"></div>
              </div>
              <div
                className="summary-content"
                dangerouslySetInnerHTML={{ __html: summary }}
              />
            </div>
          )}

          <div className="details-grid">
            {/* Left Column */}
            <div className="grid-column">
              {diet.length > 0 && (
                <div className="info-section">
                  <div className="section-header">
                    <h2 className="section-title">
                      <FaUtensils className="section-icon" /> Dietary Tags
                    </h2>
                    <div className="section-divider"></div>
                  </div>
                  <div className="tags-container">
                    {diet.map((d, i) => (
                      <span key={i} className="diet-tag">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {dishTypes.length > 0 && (
                <div className="info-section">
                  <div className="section-header">
                    <h2 className="section-title">
                      <FaUtensils className="section-icon" /> Dish Types
                    </h2>
                    <div className="section-divider"></div>
                  </div>
                  <div className="tags-container">
                    {dishTypes.map((dt, i) => (
                      <span key={i} className="dish-tag">
                        {dt}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="grid-column">
              {occasions.length > 0 && (
                <div className="info-section">
                  <div className="section-header">
                    <h2 className="section-title">
                      <FaCalendarAlt className="section-icon" /> Occasions
                    </h2>
                    <div className="section-divider"></div>
                  </div>
                  <div className="tags-container">
                    {occasions.map((o, i) => (
                      <span key={i} className="occasion-tag">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="info-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <FaStar className="section-icon" /> Ratings
                  </h2>
                  <div className="section-divider"></div>
                </div>
                <div className="rating-item">
                  <span className="rating-label">Spoonacular Score:</span>
                  <div className="rating-value-container">
                    <span className="rating-value">
                      {spoonacularScore
                        ? (spoonacularScore / 10).toFixed(1)
                        : "N/A"}
                    </span>
                    <div className="rating-bar">
                      <div
                        className="rating-fill"
                        style={{ width: `${spoonacularScore || 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {weightWatcherSmartPoints && (
                <div className="info-section">
                  <div className="section-header">
                    <h2 className="section-title">
                      <FaWeight className="section-icon" /> Weight Watchers
                    </h2>
                    <div className="section-divider"></div>
                  </div>
                  <div className="rating-item">
                    <span className="rating-label">Smart Points:</span>
                    <div className="rating-value-container">
                      <span className="rating-value">
                        {weightWatcherSmartPoints}
                      </span>
                      <div className="points-visual">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`point-dot ${
                              i < weightWatcherSmartPoints / 5 ? "active" : ""
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
