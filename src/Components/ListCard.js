import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import "./ListCard.css";

export default function ListCard({ list }) {
  const { id, name, description, location, image, completed } = list;
  // const { API, axios } = useContextProvider();

  return (
    <tr>
      <td>
        {" "}
        <Link to={`/bucketlist/${id}`}>
          <p>{name}</p>
        </Link>
      </td>
      <td>{list.completed ? <span>✅</span> : <span>❌</span>}</td>
    </tr>
  );
}
