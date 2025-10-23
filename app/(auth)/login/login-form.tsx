import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function LoginForm({
  className,
  defaultEmail,
  ...props
}: React.ComponentPropsWithoutRef<"form"> & { defaultEmail?: string }) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-bold text-2xl">Login to your account</h1>
        <p className="text-balance text-muted-foreground text-sm">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            defaultValue={defaultEmail}
            id="email"
            name="email"
            placeholder="m@example.com"
            required
            type="email"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}
