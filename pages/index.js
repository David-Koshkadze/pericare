import Head from "next/head";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import VideoGallery from "../components/VideoGallery";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getSortedPostData } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Pericare</title>
        <meta name="description" content="Pericare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <VideoGallery />
      <Posts posts={posts.slice(0, 6)} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  // // Get files from the posts dir
  // const files = fs.readdirSync(path.join("posts", locale));

  // // Get slug and frontmatter from posts
  // const posts = files.map((filename) => {
  //   // Create slug
  //   const slug = filename.replace(".md", "");

  //   // Get frontmatter
  //   const markdownWithMeta = fs.readFileSync(
  //     path.join("posts", locale, filename),
  //     "utf-8"
  //   );

  //   const { data: frontmatter } = matter(markdownWithMeta);

  //   return {
  //     slug,
  //     frontmatter,
  //   };
  // });

  // const newPosts = posts.sort(
  //   (a, b) => a.frontmatter.sort_by - b.frontmatter.sort_by
  // );

  const allPosts = getSortedPostData(locale)

  console.log(allPosts)

  return {
    props: {
      posts: allPosts,
      ...(await serverSideTranslations(locale)),
    },
  };
}
