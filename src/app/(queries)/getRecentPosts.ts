import { request, gql } from 'graphql-request';

const graphqlAPI: string = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT ? process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT : "";

const getRecentPosts = async () => {
  const query = gql`
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
  `;

  const { posts }: { posts: Post[] } = await request(graphqlAPI, query);

  return posts;
};

export default getRecentPosts;