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
              <strong>Soft skills</strong> Time management, organization,
              communication, team work
            </p>
            <p class="fadeInParagraphs" style={{ animationDelay: ".2s" }}>
              <strong>Programming:</strong> Assembly, Java, Javascript,
              HTML/CSS, React.js, Python, C++
            </p>
            <br />

            <p class="fadeInParagraphs" style={{ animationDelay: "1s" }}>
              <strong>Relevant Courses:</strong>
            </p>
            <p class="fadeInParagraphs" style={{ animationDelay: "1.2s" }}>
              Automata Theory, OS Concepts, Advanced Algorithms Design, Programming Languages Paradigms
            </p>
            <br />

            <p class="fadeInParagraphs" style={{ animationDelay: "2s" }}>
              <strong>Upcoming Courses:</strong>
            </p>
            <p class="fadeInParagraphs" style={{ animationDelay: "2.2s" }}>
              TBD
            </p>
          </div>
        </div>
      </section>
    );
}

export default SkillsScreen;
