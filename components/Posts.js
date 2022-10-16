import React, { useState, useEffect } from "react";
import Article from "./Article";

export default function Posts({category}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let linkApi = "/api/articles";

    if (category) {
      linkApi = "/api/articles/category/" + category;
    }

    fetch(linkApi)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="text-center w-full mt-8 mb-8">
      <h1 className="heading-txt mb-5">სტატიები</h1>

      <div className="posts__grid px-8 md:px-0">
        {articles.map((item) => (
          <Article
            key={item.id}
            title={item.title}
            content={item.content}
            photo={item.photo}
            linkURL={`/article/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
}
