import React from "react";
import { Link } from "react-router-dom";
import no from "../assets/no.png";
import "../Pages/Secret.css";

export default function Secret() {
  return (
    <div className="secret">
      <div className="secret-info">
        <h1>One Piece</h1>
        <img
          className="secret-img"
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/06/One-Piece.jpg"
          alt="One Piece"
        />
        <h3>Description: Find the One Piece and become the Pirate King!</h3>
        <h3>Location: UNKNOWN</h3>
        <h3>
          Completed: <br />
          <img src={no} alt="no" />
        </h3>
      </div>
      <div className="buttons">
        <div>
          <Link to={`/`}>
            <button className="navButtons">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
