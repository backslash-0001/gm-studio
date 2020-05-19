export default {
  name: "portCategory",
  title: "Portfolio Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      type: "string"
    }
  ]
}