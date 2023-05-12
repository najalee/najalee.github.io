import resume from "../stuff/Resume.pdf";
import React, { useState, useEffect } from "react";
import useTypingAnimation from "../components/pretty/TypingAnimation";
import { Link } from "react-router-dom";

function AboutScreen() {
  const { typedTitle, showCursor } = useTypingAnimation(" about");

  return (
    <section>
      <div class="pageText">
        <h1 class="pageTitle">
          {typedTitle}
          {showCursor && "_"}
        </h1>
        <div class="paragraphs">
          <p class="fadeInParagraphs">
            Hello, I’m Naja-Lee Habboush, and I’m pursuing a BS in Computer
            Science at UT Dallas. I love learning new things, and right now I’m
            interested in cybersecurity.
          </p>
          <br />
          <p id="second" class="fadeInParagraphs">
            Obsessed with video games, playing music, and spending time with
            friends. Problem-solver, organized, and a great communicator.
          </p>
          <br />
          <p id="third" class="fadeInParagraphs">
            Currently looking for an internship in software engineering, web
            dev, and security engineering. Here is my&nbsp;
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
