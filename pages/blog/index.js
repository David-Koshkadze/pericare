import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Posts from "../../components/Posts";

export default function AllBlogs({ posts }) {
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  const newPosts = posts.sort(
    (a, b) => a.frontmatter.sort_by - b.frontmatter.sort_by
  );

  return {
    props: {
      posts: newPosts,
    },
  };
}
