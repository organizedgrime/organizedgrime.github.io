import article from "./documents/article";
import collection from "./documents/collection";
import origami from "./documents/origami";
import poem from "./documents/poem";
import post from "./documents/post";
import software from "./documents/software";
import blockContent from "./objects/blockContent";
import captionedImage from "./objects/captionedImage";

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
	post,
	collection,
	poem,
	software,
	origami,
	article,
	blockContent,
	captionedImage,
];
