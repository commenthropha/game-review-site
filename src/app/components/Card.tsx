import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const Card = ({ post, reverse }: { post: Post, reverse: boolean }) => {
  
  const alignment : string = reverse ? "-reverse" : ""

  return (    
    <div className="bg-red-800 border-2 border-solid border-[#fbe09f] xl:w-full m-2 rounded-lg">
      <Link href={`/`}>
        <div className= {`flex flex-row${alignment} xl:flex-col${alignment} justify-between h-full`}>
        <div className="relative w-[8rem] sm:w-[12rem] md:w-[20rem] lg:w-[24rem] h-auto xl:w-auto xl:h-[20rem]">
          <Image
              alt={post.title}
              className="rounded-md"
              src={post.featuredImage.url}
              layout="fill" // Fill the parent dimensions
              objectFit="cover" // Make the image fill the container
            />
        </div>
          <div className={`${alignment ? "text-left" : "text-right"} font-bold m-6 xl:m-4 xl:text-left flex flex-col justify-between`}>
            <div>
              <p className="text-[#FEF5DF] tracking-tighter font-inconsolata text-sm">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
              <h3 className="text-[#FEF5DF]">{post.title}</h3>
            </div>
            <div className="mt-24">
              <p className="text-red-300 tracking-tighter font-inconsolata text-sm">Read Full Article</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
