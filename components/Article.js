import Link from "next/link";
import React, { useEffect } from "react";

export default function Article({title, content, photo, linkURL }) {
  const truncate = (str) => str.length > 20 ? str.substring(0, 120) + "..." : str;


  return (
    <div className="h-auto border-l border-r border-b transition-all">
      <img src={photo} />
      <div className="px-4 pb-4 flex flex-col ">
        <p className="text-xl text-[#474775] my-3">{title}</p>
        <p className="text-left mb-10 overflow-hidden text-ellipsis">{truncate(content)}</p>

        <Link href={linkURL}>
          <span className="uppercase cursor-pointer w-28 text-black font-bold font-sans text-sm rounded-md px-2 py-3 bg-[#54b6c4] hover:bg-[#91dae5]">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
}
