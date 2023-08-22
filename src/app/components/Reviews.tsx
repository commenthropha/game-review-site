import getRecentPosts from "../(queries)/getRecentPosts";
import Card from "./Card";

const Reviews = async () => {
  const posts: Post[] = await getRecentPosts();

  return (
    <div className="bg-[#ffeec4] text-[#171520]">
      <h1 className="p-10 py-20 md:p-32 text-4xl md:text-5xl xl:text-6xl text-center font-extrabold">
        Take A Look At Some Of Our{" "}
        <span
          style={{ wordSpacing: "-.5rem" }}
          className="tracking-tighter font-inconsolata text-red-800"
        >
          Recent Reviews
        </span>
      </h1>
      <div className="flex flex-col 2xl:flex-row pb-20">
        {posts?.map((post, i) => (
          <Card key={post.id} post={post} reverse={i % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
