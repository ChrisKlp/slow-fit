type YoutubeCardProps = {
  videoUrl: string;
  title?: string;
  description?: string;
};

export function YoutubeCard({
  videoUrl,
  title,
  description,
}: YoutubeCardProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-video overflow-hidden rounded-lg">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
          src={videoUrl.replace("watch?v=", "embed/")}
          title={title}
        />
      </div>
      <p>{description}</p>
    </div>
  );
}
