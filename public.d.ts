declare type Post = {
    id: string,
    createdAt: string,
    createdBy: string,
    updatedAt: string,
    updatedBy: string,
    content: string,
    title: string,
    subheading: string,
    featuredImage: {
        url: string
    },
    slug: string
}