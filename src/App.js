import React from "react";
import "./App.css";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Live streaming example with Mux</h1>
      </header>
      <main>
        <Player />
      </main>
    </div>
  );
}

export default App;
