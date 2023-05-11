import ProjectPreview from "../components/ProjectPreview";

function ProjectsScreen() {
  return (
    <section>
      <h1 class="pageTitle pageText">projects</h1>

      <div class="projectsList">
        <ProjectPreview
          link="https://github.com/najalee"
          name="portfolio_website"
          description="a personal website that displays past work and projects. created using React.js"
        />
      </div>
    </section>
  );
}

export default ProjectsScreen;
