import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const bunnyApiKey = import.meta.env.BUNNY_API_KEY;
  const bunnyLibraryId = import.meta.env.PUBLIC_BUNNY_LIBRARY_ID;

  if (!bunnyApiKey || !bunnyLibraryId) {
    return new Response(JSON.stringify({ error: "Missing configuration" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch(
      `https://video.bunnycdn.com/library/${bunnyLibraryId}/videos?itemsPerPage=100`,
      { headers: { AccessKey: bunnyApiKey } },
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch videos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
