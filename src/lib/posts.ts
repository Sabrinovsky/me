import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Post } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(): Post[] {
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

  return allPostsData as Post[];
}

export function getAllPostIds() {
  const folders = fs.readdirSync(postsDirectory);

  return folders
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
