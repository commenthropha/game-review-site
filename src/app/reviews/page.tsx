import {getPosts} from "../(queries)"

const Reviews = async () => {
  const posts = await getPosts();

  return (
    <h1 className="p-6 md:p-16 lg:p-24 font-extrabold text-5xl md:text-6xl lg:text-7xl">
      Reviews
    </h1>
  )
}

export default Reviews