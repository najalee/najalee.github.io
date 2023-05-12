import useTypingAnimation from "../components/pretty/TypingAnimation";
function ContactScreen() {
    const { typedTitle, showCursor } = useTypingAnimation(" contact")

    return (
      <section>
        <div class="pageText">
          <h1 class="pageTitle">
            {typedTitle}
            {showCursor && "_"}
          </h1>
          <div class="paragraphs fadeInParagraphs">
            <p>
              Want to get in touch? Reach out to me through my{" "}
              <a
                href="https://github.com/najalee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/naja-lee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              , or email me at{" "}
              <a href="mailto:najaleeh@gmail.com">najaleeh@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    );
}

export default ContactScreen;
