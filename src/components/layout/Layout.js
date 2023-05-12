import classes from "./Layout.module.css";
import TopBar from "./TopBar";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <TopBar />
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
