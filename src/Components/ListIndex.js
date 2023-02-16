import { useEffect } from "react";
import { useContextProvider } from "../Provider/Provider.js";
import ListCard from "./ListCard.js";
import "./ListIndex.css";
import "./Styles.js";

export default function ListIndex() {
  const { list, setList, axios, API } = useContextProvider();

  // Get the button:
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

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
    </div>
  );
}
