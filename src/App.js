import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from 'react'

 function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
function Page0() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
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
          <Dashboard />
        </Route>
        <Route exact path="/page0">
          <Page0 />
        </Route>
        <Route exact path="/page1">
          <Page1 />
        </Route>
    </div>
    </Router>
  );
}

export default App;
