import { getSortedPostsData } from "@/lib/posts";
import { Post } from "@/types/post";
import Link from "next/link";

export default function Post({ allPostsData }: { allPostsData: Post[] }) {
  return (
    <div>
      {allPostsData.map((post) => {
        return <Link href={`/posts/${post.id}`} key={post.id}>{post.title}</Link>
      })}
    </div>)
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}