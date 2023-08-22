import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const Card = ({ post, reverse }: { post: Post, reverse: boolean }) => {
  
  return (    
    <div className="bg-[#FFFAEF] border-2 border-solid border-[#fbe09f] 2xl:w-full m-2 rounded-lg">
      <Link href={`/`}>
        <div className= {`flex ${reverse? "flex-row-reverse" : "flex-row"} 2xl:${reverse ? "flex-col-reverse" : "flex-col"} justify-between h-full`}>
        <div className="relative w-[8rem] sm:w-[12rem] md:w-[20rem] lg:w-[24rem] 2xl:w-[15rem] 2xl:h-[20rem]">
          <Image
              alt={post.title}
              className="rounded-md"
              src={post.featuredImage.url}
              layout="fill" // Fill the parent dimensions
              objectFit="cover" // Make the image fill the container
            />
        </div>
          <div className={`${reverse ? "text-left" : "text-right"} font-bold m-6 2xl:m-4 2xl:text-left flex flex-col justify-between`}>
            <div>
            <p className="text-red-800 tracking-tighter font-inconsolata text-sm">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
              <h3 className="text-[#171520]">{post.title}</h3>
            </div>
            <div className="mt-24">
              <p className="text-stone-500 tracking-tighter font-inconsolata text-sm">Read Full Article</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
