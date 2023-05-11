import { Link, useLocation } from "react-router-dom";
import github_logo from "../../stuff/github_logo.png";
import github_logo_hover from "../../stuff/github_logo_hover.png";
import linkedin_logo from "../../stuff/linkedin_logo.png";
import linkedin_logo_hover from "../../stuff/linkedin_logo_hover.png";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const location = useLocation();
  const { pathname } = location;
  // const pathParts = pathname.split("/");
  console.log(pathname);
  const pathParts = pathname.split("/").filter((part) => part !== ""); // Filter out empty parts

  return (
    <header className={classes.header}>
      <nav className={classes.pathname}>
        {pathname === "/" && <span className={classes.path}>/najalee</span>}
        {pathParts.length > 0 && (
          <Link to="/" key="home">
            /najalee
          </Link>
        )}

        {pathParts.map((part, index) => {
          const path = `/${pathParts.slice(0, index + 1).join("/")}`;

          if (index === pathParts.length - 1) {
            return (
              <span className={classes.path} key={index}>
                /{part}
              </span>
            );
          } else {
            return <Link to={path}>/{part}</Link>;
          }
        })}
      </nav>
      <nav className={classes.images}>
        <ul>
          <li>
            <a
              href="https://github.com/najalee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github_logo} alt="github logo"></img>
              <img src={github_logo_hover} alt="github logo"></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/naja-lee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin_logo} alt="linedkin logo"></img>
              <img src={linkedin_logo_hover} alt="linedkin logo"></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
