import category from "./documents/category";
import post from "./documents/post";
import blockContent from "./objects/blockContent";
import captionedImage from "./objects/captionedImage";
import iconButton from "./objects/iconButton";

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  post,
  category,
  blockContent,
  captionedImage,
  iconButton,
];
