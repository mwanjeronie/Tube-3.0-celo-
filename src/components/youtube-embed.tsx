interface YouTubeEmbedProps {
  videoId: string
  className?: string
}

export default function YouTubeEmbed({ videoId, className = "" }: YouTubeEmbedProps) {
  return (
    <iframe
      className={`w-full h-full ${className}`}
      src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

