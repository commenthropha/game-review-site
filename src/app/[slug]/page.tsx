import { getPostBySlug, getPosts } from "../(queries)";
import Content from "./components/Content";
import Image from "next/image";
import moment from "moment";

/*
 * Generate static routes for the posts at build time
 */
const generateStaticParams = async () => {
  const posts: Post[] = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Review = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="w-4/5 md:w-3/4 xl:w-1/2 mx-auto">
      <div className="mt-12 md:mt-24">
        <h1 className="font-extrabold text-red-600 text-5xl md:text-6xl xl:text-7xl">
          {post.title}
        </h1>
        <h2 className="mt-2 font-bold text-2xl md:text-3xl xl:text-4xl">
          {post.subheading}
        </h2>
      </div>
      <div className="mt-6 md:mt-10 relative h-[300px] xl:h-[500px] md:w-4/5 mx-auto">
        <Image
          alt={post.title}
          src={post.featuredImage.url}
          layout="fill" // Fill the parent dimensions
          objectFit="cover" // Make the image fill the container
        />
      </div>
      <div className="tracking-tighter font-inconsolata mt-2 flex flex-col md:flex-row justify-between md:w-4/5 mx-auto md:text-lg">
        <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
        <p>Written by {post.author}</p>
      </div>
      <div className="md:w-4/5 mx-auto mt-6">
        <Content content={post.content.raw} />
      </div>
    </div>
  );
};

export { generateStaticParams };
export default Review;
