// lib/generateSignedUrl.ts
// import crypto from "crypto";
//
export const generateSignedUrl = (videoId: string) => {
  const baseUrl = `https://iframe.mediadelivery.net/play/${import.meta.env.PUBLIC_BUNNY_LIBRARY_ID}/${videoId}`;

  // const expiration = Math.floor(Date.now() / 1000) + 60 * 60; // 1 hr expiration
  // const token = crypto
  //   .createHash("sha256")
  //   .update(`${import.meta.env.PRIVATE_BUNNY_API_KEY}${expiration}`)
  //   .digest("hex");
  // return `${baseUrl}?token=${token}&expires=${expiration}`;

  return baseUrl;
};
