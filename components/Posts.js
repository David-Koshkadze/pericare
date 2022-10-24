import Post from "./Post";

export default function Posts({ posts }) {
  return (
    <div className="text-center w-full mt-8 mb-8">
      <h1 className="heading-txt mb-5">სტატიები</h1>

      <div className="posts__grid px-8 md:px-0">
        {posts.map((post, idx) => (
          <Post key={idx} post={post} />
        ))}
      </div>
    </div>
  );
}
