import { Link} from "react-router-dom";

function HomeScreen() {
  return (
    <section>
        <div class="container">
          <span class="homeGreeting">hello i'm</span>
          <h1 class="homeTitle">Naja-Lee</h1>
        </div>
      <ul class="navigation">
        <li>
          <Link to="about">&gt; about</Link>
        </li>
        <li>
          <Link to="skills">&gt; skills</Link>
        </li>
        <li>
          <Link to="projects">&gt; projects</Link>
        </li>
        <li>
          <Link to="contact">&gt; contact</Link>
        </li>
      </ul>
    </section>
  );
}

export default HomeScreen;
