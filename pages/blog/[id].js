import ReactMarkdown from "react-markdown";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function PostPage({ postData }) {
  const { cover_image, title } = postData.frontmatter;

  console.log("Content", postData.contentHtml)

  return (
    <>
      <div className="px-4 pt-4 md:px-0 mb-10">
        <img src={cover_image} alt="" className="h-[60vw] md:h-[30vw]" />
        <h1 className="text-3xl my-6">{title}</h1>
        <div>
          <ReactMarkdown>{postData.contentHtml}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = getAllPostIds(locales);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  // const { data: frontmatter, content } = matter(markdownWithMeta);

  const postData = await getPostData(params.id, locale);

  return {
    props: {
      postData,
      ...(await serverSideTranslations(locale)),
    },
  };
}