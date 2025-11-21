/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import SimpleFM from "@solely/simple-fm";
import { Clock, Music, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// Replace the token with your Last.fm API key.
const client = new SimpleFM(import.meta.env.LAST_FM_API_KEY);

// Fetch the recent track from a user.
const recentTracks = await client.user.getRecentTracks({
  username: "recursivepaws",
});
const topAlbums = await client.user.getTopAlbums({ username: "recursivepaws" });

export function LastFm() {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getMilliseconds() - date.getMilliseconds();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent">
            Music Listening Stats
          </h1>
          <p className="">@{recentTracks.search.user}</p>
        </div>

        {/* Recent Tracks Table */}
        <Card className="">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recently Played
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left p-4 font-semibold">#</th>
                    <th className="text-left p-4 font-semibold">Track</th>
                    <th className="text-left p-4 font-semibold">Artist</th>
                    <th className="text-left p-4 font-semibold">Album</th>
                    <th className="text-left p-4 font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTracks.tracks.slice(0, 10).map((track, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-black/70 transition-colors"
                    >
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {/* <img */}
                          {/*   src={track.album.image.find(img => img.size === 'medium')?.url} */}
                          {/*   alt={track.name} */}
                          {/*   className="w-12 h-12 rounded shadow-md object-cover" */}
                          {/* /> */}
                          <span className="font-medium">{track.name}</span>
                        </div>
                      </td>
                      <td className="p-4 ">{track.artist?.name}</td>
                      <td className="p-4 text-sm">{track.album.name}</td>
                      <td className="p-4">
                        {track.dateAdded && (
                          <Badge variant="secondary">
                            {formatDate(track.dateAdded)}
                          </Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-2">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Top 25 Albums
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {topAlbums.albums.slice(0, 25).map((album, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative">
                    {album.image && (
                      <img
                        src={
                          album.image.find((img) => img.size === "extralarge")
                            ?.url || album.image[album.image.length - 1]?.url
                        }
                        alt={album.name}
                        className="w-full aspect-square object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all group-hover:scale-105"
                      />
                    )}
                    <Badge
                      key={album.mbid}
                      className="absolute gap-2 top-2 right-2 bg-black/70 text-white rounded-full px-2 py-1 text-xs flex items-center gap-1"
                    >
                      #{index + 1}
                    </Badge>

                    <Badge className="absolute bottom-2 right-2 bg-black/70 text-white rounded-full px-2 py-1 text-xs flex items-center gap-1">
                      <Music className="w-3 h-3" />
                      {album.playCount}
                    </Badge>
                  </div>
                  <div className="mt-2 space-y-1">
                    <a href={album.url}>
                      <p className="font-semibold line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {album.name}
                      </p>
                    </a>
                    {/* <p className="text-xs text-gray-500 line-clamp-1"> */}
                    <CardDescription>{album.artist.name}</CardDescription>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
