import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import dark from "../assets/dark.png";
import light from "../assets/light.png";
import { BsCardChecklist } from "react-icons/bs";
import { BsCloudPlus } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import logo from "../assets/logo.png";
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
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/bucketlist">
        <BsCardChecklist /> <br />
        List
      </Link>
      <Link to="/bucketlist/new">
        <BsCloudPlus /> <br />
        New
      </Link>
      <Link to="/about">
        <AiOutlineQuestionCircle /> <br />
        About
      </Link>
      <button className="toggleTheme" onClick={toggleTheme}>
        {theme === "light" ? (
          <img className="toggleButton" src={dark} alt="lm" />
        ) : (
          <img className="toggleButton" src={light} alt="dm" />
        )}
      </button>
    </nav>
  );
}
