import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import HLS from "hls.js";

const Video = styled.video`
  width: 500px;
  max-width: 100%;
`;

const videoSrc =
  "https://stream.mux.com/V6Q01yPN00QqsGGLtij6M00R5iOvSYC9Nfx.m3u8";

function Player() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (HLS.isSupported()) {
      const hls = new HLS();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
    }
  }, [videoRef]);

  return (
    <div>
      <Video controls muted src={videoSrc} ref={videoRef} />
    </div>
  );
}

export default Player;
