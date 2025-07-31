import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  FaHeart,
  FaUtensils,
  FaChartBar,
  FaSearch,
  FaShareAlt,
} from "react-icons/fa";

function Faq() {
  return (
    <div className="faq-container">
      <Accordion flush>
        <Accordion.Item eventKey="0" className="faq-item">
          <Accordion.Header className="faq-header">
            <FaHeart
              className="faq-icon"
              style={{
                color: "#DB8E1E",
                padding: "8px",
                fontSize: "1.5rem",
                width: "32px",
                height: "32px",
              }}
            />
            How can I save my favorite recipes?
          </Accordion.Header>
          <Accordion.Body className="faq-body">
            You can save your favorite recipes by clicking the heart icon on any
            recipe card. All saved recipes are stored in your personal
            "Favorites" collection, accessible from your profile menu. We also
            offer the option to create custom collections like "Weeknight
            Dinners" or "Holiday Specials".
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="faq-item">
          <Accordion.Header className="faq-header">
            <FaUtensils
              className="faq-icon"
              style={{
                color: "#DB8E1E",
                padding: "8px",
                fontSize: "1.5rem",
                width: "32px",
                height: "32px",
              }}
            />
            Are all the recipes free to access?
          </Accordion.Header>
          <Accordion.Body className="faq-body">
            Yes! Chef'sPal believes in making culinary inspiration accessible to
            everyone. Our entire recipe collection is completely free. We may
            introduce premium features in the future, but the core recipe
            content will always remain free.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="faq-item">
          <Accordion.Header className="faq-header">
            <FaUtensils
              className="faq-icon"
              style={{
                color: "#DB8E1E",
                padding: "8px",
                fontSize: "1.5rem",
                width: "32px",
                height: "32px",
              }}
            />
            Can I submit my own recipes?
          </Accordion.Header>
          <Accordion.Body className="faq-body">
            We're currently developing a community recipe submission feature!
            While not available yet, we plan to launch this by the end of the
            year. Sign up for our newsletter to be notified when this feature
            goes live.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="faq-item">
          <Accordion.Header className="faq-header">
            <FaChartBar
              className="faq-icon"
              style={{
                color: "#DB8E1E",
                padding: "8px",
                fontSize: "1.5rem",
                width: "32px",
                height: "32px",
              }}
            />
            Do recipes include nutritional information?
          </Accordion.Header>
          <Accordion.Body className="faq-body">
            All recipes marked with our "Nutrition+" badge include comprehensive
            nutritional data. You'll find calories, macronutrients, and key
            vitamins/minerals. We're working to add this information to all
            recipes in our database.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" className="faq-item">
          <Accordion.Header className="faq-header">
            <FaSearch
              className="faq-icon"
              style={{
                color: "#DB8E1E",
                padding: "8px",
                fontSize: "1.5rem",
                width: "32px",
                height: "32px",
              }}
            />{" "}
            How do I search by ingredients?
          </Accordion.Header>
          <Accordion.Body className="faq-body">
            Use our advanced search with the "Ingredients" filter. You can input
            multiple ingredients, and we'll show recipes that include all, some,
            or any of them. The "Pantry Chef" tool also suggests recipes based
            on what you have on hand.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" className="faq-item">
          <Accordion.Header className="faq-header">
            <FaShareAlt
              className="faq-icon"
              style={{
                color: "#DB8E1E",
                padding: "8px",
                fontSize: "1.5rem",
                width: "32px",
                height: "32px",
              }}
            />
            How can I share recipes?
          </Accordion.Header>
          <Accordion.Body className="faq-body">
            Each recipe has share buttons for social media, email, and messaging
            apps. Our "Share Collection" feature lets you bundle multiple
            recipes into a shareable menu. Professional accounts can create
            branded shares with custom notes.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;
