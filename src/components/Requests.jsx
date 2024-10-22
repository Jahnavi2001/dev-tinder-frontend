/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestsSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);

  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClickRequest = async (action, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + action + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequest({ _id }));
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return (
      <h1 className="text-center text-xl font-bold my-10">No Requests Found</h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="text-xl font-bold">Requests</h1>
      <div className="flex flex-col items-center">
        {requests.map((request) => {
          const { firstName, lastName, about, age, gender, photoUrl } =
            request.fromUserId;
          return (
            <div
              key={request._id}
              className="flex bg-base-300 p-4 m-4 rounded-lg w-1/2 items-center gap-6"
            >
              <div>
                <img
                  src={photoUrl}
                  className="h-20 object-cover rounded-lg max-w-20 min-w-20"
                />
              </div>
              <div className="text-left flex flex-col gap-1">
                <h1 className="font-bold">{firstName + " " + lastName}</h1>
                <p>{about}</p>
                <p> {age && gender && age + ", " + gender}</p>
                <div className="flex gap-4">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleClickRequest("rejected", request._id)}
                  >
                    Reject
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleClickRequest("accepted", request._id)}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
