import type { Video } from "@/types"
import YouTubeEmbed from "./youtube-embed"

interface CampaignCardProps {
  video: Video
}

export default function CampaignCard({ video }: CampaignCardProps) {
  return (
    <div className="bg-white rounded-lg shadow flex flex-col">
      <div className="aspect-video">
        <YouTubeEmbed videoId={video.videoId} className="rounded-t-lg" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-end items-center mb-2">
          <span className="text-sm text-gray-500">{Math.round((video.currentViews / video.targetViews) * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-600 transition-all duration-500"
            style={{ width: `${(video.currentViews / video.targetViews) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {video.currentViews.toLocaleString()} / {video.targetViews.toLocaleString()} views
        </div>
      </div>
    </div>
  )
}

