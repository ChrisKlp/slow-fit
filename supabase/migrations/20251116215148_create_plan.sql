create type "public"."activity_type" as enum ('train', 'rest');

drop policy "Policy with security definer functions" on "public"."exercises";


  create table "public"."plan_schedule" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "plan_workout_id" uuid not null,
    "order_index" smallint not null
      );


alter table "public"."plan_schedule" enable row level security;


  create table "public"."plan_workouts" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "plan_id" uuid not null,
    "workout_id" uuid not null
      );


alter table "public"."plan_workouts" enable row level security;


  create table "public"."plans" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" text not null,
    "cover_image" text,
    "total_sessions" smallint not null,
    "day_sequence" public.activity_type[] not null
      );


alter table "public"."plans" enable row level security;

CREATE UNIQUE INDEX plan_schedule_pkey ON public.plan_schedule USING btree (id);

CREATE UNIQUE INDEX plan_schedule_unique ON public.plan_schedule USING btree (plan_workout_id, order_index);

CREATE UNIQUE INDEX plan_workouts_pkey ON public.plan_workouts USING btree (id);

CREATE UNIQUE INDEX plan_workouts_unique ON public.plan_workouts USING btree (plan_id, workout_id);

CREATE UNIQUE INDEX plans_pkey ON public.plans USING btree (id);

alter table "public"."plan_schedule" add constraint "plan_schedule_pkey" PRIMARY KEY using index "plan_schedule_pkey";

alter table "public"."plan_workouts" add constraint "plan_workouts_pkey" PRIMARY KEY using index "plan_workouts_pkey";

alter table "public"."plans" add constraint "plans_pkey" PRIMARY KEY using index "plans_pkey";

alter table "public"."plan_schedule" add constraint "plan_schedule_plan_workout_id_fkey" FOREIGN KEY (plan_workout_id) REFERENCES public.plan_workouts(id) ON DELETE CASCADE not valid;

alter table "public"."plan_schedule" validate constraint "plan_schedule_plan_workout_id_fkey";

alter table "public"."plan_schedule" add constraint "plan_schedule_unique" UNIQUE using index "plan_schedule_unique";

alter table "public"."plan_workouts" add constraint "plan_workouts_plan_id_fkey" FOREIGN KEY (plan_id) REFERENCES public.plans(id) ON DELETE CASCADE not valid;

alter table "public"."plan_workouts" validate constraint "plan_workouts_plan_id_fkey";

alter table "public"."plan_workouts" add constraint "plan_workouts_unique" UNIQUE using index "plan_workouts_unique";

alter table "public"."plan_workouts" add constraint "plan_workouts_workout_id_fkey" FOREIGN KEY (workout_id) REFERENCES public.workouts(id) ON DELETE CASCADE not valid;

alter table "public"."plan_workouts" validate constraint "plan_workouts_workout_id_fkey";

grant delete on table "public"."plan_schedule" to "anon";

grant insert on table "public"."plan_schedule" to "anon";

grant references on table "public"."plan_schedule" to "anon";

grant select on table "public"."plan_schedule" to "anon";

grant trigger on table "public"."plan_schedule" to "anon";

grant truncate on table "public"."plan_schedule" to "anon";

grant update on table "public"."plan_schedule" to "anon";

grant delete on table "public"."plan_schedule" to "authenticated";

grant insert on table "public"."plan_schedule" to "authenticated";

grant references on table "public"."plan_schedule" to "authenticated";

grant select on table "public"."plan_schedule" to "authenticated";

grant trigger on table "public"."plan_schedule" to "authenticated";

grant truncate on table "public"."plan_schedule" to "authenticated";

grant update on table "public"."plan_schedule" to "authenticated";

grant delete on table "public"."plan_schedule" to "postgres";

grant insert on table "public"."plan_schedule" to "postgres";

grant references on table "public"."plan_schedule" to "postgres";

grant select on table "public"."plan_schedule" to "postgres";

grant trigger on table "public"."plan_schedule" to "postgres";

