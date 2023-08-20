const getRecentPosts = async () => {
  // @ts-ignore
  const { data } = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
    query getRecentPosts {
      posts(orderBy: publishedAt_ASC, last: 4) {
        title
        id
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  let posts = data?.posts
  return posts;  
};

export default getRecentPosts;