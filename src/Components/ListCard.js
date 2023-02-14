import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import yes from "../assets/yes.png";
import no from "../assets/no.png";
import "./ListCard.css";

export default function ListCard({ list }) {
  const { id, name, description, location, continent, image, completed } = list;
  // const { API, axios } = useContextProvider();

  return (
    <tr>
      <td>
        <Link to={`/bucketlist/${id}`}>
          <p>{name}</p>
        </Link>
      </td>
      <td>
        {list.completed ? (
          <span>
            <img src={yes} alt="yes" />
          </span>
        ) : (
          <span>
            <img src={no} alt="no" />
          </span>
        )}
      </td>
    </tr>
  );
}
