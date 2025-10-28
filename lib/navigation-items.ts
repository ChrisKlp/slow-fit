import { Activity, Home, LogIn, Search, Settings, Timer } from "lucide-react";

export const routes = {
  ROOT: "/",
  ACTIVE_PLANS: "/active-plans",
  WORKOUT_SESSIONS: "/workout-sessions",
  LOGIN: "/login",
} as const;

export const navigationItems = [
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
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Login",
    url: routes.LOGIN,
    icon: LogIn,
  },
];
