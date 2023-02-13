import { Link } from "react-router-dom";
import welcome from "../assets/welcome.png";

export default function Home() {
  return (
    <div id="home">
      <div className="home">
        <h1>
          <span>Welcome to DAYDREAM!</span>
        </h1>
        <img src={welcome} className="welcome-img" />
        <br />
        <h3>
          An app that allows you to log your bucketlist wishes, and some of ours
          too 😉!
        </h3>
        <br />
        <Link className="welcome-btn" to="/bucketlist">
          See Your Wishes!
        </Link>
      </div>
    </div>
  );
}
