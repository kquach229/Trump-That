import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrumpLanding from "./components/TrumpLanding";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route component={TrumpLanding} exact path="/" />
          <Route component={Home} path="/home" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
