import React from "react";
import Player from "../components/Player";

const recordingURLs = [
  "https://stream.mux.com/yaKDfIi68j01HD660100CF9o02l1Dklp3tDl2OnoSSNPj9M.m3u8",
  "https://stream.mux.com/k7HXQJHiJVD3bIT8uF7iBnJeuIOBF4UH28ihnU8SIMo.m3u8",
];

function Recordings() {
  return (
    <>
      <h1>Recordings</h1>
      {recordingURLs.map((recordingURL) => (
        <Player key={recordingURL} videoSrc={recordingURL} />
      ))}
    </>
  );
}

export default Recordings;
