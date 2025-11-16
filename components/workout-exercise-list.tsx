import { BicepsFlexed, Repeat2, Timer } from "lucide-react";
import type { WorkoutExerciseWithExercise } from "@/features/workouts/types";
import { cn } from "@/lib/utils";
import { CardHeader } from "./common/card-header";
import { InfoItem } from "./common/info-item";
import { VideoButton } from "./common/video-button";

type WorkoutExerciseListProps = {
  exercises?: WorkoutExerciseWithExercise[];
};

export function WorkoutExerciseList({
  exercises = [],
}: WorkoutExerciseListProps) {
  return (
    <div className="card p-0">
      <CardHeader title="Exercises" />
      <div className="grid">
        {exercises.map((exercise, index) => (
          <div className="border-b" key={exercise.id}>
            <div className="grid grid-cols-3 items-center gap-6 p-6 lg:grid-cols-5">
              <span
                className={cn("order-0 col-span-2 lg:col-span-1", {
                  "col-span-3 lg:col-span-1": !exercise.exercise.video_url,
                })}
              >
                {`${exercise.order ?? index + 1}. ${exercise.exercise.name}`}
              </span>
              <InfoItem
                className="order-2"
                icon={BicepsFlexed}
                label="Sets"
                value={exercise.sets}
                variant="secondary"
              />
              <div className="order-3">
                {exercise.reps && (
                  <InfoItem icon={Repeat2} label="Reps" value={exercise.reps} />
                )}
                {exercise.time && (
                  <InfoItem
                    icon={Timer}
                    label="Time"
                    value={`${exercise.time}s`}
                  />
                )}
              </div>
              <div className="order-4">
                {exercise.rest && (
                  <InfoItem
                    icon={Timer}
                    label="Rest"
                    value={exercise.rest}
                    variant="primary"
                  />
                )}
              </div>
              {exercise.exercise.video_url && (
                <VideoButton
                  className="order-1 lg:order-6 lg:justify-self-start"
                  videoUrl={exercise.exercise.video_url}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
