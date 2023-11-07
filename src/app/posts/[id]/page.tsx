import { getAllPostIds, getPostData } from "@/lib/posts";

export default async function Post({ params }: any) {
  const postData: any = await getPostData(params.id);

  return (
    <>
      <title>{postData.title}</title>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}

export async function generateStaticParams() {
  const ids = getAllPostIds();
  return ids.map((id) => ({
    id
  }))
}
