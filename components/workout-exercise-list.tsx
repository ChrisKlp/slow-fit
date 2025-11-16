import { BicepsFlexed, Repeat2, Timer } from "lucide-react";
import type { WorkoutExerciseWithExercise } from "@/features/workouts/types";
import { cn } from "@/lib/utils";
import { CardHeader } from "./common/card-header";
import { InfoItem } from "./common/info-item";
import { VideoButton } from "./common/video-button";

type WorkoutExerciseListProps = {
  workoutExercises?: WorkoutExerciseWithExercise[];
};

export function WorkoutExerciseList({
  workoutExercises = [],
}: WorkoutExerciseListProps) {
  return (
    <div className="card p-0">
      <CardHeader title="Exercises" />
      <div className="grid">
        {workoutExercises.map((we, index) => (
          <div className="border-b" key={we.id}>
            <div className="grid grid-cols-3 items-center gap-6 p-6 lg:grid-cols-5">
              <span
                className={cn("order-0 col-span-2 lg:col-span-1", {
                  "col-span-3 lg:col-span-1": !we.exercise.video_url,
                })}
              >
                {`${we.order ?? index + 1}. ${we.exercise.name}`}
              </span>
              <InfoItem
                className="order-2"
                icon={BicepsFlexed}
                label="Sets"
                value={we.sets}
                variant="secondary"
              />
              <div className="order-3">
                {we.exercise.type === "time" ? (
                  <InfoItem
                    icon={Timer}
                    label="Time"
                    value={we.time ? `${we.time}s` : null}
                  />
                ) : (
                  <InfoItem icon={Repeat2} label="Reps" value={we.reps} />
                )}
              </div>
              <div className="order-4">
                {we.rest && (
                  <InfoItem
                    icon={Timer}
                    label="Rest"
                    value={we.rest}
                    variant="primary"
                  />
                )}
              </div>
              {we.exercise.video_url && (
                <VideoButton
                  className="order-1 lg:order-6 lg:justify-self-start"
                  videoUrl={we.exercise.video_url}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
