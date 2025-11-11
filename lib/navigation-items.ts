import {
  Clipboard,
  Home,
  List,
  LogIn,
  type LucideIcon,
  Timer,
} from "lucide-react";

export type NavigationItem = {
  title: string;
  url: string;
  IconComponent: LucideIcon;
};

export const routes = {
  ROOT: "/",
  ACTIVE_PLANS: "/active-plans",
  WORKOUT_SESSIONS: "/workout-sessions",
  PLANS: "/plans",
  PLANS_CREATE: "/plans/create",
  WORKOUTS: "/workouts",
  WORKOUTS_CREATE: "/workouts/create",
  EXERCISES: "/exercises",
  LOGIN: "/login",
} as const;

export const mainNavigationItems: NavigationItem[] = [
  {
    title: "Home",
    url: routes.ROOT,
    IconComponent: Home,
  },
  {
    title: "Active Plans",
    url: routes.ACTIVE_PLANS,
    IconComponent: Clipboard,
  },
  {
    title: "Sessions",
    url: routes.WORKOUT_SESSIONS,
    IconComponent: Timer,
  },
];

export const secondaryNavigationItems: NavigationItem[] = [
  {
    title: "Plans",
    url: routes.PLANS,
    IconComponent: List,
  },
  {
    title: "Workouts",
    url: routes.WORKOUTS,
    IconComponent: List,
  },
  { title: "Exercises", url: routes.EXERCISES, IconComponent: List },
  {
    title: "Login",
    url: routes.LOGIN,
    IconComponent: LogIn,
  },
];
