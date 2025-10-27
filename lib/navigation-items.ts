import {
  Activity,
  Calendar,
  Home,
  LogIn,
  Search,
  Settings,
} from "lucide-react";

export const routes = {
  ROOT: "/",
  ACTIVE_PLANS: "/active-plans",
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
    title: "Calendar",
    url: "#",
    icon: Calendar,
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
