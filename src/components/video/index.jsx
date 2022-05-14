import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Video = ({ src }) => {
  // const [autoPlay, setAutoPlay] = useState(true);

  return (
    <VideoWrapper>
      {src.includes("youtu") ? (
        <ReactPlayer
          className="player"
          width=""
          height="100%"
          url={src}
          controls
        />
      ) : (
        <NormalVideoWrapper>
          <video className="play" controls>
            <source src={src} />
          </video>
        </NormalVideoWrapper>
      )}
    </VideoWrapper>
  );
};

export default Video;

const VideoWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  overflow: hidden;
  position: relative;

  .play {
    width: 100%;
    // position: absolute;
    // top: 0;
    // left: 50%;
    // transform: translateX(-50%);
    // object-fit: fill;
    height: 100%;
  }
`;

const NormalVideoWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  position: relative;
`;
