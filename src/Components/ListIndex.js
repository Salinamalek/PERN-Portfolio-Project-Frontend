import { useState, useEffect } from "react";
import { useContextProvider } from "../Provider/Provider.js";
import ListCard from "./ListCard.js";

export default function ListIndex() {
  const { list, setList, axios, API } = useContextProvider();

  useEffect(() => {
    // get all snacks
    axios
      .get(`${API}/bucketlist`)
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, [list.length]);
  return (
    <div className="index">
      <section className="index-list">
        {list.map((list) => (
          <ListCard key={list.id} list={list} />
        ))}
      </section>
    </div>
  );
}
