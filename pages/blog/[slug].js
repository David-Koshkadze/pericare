import fs from "fs";
import path from "path";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export async function getStaticPaths({ locales }) {
  const files = fs.readdirSync(path.join("posts"));

  console.log("Locales", locales);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug }, locale }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", locale, slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
      ...(await serverSideTranslations(locale)),
    },
  };
}
