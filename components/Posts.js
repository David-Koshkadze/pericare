import { useTranslation } from "react-i18next";
import Post from "./Post";

export default function Posts({ posts }) {
  const { t } = useTranslation();

  return (
    <div className="text-center w-full mt-8 mb-8">
      <h1 className="heading-txt mb-5">{t("blogs")}</h1>

      <div className="posts__grid px-8 md:px-0">
        {posts.map((post, idx) => (
          <Post key={idx} post={post} />
        ))}
      </div>
    </div>
  );
}
