import z from "zod";

export const exerciseTypeSchema = z.enum(["reps", "time"]);

export type ExerciseType = z.infer<typeof exerciseTypeSchema>;

export const exerciseSchema = z.object({
  id: z.uuidv4(),
  name: z.string(),
  type: exerciseTypeSchema.default("reps"),
  description: z.string().optional(),
  video_url: z.string().optional(),
  extra_videos: z.array(z.string()).optional(),
});

export const formSchema = exerciseSchema
  .omit({
    id: true,
  })
  .extend({
    name: z.string().min(1, "Please enter an exercise name."),
    extra_videos: z.array(
      z.object({
        url: z.string(),
      })
    ),
  })
  .required({
    type: true,
    name: true,
  });

export type FormSchemaType = z.infer<typeof formSchema>;
