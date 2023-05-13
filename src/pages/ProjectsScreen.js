import ProjectPreview from "../components/ProjectPreview";
import useTypingAnimation from "../components/pretty/TypingAnimation";
import { Link } from "react-router-dom";

function ProjectsScreen() {
  const { typedTitle, showCursor } = useTypingAnimation(" projects");

  return (
    <section>
      <h1 class="pageTitle pageText">
        {typedTitle}
        {showCursor && "_"}
      </h1>

      <div class="projectTag fadeInParagraphs" style={{ animationDelay: "1s" }}>
        select project for details. scroll for more
      </div>

      <div
        class="projectsList fadeInParagraphs"
        style={{ animationDelay: "1s" }}
      >
        <ProjectPreview
          link="https://github.com/najalee/najalee.github.io"
          name="portfolio_website"
          description="a personal website that displays past work and projects. created using React.js and hosted with Github Pages"
        />
      </div>
    </section>
  );
}

export default ProjectsScreen;
