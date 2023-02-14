import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import "./ListShow.css";

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

  const deleteBucketList = () => {
    axios
      .delete(`${API}/bucketlist/${id}`)
      .then(() => {
        navigate(`/bucketlist`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteBucketList();
  };

  return (
    <div className="list-info">
      <div className="show-info">
        <h1>{lists.name}</h1>
        <img className="listImg" src={lists.image} alt={lists.location} />
        <h3>Description: {lists.description}</h3>
        <h3>Location: {lists.location}</h3>
        <h3>
          Completed: {lists.completed ? <span>✅</span> : <span>❌</span>}
        </h3>
      </div>
      <div className="buttons">
        <div>
          <Link to={`/bucketlist`}>
            <button className="navButtons">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/bucketlist/${id}/edit`}>
            <button className="navButtons">Edit</button>
          </Link>
        </div>
        <div>
          <button className="navButtons" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
