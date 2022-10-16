import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Posts from "../../components/Posts";

export default function ArticlePage() {
  const [data, setData] = useState({});

  const router = useRouter();

  const { category } = router.query;

  useEffect(() => {
    fetch("/api/articles/category/" + category)
      .then((res) => res.json())
      .then((dt) => setData(dt));
  }, []);

  return (
    <div>
      <Posts category={category} />
    </div>
  );
}
