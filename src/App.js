import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LiveStream from "./pages/LiveStream";
import Recordings from "./pages/Recordings";
import Navigation from "./components/Navigation";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles />
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
    </Router>
  );
}

export default App;
