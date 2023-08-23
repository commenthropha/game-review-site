declare type Post = {
    id: string,
    createdAt: string,
    createdBy: string,
    author: string,
    updatedAt: string,
    updatedBy: string,
    content: {
        raw: string
    },
    title: string,
    subheading: string,
    featuredImage: {
        url: string
    },
    slug: string
}