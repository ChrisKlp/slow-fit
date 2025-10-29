import type { Exercise } from "@/lib/mockData/exercises";
import { CardHeader } from "./common/card-header";
import { ExerciseVideo } from "./exercise-video";

type ExerciseVideoListProps = {
  exercise: Exercise;
  headless?: boolean;
};

export function ExerciseVideoList({
  exercise,
  headless = false,
}: ExerciseVideoListProps) {
  return (
    <div className="card">
      {!headless && <CardHeader title={exercise.name} />}
      <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-2 xl:grid-cols-3">
        {exercise.videoUrl && (
          <ExerciseVideo
            description={exercise.description}
            title={exercise.name}
            videoUrl={exercise.videoUrl}
          />
        )}
        {exercise.extraVideos?.[0] && (
          <ExerciseVideo
            description="Exercise with description"
            title="Description"
            videoUrl={exercise.extraVideos?.[0]}
          />
        )}
      </div>
    </div>
  );
}
