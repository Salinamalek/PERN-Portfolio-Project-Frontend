import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
// import "./SnackShow.css";

export default function SnackShow() {
  const { API, axios } = useContextProvider();
  const [lists, setLists] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/bucketlist/${id}`)
      .then((res) => {
        // console.log(res.data);
        setLists(res.data);
      })
      .catch(() => navigate("/not-found"));
  }, [id, navigate]);

  return (
    <div className="list-info">
      <h1>{lists.name}</h1>
    </div>
  );
}
