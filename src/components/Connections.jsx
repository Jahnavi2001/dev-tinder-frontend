import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);

  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);
  if (!connections) return;

  if (connections.length === 0)
    return (
      <h1 className="text-center text-xl font-bold my-10">
        No Connections Found
      </h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="text-xl font-bold">Connections</h1>
      <div className="flex flex-col items-center">
        {connections.map((request) => {
          const { firstName, lastName, about, age, gender, photoUrl } = request;
          return (
            <div
              key={request._id}
              className="flex bg-base-300 p-4 m-4 rounded-lg w-1/2 items-center gap-6"
            >
              <div>
                <img
                  src={photoUrl}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
              <div className="text-left flex flex-col gap-1">
                <h1 className="font-bold">{firstName + " " + lastName}</h1>
                <p>{about}</p>
                <p> {age && gender && age + ", " + gender}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
