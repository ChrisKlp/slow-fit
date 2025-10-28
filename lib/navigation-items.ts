import { Activity, Home, List, LogIn, Timer } from "lucide-react";

export const routes = {
  ROOT: "/",
  ACTIVE_PLANS: "/active-plans",
  WORKOUT_SESSIONS: "/workout-sessions",
  PLANS: "/plans",
  WORKOUTS: "/workouts",
  EXERCISES: "/exercises",
  LOGIN: "/login",
} as const;

export const mainNavigationItems = [
  {
    title: "Home",
    url: routes.ROOT,
    icon: Home,
  },
  {
    title: "Active Plans",
    url: routes.ACTIVE_PLANS,
    icon: Activity,
  },
  {
    title: "Sessions",
    url: routes.WORKOUT_SESSIONS,
    icon: Timer,
  },
];

export const secondaryNavigationItems = [
  {
    title: "Plans",
    url: routes.PLANS,
    icon: List,
  },
  {
    title: "Workouts",
    url: routes.WORKOUTS,
    icon: List,
  },
  { title: "Exercises", url: routes.EXERCISES, icon: List },
  {
    title: "Login",
    url: routes.LOGIN,
    icon: LogIn,
  },
];
