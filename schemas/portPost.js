export default {
  name: "portPost",
  title: "Portfolio Post",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Photo",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      name: "commonName",
      title: "Common Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "latinName",
      title: "Latin Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "score",
      title: "Score",
      type: "number",
      validation: Rule => Rule.required()
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{type: "reference", to: {type: "portCategory"}}],
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      type: "portBlockContent",
      validation: Rule => Rule.required()
    }
  ]
}