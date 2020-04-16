import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LiveStream from "./pages/LiveStream";
import Recordings from "./pages/Recordings";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route path="/recordings">
              <Recordings />
            </Route>
            <Route path="/">
              <LiveStream />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
