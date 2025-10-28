import type { Exercise } from "@/lib/mockData/exercises";
import { YoutubeCard } from "../common/youtube-card";

type VideoExerciseProps = {
  exercise: Exercise;
};

export function VideoExercise({ exercise }: VideoExerciseProps) {
  return (
    <div className="card p-6">
      <h3 className="mb-4 font-bold text-xl">{exercise.name}</h3>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {exercise.videoUrl && (
          <YoutubeCard
            description={exercise.description}
            title={exercise.name}
            videoUrl={exercise.videoUrl}
          />
        )}
        {exercise.extraVideos?.[0] && (
          <YoutubeCard
            description="Exercise with description"
            title="Description"
            videoUrl={exercise.extraVideos?.[0]}
          />
        )}
      </div>
    </div>
  );
}
