import Footer from "../Footer";

function About() {
  return (
    <div>
      <h2> About Chef'sPal</h2>

      <div className="us">
        <h1>Who We Are</h1>
        <p>
          Chef'sPal is here to help you cook delicious meals with less stress
          and more joy. We offer recipes and cooking advice for home cooks, by
          home cooks. Helping create “kitchen wins” is what we’re all about.
        </p>

        <p>
          Chef'sPal was founded in 2003 by Elise Bauer as a home cooking blog to
          record her favorite family recipes. Today, Simply Recipes has grown
          into a trusted resource for home cooks with more than 3,000 tested
          recipes, guides, and meal plans, drawing over 15 million readers each
          month from around the world. We’re supported by a diverse group of
          recipe developers, food writers, recipe and product testers,
          photographers, and other creative professionals.
        </p>
      </div>
      <div className="history">
        <h1> Our History</h1>
        Elise Bauer was a busy Silicon Valley executive when she became sick
        with a flu that wouldn’t go away in 2001. In 2003, Elise moved home with
        her parents and lived with them for several years, recovering from
        chronic fatigue and documenting her parents’ cooking on Simply Recipes.
        (Here’s more of that story.) Over the years, what started as a small
        blog grew to reach millions of readers every month! In 2020, Simply
        Recipes was acquired by Dotdash Meredith, a New York-based media
        company.
      </div>
      <div className="faq">
        <h1> Frequently Asked Questions</h1>
        The answers to some of our most commonly asked questions, like "How do I
        print a recipe?" and "Where is my comment" can be found here. For all
        other questions please contact us at the email addresses below.
      </div>
      <Footer />
    </div>
  );
}

export default About;
