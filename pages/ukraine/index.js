import Posts from "../../components/Posts";
import { getSortedPostData } from "../../lib/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AllBlogs({ posts }) {
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const allPosts = getSortedPostData(locale);

  return {
    props: {
      posts: allPosts,
      ...(await serverSideTranslations(locale)),
    },
  };
}