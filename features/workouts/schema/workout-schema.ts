import z from "zod";

export const workoutSchema = z.object({
  id: z.uuidv4(),
  name: z.string(),
  tags: z.array(z.string()).optional(),
  cover_image: z.url().optional().or(z.literal("")),
});

export const workoutExerciseSchema = z.object({
  id: z.uuidv4(),
  workout_id: z.uuidv4(),
  exercise_id: z.uuidv4(),
  sets: z.number(),
  reps: z.number().nullable().optional(),
  rest: z.number().nullable().optional(),
  time: z.number().nullable().optional(),
  order: z.number(),
});

export const formSchema = workoutSchema
  .omit({
    id: true,
  })
  .extend({
    name: z.string().min(1, "Please enter an workout name."),
    exercises: z
      .array(
        workoutExerciseSchema.extend({
          id: z.uuidv4().optional(),
          workout_id: z.uuidv4().optional(),
        })
      )
      .min(1, "At least one exercise is required"),
    tags: z.string().optional(),
  });

export type FormSchemaType = z.infer<typeof formSchema>;
