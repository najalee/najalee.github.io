import { Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import useTypingAnimation from "../components/pretty/TypingAnimation"

function HomeScreen() {
  const { typedTitle, showCursor } = useTypingAnimation(" hello i'm");

  return (
    <div>
      <div class="container">
        <span class="homeGreeting">
          {typedTitle}
          {showCursor && "_"}
        </span>
        <h1
          class="homeTitle fadeInParagraphs"
          style={{animationDelay: "1s" }}
        >
          najalee
        </h1>
        <span
          class="fadeInParagraphs homeBelowTitle"
          style={{ animationDelay: "2s" }}
        >
          undergrad computer science
        </span>
      </div>
    </div>
  );
}

export default HomeScreen;



      /* <div class="vertical">--------------------</div> */

      // <ul class="navigation fadeInParagraphs" style={{ animationDelay: "1s" }}>
      //   <li class="grow">
      //     <Link to="about">&gt; about</Link>
      //   </li>
      //   <li class="grow">
      //     <Link to="skills">&gt; skills</Link>
      //   </li>
      //   <li class="grow">
      //     <Link to="projects">&gt; projects</Link>
      //   </li>
      //   <li class="grow">
      //     <Link to="contact">&gt; contact</Link>
      //   </li>
      // </ul>;