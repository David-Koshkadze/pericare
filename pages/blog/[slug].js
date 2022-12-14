import fs from "fs";
import path from "path";
import matter from "gray-matter";

import ReactMarkdown from 'react-markdown'

export default function PostPage({
  frontmatter: { title, cover_image },
  slug,
  content,
}) {

  return (
    <>
      <div className="px-4 pt-4 md:px-0 mb-10">
        <img src={cover_image} alt="" className="h-[60vw] md:h-[30vw]" />
        <h1 className="text-3xl my-6">{title}</h1>
        <div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
