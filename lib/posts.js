import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { i18n } from "../next.config";

// const postsDir = path.join(process.cwd(), "./posts");

export function getSortedPostData(locale, directory = "posts") {
  const postsDir = path.join(process.cwd(), `./${directory}`);

  const postIds = fs.readdirSync(postsDir);

  // console.log("Dir: ", postsDir, postIds);
  // console.log("default locale: ", i18n.defaultLocale);

  const allPostData = postIds
    .map((id) => {
      const filename =
        locale === i18n.defaultLocale ? "index.md" : `index.${locale}.md`;
      const fullPath = path.join(postsDir, id, filename);

      if (!fs.existsSync(fullPath)) return;

      const fileContents = fs.readFileSync(fullPath, "utf-8");

      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    })
    .filter((post) => post);

  return allPostData.sort((a, b) => a.sort_by - b.sort_by);
}

export function getAllPostIds(locales, directory = "posts") {
  const postsDir = path.join(process.cwd(), `./${directory}`);

  let paths = [];

  const postIds = fs.readdirSync(postsDir);

  for (let id of postIds) {
    for (let locale of locales) {
      let fullpath = path.join(
        postsDir,
        id,
        locale === i18n.defaultLocale ? "index.md" : `index.${locale}.md`
      );

      if (!fs.existsSync(fullpath)) {
        continue;
      }

      paths.push({ params: { id }, locale });
    }
  }

  return paths;
}

export async function getPostData(id, locale, directory = "posts") {
  const postsDir = path.join(process.cwd(), `./${directory}`);

  const fullPath = path.join(
    postsDir,
    id,
    locale === i18n.defaultLocale ? "index.md" : `index.${locale}.md`
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  const contentHtml = matterResult.content;
  const frontmatter = matterResult.data;

  // Combine the data with the id and contentHtml
  return {
    id,
    frontmatter,
    contentHtml,
    ...matterResult.data,
  };
}

export function getUkrainePosts() {
  const postsDir = path.join(process.cwd(), "posts_ukraine");

  const postIds = fs.readdirSync(postsDir);

  const allPostData = postIds
    .map((id) => {
      const filename = "index.md";

      const fullPath = path.join(postsDir, id, filename);

      if (!fs.existsSync(fullPath)) return;

      const fileContents = fs.readFileSync(fullPath, "utf-8");

      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    })
    .filter((post) => post);

  return allPostData.sort((a, b) => a.sort_by - b.sort_by);
}

export function getUkrainePostIds(locales) {
  const postsDir = path.join(process.cwd(), `./posts_ukraine`);

  let paths = [];

  const postIds = fs.readdirSync(postsDir);

  for (let id of postIds) {
    for (let locale of locales) {
      let fullPath = path.join(postsDir, id, "index.md");

      if (!fs.existsSync(fullPath)) {
        continue;
      }

      paths.push({ params: { id }, locale });
    }
  }

  return paths;
}

// Ukraine Single Post Data
export async function getUkrainePostData(id) {
  const postsDir = path.join(process.cwd(), `./posts_ukraine`);

  const fullPath = path.join(postsDir, id, "index.md");

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const contentHtml = matterResult.content;
  const frontmatter = matterResult.data;

  return {
    id,
    frontmatter,
    contentHtml,
    ...matterResult.data,
  };
}
