import { defineType } from "sanity";

export default defineType({
  name: "content",
  title: "Content",
  type: "array",
  of: [
    {
      name: "photo",
      title: "Photo",
      type: "captionedImage",
    },
    {
      name: "video",
      title: "Video",
      type: "bunnyVideo",
    },
    {
      name: "markdown",
      title: "Markdown",
      type: "markdown",
      initialValue: "",
    },
  ],
  initialValue: [],
  validation: (rule) => rule.required(),
  components: {
    input: (props: any) => {
      // Use the default ArrayOfPrimitivesInput instead
      return props.renderDefault(props);
    },
  },
  options: {
    // layout: "grid",
  },
});
