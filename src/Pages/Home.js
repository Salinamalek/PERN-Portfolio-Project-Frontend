import { Link } from "react-router-dom";
// import welcome from "../assets/Welcome.png";

export default function Home() {
  return (
    <div id="home">
      {/* <img src={welcome} alt="welcome" /> */}
      <p>
        <span>Welcome to DAYDREAM!</span>
        <br />
        An app that allows you to log your bucketlist wishes, and some of ours
        too 😉 .{" "}
        {/* <Link id="hint" className="type in name" to="/snacks/new"> */}
        {/* P0i$0n */}
        {/* </Link>{" "}  */}
        <br />
        {/* Click on any of the above links to get started!   */}
      </p>
    </div>
  );
}
