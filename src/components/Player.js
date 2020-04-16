import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import HLS from "hls.js";
import PropTypes from "prop-types";

const Video = styled.video`
  width: 500px;
  max-width: 100%;
`;

const DownloadLink = styled.a`
  display: block;
  color: lightblue;
`;

function Player({ animatedGIFSrc, mp4file, thumbnailSrc, videoSrc }) {
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
      <img src={animatedGIFSrc} />
      <Video controls muted poster={thumbnailSrc} ref={videoRef} />
      {mp4file && <DownloadLink href={mp4file}>Download</DownloadLink>}
    </div>
  );
}

Player.propTypes = {
  animatedGIFSrc: PropTypes.string,
  mp4file: PropTypes.string,
  thumbnailSrc: PropTypes.string,
  videoSrc: PropTypes.string,
};

export default Player;
