import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import HLS from "hls.js";
import PropTypes from "prop-types";

const Video = styled.video`
  width: 500px;
  max-width: 100%;
`;

function Player({ videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
    } else if (HLS.isSupported()) {
      const hls = new HLS();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else {
      console.error("Your Browser doesn't support this vdeo");
    }
  }, [videoRef, videoSrc]);

  return (
    <div>
      <Video controls muted ref={videoRef} />
    </div>
  );
}

Player.propTypes = {
  videoSrc: PropTypes.string,
};

export default Player;
