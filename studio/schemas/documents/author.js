import { MdPerson } from "react-icons/md"

export default {
  title: "Author",
  name: "author",
  type: "document",
  icon: MdPerson,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      title: "Profile image",
      name: "profileImage",
      type: "customImage",
    },
    {
      title: "Bio",
      name: "bio",
      type: "bodyText",
    },
  ],
  preview: {
    select: {
      title: "name",
      image: "profileImage",
      slug: "slug",
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug?.current,
      }
    },
  },
}
