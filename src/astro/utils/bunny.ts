// lib/generateSignedUrl.ts
// import crypto from "crypto";
//
export const generateSignedUrl = (videoId: string) => {
  const baseUrl = `https://iframe.mediadelivery.net/play/${import.meta.env.PUBLIC_BUNNY_LIBRARY_ID}/${videoId}`;
  return `${baseUrl}?autoplay=true&loop=true&muted=false&preload=true&responsive=true`;
};
