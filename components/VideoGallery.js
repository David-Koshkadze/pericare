import React, { useState, useRef } from "react";

let videoLinks = [
  "https://www.youtube.com/embed/s1X3587bRTk",
  "https://www.youtube.com/embed/YOzsLDhr4L0",
  "https://www.youtube.com/embed/IYYMI2FnPC8",
  // "https://www.youtube.com/embed/tq4ZerLaS2U",
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(videoLinks[2]);

  return (
    <div className="text-center w-full mt-8">
      <h1 className="heading-txt mb-4">ვიდეო გალერეა</h1>
      <div className="bg-orange-400 w-full h-auto flex">
        <div className="w-2/3">
          <iframe
            width="100%"
            height="100%"
            src={activeVideo}
            title="YouTube video player"
            frameBorder="0"
            className="frame-child"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-1/3">
          {videoLinks.map((video, idx) => (
            <div key={idx} onClick={() => setActiveVideo(videoLinks[idx])}>
              <iframe
                width="100%"
                height="100%"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                className="frame-child"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
