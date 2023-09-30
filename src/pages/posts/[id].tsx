import { getAllPostIds, getPostData } from "@/lib/posts";

export default function Post({ postData }: { postData: any }) {
  return (
    <>
      <title>{postData.title}</title>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
