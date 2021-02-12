import React, { useContext, useState } from "react";
import { Context } from "../context/context";

const Login = (props) => {
  const { login } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const obj = {
      email,
      password,
    };
    login(obj, props);
  };
  return (
    <div className="home">
      <div className="home__form">
        <h1 className="home__form-title">Login</h1>
        <div className="home__form-email">
          <i className="far fa-envelope home__icon"></i>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="home__form-password">
          <i className="fas fa-lock home__icon"></i>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={handleSubmit} className="home__form-btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
