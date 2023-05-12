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

      <div class="projectTag">select project for details</div>

      <div class="projectsList">
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
