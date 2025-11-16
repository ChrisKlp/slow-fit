
  create table "public"."workout_exercises" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "workout_id" uuid not null default gen_random_uuid(),
    "exercise_id" uuid not null default gen_random_uuid(),
    "sets" smallint not null,
    "reps" smallint,
    "rest" smallint,
    "time" smallint,
    "order" smallint
      );


alter table "public"."workout_exercises" enable row level security;


  create table "public"."workouts" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" text not null,
    "cover_image" text,
    "tags" text[]
      );


alter table "public"."workouts" enable row level security;

CREATE UNIQUE INDEX workout_exercises_pkey ON public.workout_exercises USING btree (id);

CREATE UNIQUE INDEX workouts_pkey ON public.workouts USING btree (id);

alter table "public"."workout_exercises" add constraint "workout_exercises_pkey" PRIMARY KEY using index "workout_exercises_pkey";

alter table "public"."workouts" add constraint "workouts_pkey" PRIMARY KEY using index "workouts_pkey";

alter table "public"."workout_exercises" add constraint "workout_exercises_exercise_id_fkey" FOREIGN KEY (exercise_id) REFERENCES public.exercises(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."workout_exercises" validate constraint "workout_exercises_exercise_id_fkey";

alter table "public"."workout_exercises" add constraint "workout_exercises_workout_id_fkey" FOREIGN KEY (workout_id) REFERENCES public.workouts(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."workout_exercises" validate constraint "workout_exercises_workout_id_fkey";

grant delete on table "public"."workout_exercises" to "anon";

grant insert on table "public"."workout_exercises" to "anon";

grant references on table "public"."workout_exercises" to "anon";

grant select on table "public"."workout_exercises" to "anon";

grant trigger on table "public"."workout_exercises" to "anon";

grant truncate on table "public"."workout_exercises" to "anon";

grant update on table "public"."workout_exercises" to "anon";

grant delete on table "public"."workout_exercises" to "authenticated";

grant insert on table "public"."workout_exercises" to "authenticated";

grant references on table "public"."workout_exercises" to "authenticated";

grant select on table "public"."workout_exercises" to "authenticated";

grant trigger on table "public"."workout_exercises" to "authenticated";

grant truncate on table "public"."workout_exercises" to "authenticated";

grant update on table "public"."workout_exercises" to "authenticated";

grant delete on table "public"."workout_exercises" to "postgres";

grant insert on table "public"."workout_exercises" to "postgres";

grant references on table "public"."workout_exercises" to "postgres";

grant select on table "public"."workout_exercises" to "postgres";

grant trigger on table "public"."workout_exercises" to "postgres";

grant truncate on table "public"."workout_exercises" to "postgres";

grant update on table "public"."workout_exercises" to "postgres";

grant delete on table "public"."workout_exercises" to "service_role";

grant insert on table "public"."workout_exercises" to "service_role";

grant references on table "public"."workout_exercises" to "service_role";

grant select on table "public"."workout_exercises" to "service_role";

grant trigger on table "public"."workout_exercises" to "service_role";

grant truncate on table "public"."workout_exercises" to "service_role";

grant update on table "public"."workout_exercises" to "service_role";

grant delete on table "public"."workouts" to "anon";

grant insert on table "public"."workouts" to "anon";

grant references on table "public"."workouts" to "anon";

grant select on table "public"."workouts" to "anon";

grant trigger on table "public"."workouts" to "anon";

grant truncate on table "public"."workouts" to "anon";

grant update on table "public"."workouts" to "anon";

grant delete on table "public"."workouts" to "authenticated";

grant insert on table "public"."workouts" to "authenticated";

grant references on table "public"."workouts" to "authenticated";

grant select on table "public"."workouts" to "authenticated";

grant trigger on table "public"."workouts" to "authenticated";

grant truncate on table "public"."workouts" to "authenticated";

grant update on table "public"."workouts" to "authenticated";

grant delete on table "public"."workouts" to "postgres";

grant insert on table "public"."workouts" to "postgres";

grant references on table "public"."workouts" to "postgres";

grant select on table "public"."workouts" to "postgres";

grant trigger on table "public"."workouts" to "postgres";

grant truncate on table "public"."workouts" to "postgres";

grant update on table "public"."workouts" to "postgres";

grant delete on table "public"."workouts" to "service_role";

grant insert on table "public"."workouts" to "service_role";

grant references on table "public"."workouts" to "service_role";

grant select on table "public"."workouts" to "service_role";

grant trigger on table "public"."workouts" to "service_role";

grant truncate on table "public"."workouts" to "service_role";

grant update on table "public"."workouts" to "service_role";


  create policy "Policy with security definer functions"
  on "public"."exercises"
  as permissive
  for all
  to public
using (true);



