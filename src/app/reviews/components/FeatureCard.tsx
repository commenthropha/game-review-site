import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const FeatureCard = ({ post }: { post: Post }) => {
  return (
    <div className="bg-red-800 md:ml-2 md:mb-6 rounded-sm">
      <Link href={`/`}>
        <div className= "flex justify-between h-full flex-row-reverse">
        <div className="relative w-[10rem] sm:w-[14rem] md:w-[22rem] lg:w-[26rem] 2xl:h-[20rem]">
          <Image
              alt={post.title}
              className="rounded-sm"
              src={post.featuredImage.url}
              layout="fill" // Fill the parent dimensions
              objectFit="cover" // Make the image fill the container
            />
        </div>
          <div className= "text-left font-bold m-6 2xl:m-10 flex flex-col justify-between">
            <div>
            <p className="text-honey tracking-tighter font-inconsolata text-sm">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
              <h3 className="text-honey">{post.title}</h3>
            </div>
            <div className="mt-24">
              <p className="text-honey tracking-tighter font-inconsolata text-sm">Read Full Article</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FeatureCard