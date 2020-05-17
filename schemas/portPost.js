export default {
  name: "portPost",
  title: "Portfolio Post",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Photo",
      type: "image"
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{type: "reference", to: {type: "portCategory"}}]
    },
    {
      name: "description",
      title: "Description",
      type: "portBlockContent"
    }
  ]
}