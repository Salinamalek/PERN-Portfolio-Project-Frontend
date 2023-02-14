import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import yes from "../assets/yes.png";
import no from "../assets/no.png";
import "./ListShow.css";

export default function SnackShow() {
  const { API, axios } = useContextProvider();
  const [lists, setLists] = useState([]);
  const [related, setRelated] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/bucketlist/${id}`)
      .then((res) => {
        setLists(res.data);
      })
      .catch(() => navigate("/not-found"));
  }, [id, navigate]);

  useEffect(() => {
    axios
      .get(`${API}/bucketlist`)
      .then((res) => {
        // console.log(res.data);
        setRelated(res.data);
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
        <h3>
          Location: {lists.location}, {lists.continent}
        </h3>
        <h3>
          Completed:{" "}
          {lists.completed ? (
            <span>
              <br />
              <img src={yes} alt="yes" />
            </span>
          ) : (
            <span>
              <br />
              <img src={no} alt="no" />
            </span>
          )}
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
      <h3>Related Bucket List Ideas:</h3>
      <div className="related-list">
        {related.map((el) => {
          if (el.continent.includes(lists.continent) && el.id !== lists.id) {
            return (
              <div key={el.id} className="ind-cards">
                <Link to={`/bucketlist/${el.id}`}>
                  <img className="related-imgs" src={el.image} />
                </Link>
                <Link to={`/bucketlist/${el.id}`}>
                  <h4>{el.name}</h4>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
