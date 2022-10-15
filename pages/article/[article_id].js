import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ArticlePage() {
  const [data, setData] = useState({});

  const router = useRouter();
  const { article_id } = router.query;

  useEffect(() => {
    fetch("/api/articles/" + article_id)
      .then((res) => res.json())
      .then((dt) => setData(dt));
  }, []);

  return (
    <div className="pt-8 pb-4">
      <img src={data.photo} />
      <h1 className="text-3xl text-[#474775] my-8">{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}


