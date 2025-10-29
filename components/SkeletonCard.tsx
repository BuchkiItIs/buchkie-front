import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // shadcn helper for combining classes
import React from "react";

interface SkeletonCardProps {
  className?: string;
  children?: React.ReactNode;
}

export function SkeletonCard({ className, children }: SkeletonCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl shadow-sm absolute border-3 -z-1 py-2 md:py-6",
        className,
      )}
    >
      <CardContent className="sm:space-y-4 space-y-2 px-2 md:px-6">
        {children}
      </CardContent>
    </Card>
  );
}
