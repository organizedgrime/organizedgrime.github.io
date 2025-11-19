import type { Video as SanityVideo } from "../utils/sanity";

export function Video({ video }: { video: SanityVideo }) {
  const padding = Math.round((video.height / video.width) * 10000) / 100;
  return (
    <div className="w-full max-w-sm">
      <div
        style={{
          position: "relative",
          paddingTop: `${padding}%`,
          maxHeight: "30%",
        }}
      >
        <iframe
          src={`https://player.mediadelivery.net/embed/${import.meta.env.PUBLIC_BUNNY_LIBRARY_ID}/${video.videoId}?autoplay=true&loop=true&muted=false&preload=true&responsive=true`}
          title={video.title}
          loading="lazy"
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}
