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
    <div
      className="overflow-hidden relative rounded-none sm:rounded-xl mx-auto px-12 h-[calc(100vh-14rem)] sm:h-[calc(100vh-16rem)] lg:h-[calc(100vh-18rem)]
    lg:px-40 py-20 sm:py-24 md:py-24 lg:py-40 w-full sm:w-11/12 md:w-4/5 lg:w-2/3 sm:flex sm:items-center justify-center text-primary"
    >
      {/* Background Border */}
      <div className="sm:block hidden border border-dashed border-border rounded-xl w-full h-full absolute -z-2"></div>
      <Card
        className="w-full h-auto border-primary shadow-lg shadow-primary cursor-pointer hover:scale-95 transition-all ease-in-out duration-400"
        onClick={() => modal.open()}
      >
        <CardHeader>
          <CardTitle>Wallet not connected</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="uppercase text-lg sm:text-xl md:text-2xl">
            Connect your wallet to start journaling
          </h1>
        </CardContent>
      </Card>

      <LockKeyhole className="absolute left-32 sm:left-28 top-1 w-12 h-12 lg:w-16 lg:h-16" />
      <Link className="animate-pulse absolute -top-1 right-24 sm:right-20 w-8 h-8 lg:-top-8 lg:-right-3 lg:w-16 lg:h-16" />
      <Circle className="absolute top-14 right-24 md:top-18 w-3 h-3 md:right-60 lg:w-4 lg:h-4" />
      <Circle className="animate-pulse absolute top-28 left-2 w-2 h-2 lg:-top-12 lg:-left-3" />
      <Triangle className="absolute top-52 left-4 w-4 h-4" />
      <ScrollText className="absolute sm:bottom-8 bottom-40 left-4 sm:left-36 w-10 h-10 lg:-left-10 md:w-12 md:h-12 -rotate-12" />
      <Triangle className="animate-pulse absolute bottom-6 sm:-bottom-2 left-40 sm:left-34 rotate-45 w-6 h-6 lg:-bottom-44 lg:left-34 lg:w-20 lg:h-20" />
      <Triangle className="absolute bottom-2 sm:bottom-38 right-4 w-2 h-2 lg:-right-32" />
      <Triangle className="animate-pulse absolute sm:bottom-1 bottom-16 -right-2 sm:right-64 w-10 h-10 md:right-80 lg:w-16 lg:h-16" />
      <Pencil className="absolute bottom-68 sm:top-15 lg:right-6 w-8 h-8 sm:right-68 right-6" />

      {/* Skeleton Cards - Adjusted for better visibility and overflow on small screens */}

      <SkeletonCard className="top-2 sm:top-4 -left-1 w-20 rotate-6 lg:w-44">
        <Skeleton className="h-2 w-full lg:h-32" />
        <Skeleton className="h-4 w-full sm:w-3/4" />
      </SkeletonCard>

      <SkeletonCard className="top-4 -right-2 w-24 rotate-12 lg:right-6 lg:w-60">
        <Skeleton className="h-8 w-1/2 lg:h-10" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </SkeletonCard>

      <SkeletonCard className="bottom-72 left-2 w-56 rotate-12 sm:-top-10 sm:left-50 lg:w-72">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </SkeletonCard>

      <SkeletonCard className="bottom-24 sm:-bottom-10 right-2 w-54 -rotate-12 md:-bottom-35 md:-right-12 lg:-right-16 md:w-80 lg:w-60">
        <Skeleton className="h-12 w-full md:h-30 lg:h-24" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </SkeletonCard>

      <SkeletonCard className="top-64 sm:top-14 lg:-top-12 right-2 sm:left-32 w-24 -rotate-12 lg:left-44 md:w-32">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-full" />
      </SkeletonCard>

      <SkeletonCard className="-bottom-12 left-4 w-28 rotate-2 lg:-bottom-44 lg:-left-24 lg:w-32">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
      </SkeletonCard>
    </div>
  );
}
