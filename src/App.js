import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LiveStream from "./pages/LiveStream";
import Recordings from "./pages/Recordings";
import Navigation from "./components/Navigation";
import GlobalStyles from "./GlobalStyles";
import Logo from "./components/Logo";
import styled from "@emotion/styled";

const Header = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header>
        <Logo />
        <Navigation />
      </Header>
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
