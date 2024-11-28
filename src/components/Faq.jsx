import Accordion from "react-bootstrap/Accordion";

function Faq() {
  return (
    <div className="faq">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            How can I save my favorite recipes?
          </Accordion.Header>
          <Accordion.Body>
            You can save your favorite recipes by clicking the heart icon or
            "Save Recipe" button on the recipe page. Saved recipes will be
            stored in your account under "My Favorites".
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Are all the recipes free to access?
          </Accordion.Header>
          <Accordion.Body>
            Absolutely! All our recipes are free to view and try at home. You
            can create a free account to access additional features like saving
            recipes and creating shopping lists.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header> Can I submit my own recipes?</Accordion.Header>
          <Accordion.Body>
            Unfortunately not yet 😥, We will make provisions for that soonest,
            kindly be on the look out.
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Do the recipes include nutritional information?
          </Accordion.Header>
          <Accordion.Body>
            Many of our recipes include nutritional information such as
            calories, protein, fat, and carbs. You can find this information at
            the bottom of the recipe page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            How do I search for recipes by ingredients?
          </Accordion.Header>
          <Accordion.Body>
            Use our "Search" feature. Type the ingredients you have, and we’ll
            suggest recipes that include those ingredients.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            How can I share recipes with my friends?
          </Accordion.Header>
          <Accordion.Body>
            Each recipe page has social sharing buttons for platforms like
            Facebook, Twitter, Pinterest, and email. Click on the desired option
            to share the recipe directly.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;
