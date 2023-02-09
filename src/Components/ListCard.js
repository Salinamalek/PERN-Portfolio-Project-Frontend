import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";

export default function ListCard({ list }) {
  const { id, name, description, location, image, visited } = list;
  const { API, axios } = useContextProvider();

  return (
    <section className="list-details">
      <Link to={`/bucketlist/${id}`}>
        <p>{name}</p>
      </Link>
      <p>Description: {description}</p>
      <img src={image} alt={location} />
      {/* <p>Location: {location}</p> */}
    </section>
  );
}
