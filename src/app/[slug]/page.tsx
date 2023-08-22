import { getPosts } from "../(queries)";

const generateStaticParams = async () => {
  const posts: Post[] = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Review = ({ params }: { params: { slug: string } }) => {
  return <div>My Post: {params.slug}</div>;
};

export { generateStaticParams };
export default Review;
