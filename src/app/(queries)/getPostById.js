const getPostById = async (id) => {
  const { data } = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query getPostById($id: ID!) {
            post(where: { id: $id }) {
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
        id: id, // Pass the ID as a variable
      },
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  let post = data?.post;
  return post;
};

export default getPostById;
