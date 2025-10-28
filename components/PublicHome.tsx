"use client";
import { modal } from "@/context/";

import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCard } from "@/components/SkeletonCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LockKeyhole,
  Link,
  Circle,
  Triangle,
  Pencil,
  ScrollText,
} from "lucide-react";

export default function PublicHome() {
  return (
    <div className="relative border border-dashed border-border rounded-xl mx-auto p-12 h-96 w-1/2 flex items-center justify-center text-primary">
      <Card
        className="w-2/3 border-primary shadow-lg shadow-primary cursor-pointer hover:scale-95 transition-all ease-in-out duration-400"
        onClick={() => modal.open()}
      >
        <CardHeader>
          <CardTitle>Wallet not connected</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="uppercase text-2xl">
            Connect your wallet to start journaling
          </h1>
        </CardContent>
      </Card>

      <LockKeyhole className="absolute top-1 w-16 h-16" />
      <Link className="animate-pulse absolute -top-8 -right-3 w-16 h-16" />
      <Circle className="absolute -top-4 right-60 w-4 h-4" />
      <Circle className="animate-pulse absolute -top-12 -left-3 w-2 h-2" />
      <Triangle className="absolute top-52 left-4 w-4 h-4" />
      <ScrollText className="absolute bottom-1 -left-10 w-12 h-12 -rotate-12" />
      <Triangle className="animate-pulse absolute -bottom-44 left-34 w-20 h-20" />
      <Triangle className="absolute bottom-32 -right-32 w-2 h-2" />
      <Triangle className="animate-pulse absolute bottom-1 -right-32 w-16 h-16" />

      <Pencil className="absolute bottom-30 right-6 w-8 h-8" />

      <SkeletonCard className="-top-8 -left-24 w-44 rotate-6">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </SkeletonCard>

      <SkeletonCard className="top-4 -right-14 w-60 rotate-12">
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </SkeletonCard>

      <SkeletonCard className="-bottom-18 left-24 w-72 rotate-12">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </SkeletonCard>

      <SkeletonCard className="-bottom-60 -right-12 w-80 -rotate-12">
        <Skeleton className="h-48 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </SkeletonCard>

      <SkeletonCard className="-top-4 left-44 w-32 -rotate-12">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-full" />
      </SkeletonCard>

      <SkeletonCard className="-bottom-44 -left-24 w-32 rotate-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-6 w-full" />

        <Skeleton className="h-4 w-full" />
      </SkeletonCard>
    </div>
  );
}
