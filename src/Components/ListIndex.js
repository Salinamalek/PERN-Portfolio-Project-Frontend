import { useState, useEffect } from "react";
import { useContextProvider } from "../Provider/Provider.js";
import ListCard from "./ListCard.js";
import "./ListIndex.css";

export default function ListIndex() {
  const { list, setList, axios, API } = useContextProvider();
  // const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  // const [radio, setRadio] = useState("");

  // function filterSearch(string, objArr) {
  //   const filteredList = objArr.filter(({ name }) => {
  //     const input = string.toLowerCase().split(` `).join(``);
  //     const listName = name.toLowerCase().split(` `).join(``);

  //     if (input === "") return objArr;
  //     else {
  //       return listName.includes(input);
  //     }
  //   });
  // if (radio) {
  //   const completedList = radio === "completed" ? true : false;
  //   const completedFilter = filteredList.filter(
  //     ({ completed }) => completed === true
  //   );
  //   setSearchResult(completedFilter);
  // } else {
  //   setSearchResult(filteredList);
  // }
  // }

  // function handleSearch(e) {
  //   const value = e.target.value;
  //   setSearchResult([...list]);
  //   setSearch(value);
  //   filterSearch(value, [...list]);
  // }

  // function handleRadio(e) {
  //   const value = e.target.value;
  //   setRadio(value);
  //   const completedList = value === "true" ? true : false;
  //   if (value && !search) {
  //     const completedFilter = list.filter(
  //       ({ completed }) => completed === true
  //     );
  //     setSearchResult(completedFilter);
  //   } else if (search) {
  //     const completedFilter = searchResult.filter(
  //       ({ completed }) => completed === true
  //     );
  //     setSearchResult(completedFilter);
  //   } else {
  //     setSearchResult(list);
  //   }
  // }

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
        <div>
          <table>
            <thead>
              <tr>
                <th>Bucket List</th>
                <th id="completed">Completed</th>
              </tr>
            </thead>
            <tbody>
              {list.map((list) => (
                <ListCard key={list.id} list={list} />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="search">
        {/* searchbar */}
        {/* <input
          id="searchbar"
          type="text"
          placeholder="Search Bucket List"
          value={search}
          onChange={(event) => {
            handleSearch(event);
          }}
        /> */}

        {/* radio buttons */}
        {/* <section className="radio">
          <label htmlFor="completed">
            <input
              type="radio"
              id="completed"
              name="radio-button"
              checked={radio === "completed" ? true : false}
              value="completed"
              onChange={(event) => handleRadio(event)}
            />{" "}
            Completed
          </label>

          <label htmlFor="incomplete">
            <input
              type="radio"
              id="incomplete"
              name="radio-button"
              checked={radio === "completed" ? true : false}
              value="incomplete"
              onChange={(event) => handleRadio(event)}
            />{" "}
            Incomplete
          </label>

          <label htmlFor="showAll">
            <input
              type="radio"
              id="showAll"
              name="radio-button"
              checked={radio === "" ? true : false}
              value=""
              onChange={(event) => handleRadio(event)}
            />{" "}
            Show All
          </label>
        </section> */}
      </div>
    </div>
  );
}
