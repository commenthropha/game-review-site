import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const FeatureCard = ({
  post, // The post being used to render the component data
}: {
  post: Post;
}) => {
  console.log(post.title);
  return (
    <div className="bg-honey md:ml-2 md:mb-6 rounded-md">
      <Link href={`/${post.slug}`}>
        <div className="flex justify-between h-full flex-row-reverse">
          <div className="relative w-[10rem] sm:w-[14rem] md:w-[22rem] lg:w-[26rem] 2xl:h-[20rem]">
            <Image
              alt={post.title}
              className="rounded-md"
              src={post.featuredImage.url}
              layout="fill" // Fill the parent dimensions
              objectFit="cover" // Make the image fill the container
            />
          </div>
          <div className="font-bold m-6 2xl:m-10 flex flex-col justify-between">
            <div>
              <p className="text-red-800 tracking-tighter font-inconsolata text-sm md:text-md xl:text-lg">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <h3 className="text-xl text-regal md:text-2xl xl:text-4xl">
                {post.title}
              </h3>
              <p className="text-regal tracking-tighter font-inconsolata text-md md:text-lg xl:text-2xl mt-4">
                {post.subheading}
              </p>
            </div>
            <div className="mt-24">
              <p className="text-stone-500 tracking-tighter font-inconsolata text-xs md:text-sm">
                Read Full Article
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeatureCard;
