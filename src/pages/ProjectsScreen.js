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
        <ProjectPreview
          link="https://github.com/ACM-Research/IoTSecurityVulnerabilities"
          name="iot_vulnerabilities"
          description="a semester-long research project done alongside the ACM research divison at UTD. researched security vulnerabilities in iot devices"
        />
      </div>
    </section>
  );
}

export default ProjectsScreen;
