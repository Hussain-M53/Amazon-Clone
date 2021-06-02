import { Link, useHistory } from "react-router-dom";
import React from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" onClick={login}>
            Continue
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's{" "}
          <span className="span">Conditions of Use </span>
          and <span className="span">Privacy Notice</span>.
        </p>
      </div>
      <div className="tag">
        <hr />
        <p>New to Amazon?</p>
        <hr />
      </div>
      <button className="create_btn" onClick={register}>Create your Amazon Account</button>
    </div>
  );
}

export default Login;
