import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const Card = ({ post }: { post: Post }) => {
  return (
    <div className="bg-honey border-2 border-solid border-[#E38C56] my-3 md:m-2 lg:my-4 rounded-xl">
      <Link href={`/`}>
        <div className= {`flex justify-between h-full`}>
        <div className="relative w-[8rem] sm:w-[12rem] md:w-[18rem] 2xl:h-[15rem]">
          <Image
              alt={post.title}
              className="rounded-xl"
              src={post.featuredImage.url}
              layout="fill" // Fill the parent dimensions
              objectFit="cover" // Make the image fill the container
            />
        </div>
          <div className= "text-right font-bold m-6 2xl:m-8 flex flex-col justify-between">
            <div>
            <p className="text-red-800 tracking-tighter font-inconsolata text-sm">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
              <h3 className="text-[#171520]">{post.title}</h3>
            </div>
            <div className="mt-12">
              <p className="text-stone-500 tracking-tighter font-inconsolata text-sm">Read Full Article</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card