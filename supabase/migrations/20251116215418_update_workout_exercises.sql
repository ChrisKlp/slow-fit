alter table "public"."workout_exercises" drop constraint "workout_exercises_exercise_id_fkey";

alter table "public"."workout_exercises" drop constraint "workout_exercises_workout_id_fkey";

alter table "public"."workout_exercises" add constraint "workout_exercises_exercise_id_fkey" FOREIGN KEY (exercise_id) REFERENCES public.exercises(id) ON DELETE CASCADE not valid;

alter table "public"."workout_exercises" validate constraint "workout_exercises_exercise_id_fkey";

alter table "public"."workout_exercises" add constraint "workout_exercises_workout_id_fkey" FOREIGN KEY (workout_id) REFERENCES public.workouts(id) ON DELETE CASCADE not valid;

alter table "public"."workout_exercises" validate constraint "workout_exercises_workout_id_fkey";

grant delete on table "public"."plan_schedule" to "postgres";

grant insert on table "public"."plan_schedule" to "postgres";

grant references on table "public"."plan_schedule" to "postgres";

grant select on table "public"."plan_schedule" to "postgres";

grant trigger on table "public"."plan_schedule" to "postgres";

grant truncate on table "public"."plan_schedule" to "postgres";

grant update on table "public"."plan_schedule" to "postgres";

grant delete on table "public"."plan_workouts" to "postgres";

grant insert on table "public"."plan_workouts" to "postgres";

grant references on table "public"."plan_workouts" to "postgres";

grant select on table "public"."plan_workouts" to "postgres";

grant trigger on table "public"."plan_workouts" to "postgres";

grant truncate on table "public"."plan_workouts" to "postgres";

grant update on table "public"."plan_workouts" to "postgres";

grant delete on table "public"."plans" to "postgres";

grant insert on table "public"."plans" to "postgres";

grant references on table "public"."plans" to "postgres";

grant select on table "public"."plans" to "postgres";

grant trigger on table "public"."plans" to "postgres";

grant truncate on table "public"."plans" to "postgres";

grant update on table "public"."plans" to "postgres";

grant delete on table "public"."workout_exercises" to "postgres";

grant insert on table "public"."workout_exercises" to "postgres";

grant references on table "public"."workout_exercises" to "postgres";

grant select on table "public"."workout_exercises" to "postgres";

grant trigger on table "public"."workout_exercises" to "postgres";

grant truncate on table "public"."workout_exercises" to "postgres";

grant update on table "public"."workout_exercises" to "postgres";

grant delete on table "public"."workouts" to "postgres";

grant insert on table "public"."workouts" to "postgres";

grant references on table "public"."workouts" to "postgres";

grant select on table "public"."workouts" to "postgres";

grant trigger on table "public"."workouts" to "postgres";

grant truncate on table "public"."workouts" to "postgres";

grant update on table "public"."workouts" to "postgres";


