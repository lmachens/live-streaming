import React, { useEffect, useState } from "react";
import Player from "../components/Player";

const liveStreamAPI = `https://api.mux.com/video/v1/live-streams/${process.env.REACT_APP_LIVE_STREAM_ID}`;

function LiveStream() {
  const [liveStream, setLiveStream] = useState(null);

  useEffect(() => {
    fetch(liveStreamAPI, {
      headers: {
        Authorization: `Basic ${btoa(
          process.env.REACT_APP_API_USER + ":" + process.env.REACT_APP_API_KEY
        )}`,
      },
    })
      .then((response) => response.json())
      .then(setLiveStream);
  }, []);

  return (
    <>
      <div>Your stream is {liveStream?.data?.status || "..."}</div>
      {liveStream?.data?.status === "active" && (
        <Player
          videoSrc={`https://stream.mux.com/${liveStream.data.playback_ids[0].id}.m3u8`}
        />
      )}
    </>
  );
}

export default LiveStream;
