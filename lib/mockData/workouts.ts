import { type WorkoutExercise, workoutExercises } from "./workout-exercises";

export type Workout = {
  id: string;
  name: string;
  coverImage: string;
  tags?: string[];
  exercises: WorkoutExercise[];
};

export const workouts: Workout[] = [
  {
    id: "w-1",
    name: "Full body workout",
    coverImage:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600",
    tags: ["Youtube"],
    exercises: workoutExercises.slice(0, 1),
  },
  {
    id: "w-2",
    name: "Upper body workout",
    coverImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600",
    exercises: workoutExercises.slice(2, 4),
  },
  {
    id: "w-3",
    name: "Lower body workout",
    coverImage:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600",
    exercises: workoutExercises.slice(4, 6),
  },
  {
    id: "w-4",
    name: "Full body workout - Advanced",
    coverImage:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600",
    tags: ["Advanced"],
    exercises: workoutExercises.slice(0, 3),
  },
  {
    id: "w-5",
    name: "Upper body workout - Advanced",
    coverImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600",
    tags: ["Advanced"],
    exercises: workoutExercises.slice(3, 6),
  },
  {
    id: "w-6",
    name: "Lower body workout - Pro",
    coverImage:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600",
    tags: ["Professional"],
    exercises: workoutExercises.slice(2, 5),
  },
];
