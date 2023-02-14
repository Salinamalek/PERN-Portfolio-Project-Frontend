import { Link } from "react-router-dom";
import yes from "../assets/yes.png";
import no from "../assets/no.png";
import "./ListCard.css";

export default function ListCard({ list }) {
  const { id, name } = list;

  return (
    <tr>
      <td>
        <Link to={`/bucketlist/${id}`}>
          <p>{name}</p>
        </Link>
      </td>
      <td>
        {list.completed ? (
          <span>
            <img src={yes} alt="yes" />
          </span>
        ) : (
          <span>
            <img src={no} alt="no" />
          </span>
        )}
      </td>
    </tr>
  );
}
