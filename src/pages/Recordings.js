import React, { useState, useEffect } from "react";
import Player from "../components/Player";

const recordingsAPI = `https://api.mux.com/video/v1/assets`;

function Recordings() {
  const [recordings, setRecordings] = useState(null);

  useEffect(() => {
    fetch(recordingsAPI, {
      headers: {
        Authorization: `Basic ${btoa(
          process.env.REACT_APP_API_USER + ":" + process.env.REACT_APP_API_KEY
        )}`,
      },
    })
      .then((response) => response.json())
      .then(setRecordings);
  }, []);

  return (
    <>
      <div>Recordings</div>
      {!recordings && <div>Loading...</div>}
      {recordings?.data.map((recording) => {
        const playbackId = recording.playback_ids[0].id;
        return (
          <Player
            key={playbackId}
            mp4file={null}
            thumbnailSrc={`https://image.mux.com/${playbackId}/thumbnail.jpg?time=15`}
            animatedGIFSrc={`https://image.mux.com/${playbackId}/animated.gif`}
            videoSrc={`https://stream.mux.com/${playbackId}.m3u8`}
          />
        );
      })}
    </>
  );
}

export default Recordings;
