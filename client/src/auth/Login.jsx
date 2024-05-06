import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../actions/authAction.js";
import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await login({ email, password });
      if (res.data) {
        console.log("save user in redux");
      }
      //save user and token to local storage
      window.localStorage.setItem("auth", JSON.stringify(res.data));

      //save user and token in redux
      dispatch({
        type: "LOGGED_IN_USER",
        payload: res.data,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) toast.error(error.response.data);
    }
  };

  return (
    <>
      <div
        className="container-fluid bg-secondary
    p-5 text-center"
      >
        <h1>Login</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 ">
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
