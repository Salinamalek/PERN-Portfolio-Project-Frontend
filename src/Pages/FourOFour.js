import milk from "../assets/404-milk.png";
import "./FourOFour.css";

export default function FourOFour() {
  return (
    <div className="error">
      <div>
        <img id="milk" src={milk} alt="error" />
      </div>
    </div>
  );
}
