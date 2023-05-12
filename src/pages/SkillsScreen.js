import useTypingAnimation from "../components/pretty/TypingAnimation";
import { Link } from "react-router-dom";

function SkillsScreen() {
    const { typedTitle, showCursor } = useTypingAnimation(" skills");

    return (
      <section>
        <div class="pageText">
          <h1 class="pageTitle">
            {typedTitle}
            {showCursor && "_"}
          </h1>
          <div class="paragraphs">
            <p class="fadeInParagraphs" style={{ animationDelay: ".2s" }}>
              Time management, organization, communication Assembly, Java,
              Javascript, HTML/CSS, React.js, Python, C++
            </p>
            <br />

            <p class="fadeInParagraphs" style={{ animationDelay: "1s" }}>
              <strong>Relevant Courses:</strong>
            </p>
            <p class="fadeInParagraphs" style={{ animationDelay: "1.2s" }}>
              Data Structures and Algorithms, Computer Architecture, Digital
              Logic, Software Engineering, Systems Programming in UNIX, Discrete
              Math 1&2
            </p>
            <br />

            <p class="fadeInParagraphs" style={{ animationDelay: "2s" }}>
              <strong>Upcoming Courses:</strong>
            </p>
            <p class="fadeInParagraphs" style={{ animationDelay: "2.2s" }}>
              Automata Theory, Advanced Data Structures and Algorithms,
              Programming Language Paradigms, Operating Systems Concepts
            </p>
          </div>
        </div>
      </section>
    );
}

export default SkillsScreen;
