import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const folders = fs.readdirSync(postsDirectory);

  const allPostsData = folders.map((folder) => {
    const fullPath = path.join(postsDirectory, folder, "/index.md");

    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id: folder,
      ...matterResult.data,
    };
  });

  return allPostsData;
}

export function getAllPostIds() {
  const folders = fs.readdirSync(postsDirectory);

  return folders.map((fileName) => {
    return {
      params: {
        id: fileName,
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}`, "index.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
