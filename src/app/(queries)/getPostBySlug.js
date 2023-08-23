const getPostBySlug = async (slug) => {
  const { data } = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query getPostBySlug($slug: String!) {
          post(where: { slug: $slug }) {
            title
            subheading
            id
            featuredImage {
              url
            }
            createdAt
            slug
          }
        }
      `,
      variables: {
        slug: slug, // Pass the slug as a variable
      },
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  let post = data?.post;
  return post;
};

export default getPostBySlug;
