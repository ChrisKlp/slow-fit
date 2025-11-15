import type { Exercise } from "../types";

type ExerciseVideoProps = Partial<
  Pick<Exercise, "video_url" | "name" | "description">
>;

export function ExerciseVideo({
  video_url,
  name,
  description,
}: ExerciseVideoProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-video overflow-hidden rounded-lg">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
          src={video_url?.replace("watch?v=", "embed/")}
          title={name}
        />
      </div>
      <p>{description}</p>
    </div>
  );
}
