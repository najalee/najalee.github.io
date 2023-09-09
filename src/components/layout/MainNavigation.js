import { Link, useLocation } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    const location = useLocation();
    const activeClass = classes.active;


    console.log(location.pathname);
    return (
      <ul className={classes.navigation}>
        <li className={location.pathname === "/about" ? activeClass : ""}>
          <Link to="/about">
            {location.pathname === "/about" ? "> about" : "about"}
          </Link>
        </li>
        <li className={location.pathname === "/skills" ? activeClass : ""}>
          <Link to="/skills">
            {location.pathname === "/skills" ? "> skills" : "skills"}
          </Link>
        </li>
        <li className={location.pathname === "/projects" ? activeClass : ""}>
          <Link to="/projects">
            {location.pathname === "/projects" ? "> projects" : "projects"}
          </Link>
        </li>
        <li className={location.pathname === "/contact" ? activeClass : ""}>
          <Link to="/contact">
            {location.pathname === "/contact" ? "> contact" : "contact"}
          </Link>
        </li>
      </ul>
    );
}

export default MainNavigation;