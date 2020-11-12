import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrumpLanding from "./components/TrumpLanding";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TrumpNews from "./components/TrumpNews";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route component={TrumpLanding} exact path="/" />
          <Route component={Home} path="/home" />
          <Route component={TrumpNews} path="/trumpnews" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
