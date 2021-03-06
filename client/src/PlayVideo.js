import React, { useState } from "react";
import YouTube from "react-youtube"; // npm install react-youtube
import "./PlayVideo.scss";

const PlayVideo = props => {
  const opts = {
    height: "300",
    width: "450",
    playerVars: {
      autoplay: 1,
      rel: 0,
      origin: "http://localhost:3000"
    }
  };

  return (
    <section className="personalPlayList">
      <div className="mainvideoPlayer-containter">
        <div className="mainVideoPlayer">
          <YouTube
          user={props.user}
            className="container"
            videoId={props.youtubeId}
            opts={opts}
            onEnd={() => props.scanMood()}
          />
        </div>
      </div>
    </section>
  );
};

export default PlayVideo;
