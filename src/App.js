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
        <Player videoSrc="https://stream.mux.com/V6Q01yPN00QqsGGLtij6M00R5iOvSYC9Nfx.m3u8" />
      </main>
    </div>
  );
}

export default App;
