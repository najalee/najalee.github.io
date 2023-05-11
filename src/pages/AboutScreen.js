import { Link } from "react-router-dom";
import resume from "../stuff/Resume.pdf";

function AboutScreen() {
  return (
    <section>
      <div class="pageText">
        <h1 class="pageTitle">about</h1>
        <div class="paragraphs">
          <p>
            Hello, I’m Naja-Lee Habboush, and I’m pursuing a BS in Computer
            Science at UT Dallas. I love learning new things, and right now I’m
            interested in cybersecurity.
          </p>
          <p>
            Obsessed with video games, playing music, and spending time with
            friends. Problem-solver, organized, and a great communicator.
          </p>
          <p>
            Currently looking for an internship in software engineering, web
            dev, security engineering, and game dev. Here is my&nbsp;
            <a href={resume} target="_blank" rel="noopener noreferrer">
              resume
            </a>
            , lets connect!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutScreen;
