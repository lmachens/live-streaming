import React from "react";
import Player from "../components/Player";

const recordings = [
  {
    playbackId: "yaKDfIi68j01HD660100CF9o02l1Dklp3tDl2OnoSSNPj9M",
    thumbnailTime: 5,
    mp4file: "https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4",
  },
  {
    playbackId: "k7HXQJHiJVD3bIT8uF7iBnJeuIOBF4UH28ihnU8SIMo",
    thumbnailTime: 10,
  },
];

function Recordings() {
  return (
    <>
      <h1>Recordings</h1>
      {recordings.map((recording) => (
        <Player
          key={recording.playbackId}
          mp4file={recording.mp4file}
          thumbnailSrc={`https://image.mux.com/${recording.playbackId}/thumbnail.jpg?time=${recording.thumbnailTime}`}
          animatedGIFSrc={`https://image.mux.com/${recording.playbackId}/animated.gif`}
          videoSrc={`https://stream.mux.com/${recording.playbackId}.m3u8`}
        />
      ))}
    </>
  );
}

export default Recordings;
