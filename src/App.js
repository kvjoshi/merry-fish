import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import dashboard from "./components/dashboard/dashboard";
import Signup from "./components/signup/signup";

import React from 'react'

function Dashboard() {
  return dashboard;
}
function Page0() {
  return Signup()

}
function Page1() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}


function App() {
  return (
    <Router>
    <div className="App">
      
        <Route exact path="/">
          <Page0 />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/page1">
          <Page1 />
        </Route>
    </div>
    </Router>
  );
}

export default App;
