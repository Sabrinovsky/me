import { getSortedPostsData } from "@/lib/posts";
import { Post } from "@/types/post";
import Link from "next/link";

export default function Post() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      {allPostsData.map((post) => {
        return <Link href={`/posts/${post.id}`} key={post.id}>{post.title}</Link>
      })}
    </div>)
}