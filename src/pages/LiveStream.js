import React from "react";
import Player from "../components/Player";

function LiveStream() {
  return (
    <>
      <h1>Live streaming example with Mux</h1>
      <Player videoSrc="https://stream.mux.com/MQkWT2aOEELR6gzLtYzp9m8vy1cb4ATTNRAsSwGw1Hw.m3u8" />
    </>
  );
}

export default LiveStream;
