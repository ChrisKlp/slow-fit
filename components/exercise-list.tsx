import type { Exercise } from "@/lib/mockData/exercises";
import { CardHeader } from "./common/card-header";
import { VideoButton } from "./common/video-button";
import { SingleSessionOptionsMenu } from "./workoutSession/workout-session-opions-menu";

type WorkoutListProps = {
  title: string;
  link?: string;
  exercises: Exercise[];
  numbered?: boolean;
};

const numberColumnWidth = "w-5";

export function ExerciseList({
  title,
  link,
  exercises,
  numbered = false,
}: WorkoutListProps) {
  return (
    <div className="card overflow-hidden p-0">
      <CardHeader link={link} title={title} />
      <div className="grid items-center">
        <div
          className={
            "grid grid-cols-2 items-center gap-4 bg-muted px-6 py-3 text-muted-foreground text-sm"
          }
        >
          {numbered ? (
            <div className="flex items-center gap-4">
              <span className={numberColumnWidth}>No.</span>
              <span>Name</span>
            </div>
          ) : (
            <span>Name</span>
          )}
          <span>Videos</span>
        </div>
        {exercises.map((exercise, idx) => (
          <div
            className="grid grid-cols-[1fr_1fr_30px] items-center justify-items-start gap-4 border-b p-3 px-6 text-sm transition-colors last:border-b-0 hover:bg-muted/70"
            key={`${exercise.id}-${idx}`}
          >
            {numbered ? (
              <div className="flex items-center gap-4">
                <span className={numberColumnWidth}>{idx + 1}</span>
                <span>{exercise.name}</span>
              </div>
            ) : (
              <span>{exercise.name}</span>
            )}
            <div className="flex flex-wrap gap-2">
              {exercise.videoUrl && (
                <VideoButton label="Video" videoUrl={exercise.videoUrl} />
              )}
              {exercise.extraVideos?.map((v, index) => (
                <VideoButton
                  key={v}
                  label={`Extra ${index + 1}`}
                  videoUrl={v}
                />
              ))}
            </div>
            <SingleSessionOptionsMenu sessionId={exercise.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
