import Posts from "../../components/Posts";
import { getUkrainePosts } from "../../lib/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AllBlogs({ posts }) {
  return (
    <div>
      <Posts posts={posts} link="ukraine_blogs"/>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const allPosts = getUkrainePosts();

  return {
    props: {
      posts: allPosts,
      ...(await serverSideTranslations(locale)),
    },
  };
}
