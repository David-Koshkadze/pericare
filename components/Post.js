import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Post({ post, link = "blog" }) {
  const { t } = useTranslation();

  const { locale } = useRouter();

  // Get correct link
  let blogLink = "";

  if (link === "ukraine_blogs") {
    blogLink = `/ukraine/${post.id}`;
  } else {
    if (locale === "ka") {
      blogLink = `/blog/${post.id}`;
    } else if (locale === "en") {
      blogLink = `/en/blog/${post.id}`;
    }
  }

  return (
    <div className="border transition-all h-content relative bg-white">
      <img
        src={post.cover_image}
        alt="img_cover"
        className="h-[275px] w-full mx-auto object-cover"
      />
      <div className="px-4 pb-4 flex flex-col ">
        <p className="text-lg text-[#474775] my-3">{post.title}</p>
        <p className="text-left mb-16 overflow-hidden text-ellipsis">
          {post.excerpt}
        </p>

        <Link href={blogLink}>
          <span className="absolute bottom-3 uppercase cursor-pointer w-28 text-black font-bold font-sans text-sm rounded-md px-2 py-3 bg-[#54b6c4] hover:bg-[#91dae5]">
            {t("see_more")}
          </span>
        </Link>
      </div>
    </div>
  );
}
