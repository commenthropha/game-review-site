import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const Card = ({ post }: { post: Post }) => {
  return (    
    <div className="bg-[#FFFAEF] border-2 border-solid border-[#fbe09f] xl:w-full m-2 rounded-lg">
      <Link href={`/`}>
        <div className="flex flex-row xl:flex-col justify-start xl:justify-between h-full">
        <div className="relative w-[20rem] h-auto xl:w-auto xl:h-[20rem]">
          <Image
              alt={post.title}
              className="rounded-md"
              src={post.featuredImage.url}
              layout="fill" // Fill the parent dimensions
              objectFit="cover" // Make the image fill the container
            />
        </div>
          <div className="font-bold m-6 xl:m-4 flex flex-col justify-between">
            <div>
              <p className="text-red-800 tracking-tighter font-inconsolata text-sm">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
              <h3 className="text-[#171520]">{post.title}</h3>
            </div>
            <div className="mt-24">
              <p className="text-stone-600 tracking-tighter font-inconsolata text-sm">Read Full Article</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
