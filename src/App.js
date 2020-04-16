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
        <Player videoSrc="https://stream.mux.com/MQkWT2aOEELR6gzLtYzp9m8vy1cb4ATTNRAsSwGw1Hw.m3u8" />
      </main>
    </div>
  );
}

export default App;
