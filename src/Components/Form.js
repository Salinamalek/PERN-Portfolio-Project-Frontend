import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider.js";
import NoImage from "../assets/default.png";
import "./Form.css";

export default function Form() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { axios, API, trigger, setTrigger, list, setList } =
    useContextProvider();
  const [lists, setLists] = useState({
    name: "",
    description: "",
    location: "",
    image: "",
    visited: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`${API}/bucketlist/${id}`)
        .then((res) => setLists(res.data))
        .catch((error) => navigate("/not-found"));
    }
  }, [id]);

  const handleChange = (event) => {
    setLists({ ...lists, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      axios
        .put(`${API}/bucketlist/${id}`, lists)
        .then(() => {
          navigate(`/bucketlist/${id}`);
          setTrigger(-trigger);
        })
        .catch((error) => console.log(error));
    } else {
      // update list with added list info before navigating with response from post request
      axios
        .post(`${API}/bucketlist`, lists)
        .then(({ data }) => {
          setList([...list, data]);
          navigate("/bucketlist");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="form">
      <h2>{id ? "" : "Add a Snack"}</h2>
      <form onSubmit={handleSubmit}>
        <div id="form-img">
          <img
            src={lists.image !== "" ? lists.image : NoImage}
            alt="awaiting valid url"
          />
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              onChange={handleChange}
              value={lists.name}
              required
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              onChange={handleChange}
              value={lists.description}
            />
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              onChange={handleChange}
              value={lists.location}
            />
            <label htmlFor="image">Image URL:</label>
            <input
              id="image"
              type="url"
              placeholder="include http:// or https://"
              onChange={handleChange}
              value={lists.image}
            />
          </div>
        </div>

        {/* <div id="visited-icon">
          <h3>Visited: {lists.visited ? "Yes" : "No"}</h3>
        </div> */}
        <input
          id="submit-button"
          type="submit"
          value={id ? "Save Changes" : "Add Snack"}
        />
      </form>
    </div>
  );
}
