import React, { useState, useEffect } from "react";

// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as faceapi from "face-api.js"; // npm i face-api.js
import axios from "axios";

import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";

// Importing components
import Header from "./Header/index";
import Home from "./Header/Home";
import Login from "./Header/Login";
import Logout from "./Header/Logout";
import Register from "./Header/Register";
import Webcam from "./Webcam";
// import Button from "../Button"
import PlayVideo from "./PlayVideo";

function App() {
  const { state, setState, register, login, logout } = useApplicationData();

  const testRoute = e => {
    e.preventDefault();
    return axios({
      method: "GET",
      url: "api/videos/"
    }).then(data => console.log(data));
  };

  return (
    <Router>
      <div className="App">
        <main className="layout">
          <div className="top-header">
            <Header
              user={state.user}
              login={login}
              register={register}
              logout={logout}
            />
          </div>
          <Switch>
            <Route path="/login">
              <Login login="{login}" />
            </Route>

            <Route path="/register">
              <Register register="{register}" />
            </Route>

            <Route path="/logout">{/* <Logout /> */}</Route>

            <Route path="/">
              <Home logout="{logout}" user="{state.user}" />
              <PlayVideo />
              <Webcam />
            </Route>

            <Route path="/profile">
              {/* <Profile /> */}
              {/* <Watchlog /> */}
            </Route>

            <Route path="/playvideo">
              <Webcam user="{state.user}" />
              <PlayVideo />
            </Route>

            <Route path="/webcam">{/* <Webcam /> */}</Route>

            <Route path="/watch_logs">{/* <Watchlog /> */}</Route>
          </Switch>
          <h1> </h1>
        </main>
      </div>
    </Router>
  );
}

export default App;
