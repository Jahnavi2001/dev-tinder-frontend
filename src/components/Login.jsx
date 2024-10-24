import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
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

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-300 w-96 shadow-xl my-20">
        <div className="card-body gap-6">
          <div className="text-center font-bold text-xl">
            {isLogin ? "Login" : "Signup"}
          </div>
          {!isLogin && (
            <>
              <label className="form-control w-full max-w-xs">
                <div className="label mt-2">
                  <span className="label-text">FirstName</span>
                </div>
                <input
                  value={firstName}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label mt-2">
                  <span className="label-text">LastName</span>
                </div>
                <input
                  value={lastName}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </>
          )}

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

          <div>
            <div className="text-red-500">{error}</div>
            <button
              className="btn btn-primary w-full mt-6"
              onClick={isLogin ? handleLogin : handleSignup}
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </div>
          <p
            className="text-center cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "New User? Signup" : "Existing User? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
