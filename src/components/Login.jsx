import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("jahnavi@vuyyuru.com");
  const [password, setPassword] = useState("Jahnavi@123");

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLogin = async () => {

    try {
      const res = await axios.post(BASE_URL + "/login", {
        emailId,
        password,
      }, {
        withCredentials: true
      });

      dispatch(addUser(res.data))
      navigate('/')
    }
    catch(err) {
      console.log(err)
    }

    // const res = await fetch("http://localhost:3000/login", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     emailId, password
    //   })
    // })
    // console.log("🚀 ~ onHandleLogin ~ res:", res)
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl mx-auto my-20">
      <div className="card-body gap-8">
        <label className="form-control w-full max-w-xs">
          <div className="label mt-2">
            <span className="label-text">Email ID</span>
          </div>
          <input
            value={emailId}
            type="text"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setEmailId(e.target.value)}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            value={password}
            type="text"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn btn-primary w-full mt-4" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
