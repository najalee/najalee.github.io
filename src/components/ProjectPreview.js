import { Link } from "react-router-dom";
import classes from "./ProjectPreview.module.css";

function ProjectPreview(props) {
  return (
    <div className={classes.projectContainer}>
      <Link
        /*style={{color: 'white'}}*/ to={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>&gt;&nbsp;{props.name}</h1>
      </Link>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectPreview;
