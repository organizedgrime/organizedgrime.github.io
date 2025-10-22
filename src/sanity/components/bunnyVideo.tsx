import { Card, Select, Spinner, Stack, Text } from "@sanity/ui";
import { randomKey } from "@sanity/util/content";
import { useEffect, useState } from "react";
import { type ObjectInputProps, set } from "sanity";

const cdnHostname = import.meta.env.PUBLIC_BUNNY_CDN_HOSTNAME;

interface Caption {
  srclang: string;
  label: string;
  version: number;
}

interface BunnyVideo {
  guid: string;
  title: string;
  description: string;
  views: number;
  captions: Array<Caption>;
  width: number;
  height: number;
  thumbnailFileName: string;
}

export function BunnyVideoInput(props: ObjectInputProps) {
  const { value, onChange } = props;
  const [videos, setVideos] = useState<BunnyVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bunny-videos.json")
      .then((res) => res.json())
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (!cdnHostname) {
    return (
      <Card padding={4}>
        <Text>Error: Unknown CDN hostname</Text>
      </Card>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const video = videos.find((v) => v.guid === e.target.value);
    if (video) {
      onChange(
        set({
          _type: "bunnyVideo",
          _key: randomKey(12),
          videoId: video.guid,
          title: video.title,
          description: video.description,
          views: video.views,
          captions: video.captions,
          width: video.width,
          height: video.height,
          thumbnailFileName: video.thumbnailFileName,
        }),
      );
    }
  };

  if (loading) {
    return (
      <Card padding={4}>
        <Spinner />
      </Card>
    );
  }

  return (
    <Stack space={3}>
      <Select value={value?.videoId || ""} onChange={handleChange}>
        <option value="">Select a video...</option>
        {videos.map((video) => (
          <option key={video.guid} value={video.guid}>
            {video.title || video.guid}
          </option>
        ))}
      </Select>
      {value?.videoId && value?.thumbnailFileName && (
        <img
          src={`https://${cdnHostname}/${value.videoId}/${value.thumbnailFileName}`}
          alt="Preview"
          style={{ maxWidth: 300, borderRadius: 4 }}
        />
      )}
    </Stack>
  );
}
