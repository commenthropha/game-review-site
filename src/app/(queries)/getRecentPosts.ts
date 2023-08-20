const graphqlAPI: string = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT ? process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT : "";

const getRecentPosts = async () => {
  const { data } = await fetch(graphqlAPI, {
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

  let posts: Post[] = data?.posts
  return posts;  
};

export default getRecentPosts;