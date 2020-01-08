import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [details, setDetails] = useState({ username: "", password: "" });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  function handleChanges(event) {
    setDetails({ ...details, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", details)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input name="username" onChange={event => handleChanges(event)} />
        </label>
        <label>
          Password:
          <input name="password" onChange={event => handleChanges(event)} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
