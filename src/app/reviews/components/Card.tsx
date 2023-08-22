import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const Card = ({ post }: { post: Post }) => {
  return (
    <div className="bg-red-900 my-3 md:m-2 lg:my-4 rounded-xl">
      <Link href={`/${post.slug}`}>
        <div className= {`flex justify-start h-full`}>
        <div className="relative w-[8rem] sm:w-[12rem] md:w-[18rem] 2xl:h-[15rem]">
          <Image
              alt={post.title}
              className="rounded-xl"
              src={post.featuredImage.url}
              layout="fill" // Fill the parent dimensions
              objectFit="cover" // Make the image fill the container
            />
        </div>
          <div className= "text-left font-bold m-6 2xl:m-8 flex flex-col justify-between">
            <div>
            <p className="tracking-tighter font-inconsolata text-xs md:text-sm xl:text-md">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
              <h3 className="text-md md:text-lg xl:text-2xl">{post.title}</h3>
            </div>
            <div className="mt-12">
              <p className="text-red-400 tracking-tighter font-inconsolata text-xs md:text-sm">Read Full Article</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card