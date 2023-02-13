import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import darkMode from "../assets/darkmode.png";
import lightMode from "../assets/lightmode.png";
import logo from "../assets/bucketlist-icon.png";
import { BsCardChecklist } from "react-icons/bs";
import { BsCloudPlus } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./Nav.css";

export default function Nav() {
  const { theme, setTheme } = useContextProvider();
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" height="45px" />
      </Link>
      <Link to="/bucketlist">
        <BsCardChecklist /> Bucket List
      </Link>
      <Link to="/bucketlist/new">
        <BsCloudPlus /> New
      </Link>
      <Link to="/about">
        <AiOutlineQuestionCircle /> About
      </Link>
      <button className="toggleTheme" onClick={toggleTheme}>
        {theme === "light" ? (
          <img className="toggleButton" src={lightMode} alt="lm" />
        ) : (
          <img className="toggleButton" src={darkMode} alt="dm" />
        )}
      </button>
    </nav>
  );
}
