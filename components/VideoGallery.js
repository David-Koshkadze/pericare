import React, { useState, useRef } from "react";

let videoLinks = [
  "https://www.youtube.com/embed/s1X3587bRTk",
  "https://www.youtube.com/embed/YOzsLDhr4L0",
  "https://www.youtube.com/embed/IYYMI2FnPC8",
  "https://www.youtube.com/embed/tq4ZerLaS2U",
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(videoLinks[2]);

  return (
    <div className="text-center w-full mt-8">
      <h1 className="heading-txt mb-4">ვიდეო გალერეა</h1>
      <div className="w-full h-auto flex">
        <div className="w-2/3 mr-2">
          <iframe
            width="100%"
            height="100%"
            src={activeVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-1/3 h-[200px] sm:[300px] md:h-[400px] flex flex-col gap-2 overflow-auto">
          {videoLinks.map((video, idx) => (
            <div key={idx} className="relative">
              <div className="absolute top-0 left-0 w-full h-full" onClick={() => setActiveVideo(video)}></div>
              <iframe
                width="100%"
                height="100%"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
                controls="0"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
