import Head from "next/head";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import VideoGallery from "../components/VideoGallery";

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
  const allPosts = getSortedPostData(locale)

  return {
    props: {
      posts: allPosts,
      ...(await serverSideTranslations(locale)),
    },
  };
}
