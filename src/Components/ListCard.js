import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import "./ListCard.css";

export default function ListCard({ list }) {
  const { id, name, description, location, image, visited } = list;
  // const { API, axios } = useContextProvider();

  return (
    <section className="list-details">
      <tr>
        <td>
          {" "}
          <Link to={`/bucketlist/${id}`}>
            <p>{name}</p>
          </Link>
        </td>
        <td>{list.visited ? <span>Y</span> : <span>N</span>}</td>
      </tr>

      {/* <p>Description: {description}</p> */}
      {/* <img src={image} alt={location} /> */}
      {/* <p>Location: {location}</p> */}
    </section>
  );
}
