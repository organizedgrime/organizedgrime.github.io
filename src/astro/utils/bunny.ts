const bunnyLibraryId = import.meta.env.PUBLIC_BUNNY_LIBRARY_ID;
export const generateSignedUrl = (videoId: string) => {
  const baseUrl = `https://iframe.mediadelivery.net/play/${bunnyLibraryId}/${videoId}`;
  return `${baseUrl}?autoplay=false&loop=true&muted=false&preload=true&responsive=true`;
};
