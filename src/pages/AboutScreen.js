import resume from "../files/Resume.pdf";
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
            Hello! I'm Naja-Lee Habboush, an undergraduate Computer
            Science student at UT Dallas with a passion for technology and a
            strong foundation in various skills. I'm eager to contribute my knowledge and abilities to
            the field of Computer Science.
          </p>
          <br />
          <p id="second" class="fadeInParagraphs">
            I am currently seeking an internship or research opportunity. This
            dynamic and critical field fascinates me, and I am eager to apply my
            skills and knowledge. I believe this experience will not only enrich
            my education, but also provide valuable insights into the real-world
            applications of computer science.
          </p>
          <br />
          <p id="third" class="fadeInParagraphs">
            If you have an exciting opportunity to discuss, please feel free to reach out to me. I'm
            open to exploring new challenges and eager to contribute to
            innovative projects. Here is my&nbsp;
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
