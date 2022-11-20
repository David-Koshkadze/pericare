import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="border transition-all h-content relative bg-white">
      <img
        src={post.frontmatter.cover_image}
        alt=""
        className="h-[275px] w-full mx-auto object-cover"
      />
      <div className="px-4 pb-4 flex flex-col ">
        <p className="text-lg text-[#474775] my-3">{post.frontmatter.title}</p>
        <p className="text-left mb-16 overflow-hidden text-ellipsis">
          {post.frontmatter.excerpt}
        </p>

        <Link href={`/blog/${post.slug}`}>
          <span className="absolute bottom-3 uppercase cursor-pointer w-28 text-black font-bold font-sans text-sm rounded-md px-2 py-3 bg-[#54b6c4] hover:bg-[#91dae5]">
            მეტის ნახვა
          </span>
        </Link>
      </div>
    </div>
  );
}
