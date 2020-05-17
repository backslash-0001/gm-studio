export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc, opt) => {
          return `${
            doc
              .title
              .toLowerCase()
              .replace(/\s+/g, '-')
              .slice(0, 180)
          }-${
            new Date().getTime()
          }`
        },
        slugify: input => input
      },
      validation: Rule => Rule.required()
    },
    {
      name: "images",
      title: "Photos",
      type: "array",
      of: [{type: "image"}],
      validation: Rule => Rule.required().min(1).max(10)
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ]
}