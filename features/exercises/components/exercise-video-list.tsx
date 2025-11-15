import { CardHeader } from "@/components/common/card-header";
import { ExerciseVideo } from "@/features/exercises/components/exercise-video";
import type { Exercise } from "../types";

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
        {exercise.video_url && (
          <ExerciseVideo
            description={exercise.description}
            name={exercise.name}
            video_url={exercise.video_url}
          />
        )}
        {exercise.extra_videos?.[0] && (
          <ExerciseVideo
            description="Exercise with description"
            name="Description"
            video_url={exercise.extra_videos?.[0]}
          />
        )}
      </div>
    </div>
  );
}
