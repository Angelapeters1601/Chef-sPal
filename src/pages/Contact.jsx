import "./contact.css";
import NavComponent from "../NavComponent";
import Footer from "../Footer";

function Contact() {
  return (
    <div>
      <NavComponent />

      <div className="contact">
        <h2>Contact Us:</h2>
        <p>
          We’d love to hear from you! Whether you have questions, feedback, or
          suggestions, the Chef's Pal team is here to help. Your thoughts and
          insights are important to us as we strive to make your cooking
          experience even better.
        </p>
        <h2>Get in Touch:</h2>
        <p>
          <ul>
            <li>
              Email: Reach us at <a href="#">support@chefspal.com</a> for
              assistance, inquiries, or to share your ideas with us.
            </li>
            <li>
              Phone: Call our support team at <a href="#">+234 - 9015096441 </a>{" "}
              during our business hours: Monday to Friday, 9 AM to 6 PM (WAT).
            </li>
            <li>
              Social Media: Connect with us on social media! Follow us on
              Instagram, Twitter, and Facebook for the latest updates, tips, and
              delicious inspiration.
            </li>
          </ul>
        </p>
        <h2>We'd Love Your Feedback:</h2>
        <p>
          Have a recipe idea or feature you’d like to see? Share your thoughts
          with us via mail. Your input helps us grow and serve you better. Let’s
          cook up something amazing together!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
