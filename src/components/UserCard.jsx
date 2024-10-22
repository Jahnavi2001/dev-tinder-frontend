/* eslint-disable react/prop-types */

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleActionClick = async (status, userId) => {
    await axios.post(
      BASE_URL + "/request/send/" + status + "/" + userId,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(
      removeFeed({
        _id: userId,
      })
    );
  };

  const { _id, firstName, lastName, photoUrl, about, gender, age } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure className="h-96">
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age && gender && age + " , " + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-center flex gap-6 mt-6">
          <button
            className="btn btn-primary w-32"
            onClick={() => handleActionClick("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary w-32"
            onClick={() => handleActionClick("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
