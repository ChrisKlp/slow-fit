create type "public"."exercise_type" as enum ('reps', 'time');


  create table "public"."exercises" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" text not null,
    "description" text,
    "video_url" text,
    "extra_videos" text[],
    "type" public.exercise_type not null default 'reps'::public.exercise_type
      );


alter table "public"."exercises" enable row level security;

CREATE UNIQUE INDEX exercises_pkey ON public.exercises USING btree (id);

alter table "public"."exercises" add constraint "exercises_pkey" PRIMARY KEY using index "exercises_pkey";

grant delete on table "public"."exercises" to "anon";

grant insert on table "public"."exercises" to "anon";

grant references on table "public"."exercises" to "anon";

grant select on table "public"."exercises" to "anon";

grant trigger on table "public"."exercises" to "anon";

grant truncate on table "public"."exercises" to "anon";

grant update on table "public"."exercises" to "anon";

grant delete on table "public"."exercises" to "authenticated";

grant insert on table "public"."exercises" to "authenticated";

grant references on table "public"."exercises" to "authenticated";

grant select on table "public"."exercises" to "authenticated";

grant trigger on table "public"."exercises" to "authenticated";

grant truncate on table "public"."exercises" to "authenticated";

grant update on table "public"."exercises" to "authenticated";

grant delete on table "public"."exercises" to "postgres";

grant insert on table "public"."exercises" to "postgres";

grant references on table "public"."exercises" to "postgres";

grant select on table "public"."exercises" to "postgres";

grant trigger on table "public"."exercises" to "postgres";

grant truncate on table "public"."exercises" to "postgres";

grant update on table "public"."exercises" to "postgres";

grant delete on table "public"."exercises" to "service_role";

grant insert on table "public"."exercises" to "service_role";

grant references on table "public"."exercises" to "service_role";

grant select on table "public"."exercises" to "service_role";

grant trigger on table "public"."exercises" to "service_role";

grant truncate on table "public"."exercises" to "service_role";

grant update on table "public"."exercises" to "service_role";


