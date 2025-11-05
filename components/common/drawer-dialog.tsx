"use client";

import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

type DrawerDialogProps = {
  title: string;
  description?: string;
  trigger?: React.ReactNode;
  setOpen: (open: boolean) => void;
  open: boolean;
  footer?: React.ReactNode;
} & PropsWithChildren;

export function DrawerDialog({
  children,
  title,
  description,
  trigger,
  setOpen,
  open,
}: DrawerDialogProps) {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <Dialog onOpenChange={setOpen} open={open}>
        {trigger}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer autoFocus={open} onOpenChange={setOpen} open={open}>
      {trigger}
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">{children}</div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