grant truncate on table "public"."plan_schedule" to "postgres";

grant update on table "public"."plan_schedule" to "postgres";

grant delete on table "public"."plan_schedule" to "service_role";

grant insert on table "public"."plan_schedule" to "service_role";

grant references on table "public"."plan_schedule" to "service_role";

grant select on table "public"."plan_schedule" to "service_role";

grant trigger on table "public"."plan_schedule" to "service_role";

grant truncate on table "public"."plan_schedule" to "service_role";

grant update on table "public"."plan_schedule" to "service_role";

grant delete on table "public"."plan_workouts" to "anon";

grant insert on table "public"."plan_workouts" to "anon";

grant references on table "public"."plan_workouts" to "anon";

grant select on table "public"."plan_workouts" to "anon";

grant trigger on table "public"."plan_workouts" to "anon";

grant truncate on table "public"."plan_workouts" to "anon";

grant update on table "public"."plan_workouts" to "anon";

grant delete on table "public"."plan_workouts" to "authenticated";

grant insert on table "public"."plan_workouts" to "authenticated";

grant references on table "public"."plan_workouts" to "authenticated";

grant select on table "public"."plan_workouts" to "authenticated";

grant trigger on table "public"."plan_workouts" to "authenticated";

grant truncate on table "public"."plan_workouts" to "authenticated";

grant update on table "public"."plan_workouts" to "authenticated";

grant delete on table "public"."plan_workouts" to "postgres";

grant insert on table "public"."plan_workouts" to "postgres";

grant references on table "public"."plan_workouts" to "postgres";

grant select on table "public"."plan_workouts" to "postgres";

grant trigger on table "public"."plan_workouts" to "postgres";

grant truncate on table "public"."plan_workouts" to "postgres";

grant update on table "public"."plan_workouts" to "postgres";

grant delete on table "public"."plan_workouts" to "service_role";

grant insert on table "public"."plan_workouts" to "service_role";

grant references on table "public"."plan_workouts" to "service_role";

grant select on table "public"."plan_workouts" to "service_role";

grant trigger on table "public"."plan_workouts" to "service_role";

grant truncate on table "public"."plan_workouts" to "service_role";

grant update on table "public"."plan_workouts" to "service_role";

grant delete on table "public"."plans" to "anon";

grant insert on table "public"."plans" to "anon";

grant references on table "public"."plans" to "anon";

grant select on table "public"."plans" to "anon";

grant trigger on table "public"."plans" to "anon";

grant truncate on table "public"."plans" to "anon";

grant update on table "public"."plans" to "anon";

grant delete on table "public"."plans" to "authenticated";

grant insert on table "public"."plans" to "authenticated";

grant references on table "public"."plans" to "authenticated";

grant select on table "public"."plans" to "authenticated";

grant trigger on table "public"."plans" to "authenticated";

grant truncate on table "public"."plans" to "authenticated";

grant update on table "public"."plans" to "authenticated";

grant delete on table "public"."plans" to "postgres";

grant insert on table "public"."plans" to "postgres";

grant references on table "public"."plans" to "postgres";

grant select on table "public"."plans" to "postgres";

grant trigger on table "public"."plans" to "postgres";

grant truncate on table "public"."plans" to "postgres";

grant update on table "public"."plans" to "postgres";

grant delete on table "public"."plans" to "service_role";

grant insert on table "public"."plans" to "service_role";

grant references on table "public"."plans" to "service_role";

grant select on table "public"."plans" to "service_role";

grant trigger on table "public"."plans" to "service_role";

grant truncate on table "public"."plans" to "service_role";

grant update on table "public"."plans" to "service_role";

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


  create policy "Policy with security definer functions"
  on "public"."workout_exercises"
  as permissive
  for all
  to authenticated
using (true);



  create policy "Policy with security definer functions"
  on "public"."workouts"
  as permissive
  for all
  to authenticated
using (true);



  create policy "Policy with security definer functions"
  on "public"."exercises"
  as permissive
  for all
  to authenticated
using (true);



