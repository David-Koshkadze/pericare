import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

let videoLinks = [
  "https://www.youtube.com/embed/U6DD03PRMn8",
  "https://www.youtube.com/embed/o5dsQg29jRI",
  "https://www.youtube.com/embed/rzHLNwCRUtk",
  "https://www.youtube.com/embed/6Inr8dJlcZM",
  "https://www.youtube.com/embed/pK8TpBoWC54",
  "https://www.youtube.com/embed/Jc9B3QtP9G0",
  "https://www.youtube.com/embed/bem7vCF8Q_Y",
  "https://www.youtube.com/embed/fVCwfn8WoRs"
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(videoLinks[0]);

  const {t} = useTranslation()

  return (
    <div className="text-center w-full mt-8">
      <h1 className="heading-txt mb-4">{t("video_gallery")}</h1>
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
                allowFullScreen
                controls="0"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
