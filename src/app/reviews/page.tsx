import { getPosts } from "../(queries)";
import { Card, FeatureCard } from "./components";

const Reviews = async () => {
  const posts: Post[] = await getPosts();

  return (
    <div className="p-6 md:p-16 lg:p-24">
      <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl">
        Reviews
      </h1>
      <div className="mt-8 md:mt-16">
        {posts?.map((post, i) => {
          if (i === 0) {
            return <FeatureCard key={post.id} post={post} />;
          } else {
            return <Card key={post.id} post={post} />;
          }
        })}
      </div>
    </div>
  );
};

export default Reviews;
