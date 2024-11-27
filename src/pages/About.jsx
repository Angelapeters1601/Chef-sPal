import "./About.css";
import Faq from "../Faq";
import Footer from "../Footer";
import NavComponent from "../NavComponent";

function About() {
  return (
    <div className="about">
      <NavComponent />

      <h2 className="about-title"> About Chef'sPal</h2>
      <div className="about-subtitle">
        <h1>Who We Are</h1>
        <p>
          At Chef's Pal, we are passionate about making cooking a joyful and
          accessible experience for everyone. Whether you’re a seasoned chef or
          a home cook exploring the world of flavors, we are your trusted
          companion in the kitchen. Our mission is to inspire creativity and
          confidence in cooking by providing carefully curated recipes,
          personalized meal suggestions, and helpful tools tailored to your
          culinary needs.
        </p>

        <p>
          Chef's Pal is more than just a recipe app—it's a community for food
          lovers. With a collection of recipes spanning various cuisines,
          dietary preferences, and skill levels, we aim to bring the joy of
          cooking to your fingertips. We also provide step-by-step instructions,
          ingredient swaps, and pro tips to ensure that every dish you create
          becomes a masterpiece. Our app is designed to empower you, whether
          you're cooking for family, hosting a dinner party, or simply trying
          something new. Our vision is to make delicious, nutritious, and
          creative cooking accessible to everyone while celebrating the art and
          science of food.
        </p>
      </div>
      <div className="history">
        <h1> Our History</h1>
        <p>
          The journey of Chef's Pal began with a simple idea: to make cooking a
          fun and stress-free experience for everyone. It was born out of a love
          for food and the realization that many people struggle to find the
          right recipes, techniques, and inspiration in the kitchen. Starting as
          a small project for food enthusiasts, Chef's Pal has grown into a
          comprehensive platform that serves thousands of users. Over the years,
          we've listened to our community, embraced feedback, and continuously
          innovated to make our app user-friendly, engaging, and packed with
          features that make cooking easier and more enjoyable. Today, Chef's
          Pal stands as a testament to our commitment to culinary excellence and
          our belief that great food brings people together.
        </p>
      </div>
      <div className="faq">
        <h1> Frequently Asked Questions</h1>
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default About;
