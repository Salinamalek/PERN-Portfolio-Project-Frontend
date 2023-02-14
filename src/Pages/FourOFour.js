import notFound from "../assets/404-page.png";
import "./FourOFour.css";

export default function FourOFour() {
  return (
    <div className="error">
      <div>
        <img id="error-img" src={notFound} alt="error" />
      </div>
    </div>
  );
}
