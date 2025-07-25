import { FaExclamationTriangle, FaRedo } from "react-icons/fa";
import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">
          <FaExclamationTriangle />
        </div>
        <h3 className="error-title">Recipe Loading Error</h3>
        <p className="error-message">{message}</p>
        <p className="error-instruction">
          We're having trouble loading the recipes right now. Please try again
          later.
        </p>
        <button onClick={handleRefresh} className="error-retry-btn">
          <FaRedo className="refresh-icon" />
          Try Again
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;
