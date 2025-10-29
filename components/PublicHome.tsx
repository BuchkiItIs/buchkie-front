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
    <div className="relative  rounded-xl mx-auto p-6 sm:p-8 md:p-12 h-[600px] md:h-96 w-11/12 md:w-4/5 lg:w-2/3 flex items-center justify-center text-primary">
      {/* Background Border */}
      <div className=" border border-dashed border-border rounded-xl w-full h-full absolute -z-2"></div>
      <Card
        className="w-11/12 md:w-2/3 border-primary shadow-lg shadow-primary cursor-pointer hover:scale-95 transition-all ease-in-out duration-400"
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

      <LockKeyhole className="absolute top-1 w-12 h-12 md:w-16 md:h-16" />
      <Link className="animate-pulse absolute -top-4 -right-2 w-12 h-12 md:-top-8 md:-right-3 md:w-16 md:h-16" />
      <Circle className="absolute -top-4 right-20 w-3 h-3 md:right-60 md:w-4 md:h-4" />
      <Circle className="animate-pulse absolute -top-8 -left-2 w-2 h-2 md:-top-12 md:-left-3" />
      <Triangle className="absolute top-52 left-4 w-4 h-4" />
      <ScrollText className="absolute sm:bottom-1 bottom-18 -left-4 w-10 h-10 md:-left-10 md:w-12 md:h-12 -rotate-12" />
      <Triangle className="animate-pulse absolute bottom-6 sm:-bottom-16 left-12 sm:left-22 w-10 h-10 md:-bottom-44 md:left-34 -z-1 md:w-20 md:h-20" />
      <Triangle className="absolute bottom-32 -right-8 w-2 h-2 md:-right-32" />
      <Triangle className="animate-pulse absolute sm:bottom-1 bottom-16 -right-8 sm:right-52 w-10 h-10 md:-right-32 md:w-16 md:h-16 -z-1" />
      <Pencil className="absolute bottom-30 md:right-6 w-8 h-8 sm:right-64 right-6" />

      {/* Skeleton Cards - Adjusted for better visibility and overflow on small screens */}

      <SkeletonCard className="top-2 sm:top-4 -left-4 w-20 rotate-6 md:-left-24 md:w-44">
        <Skeleton className="h-2 w-full md:h-32" />
        <Skeleton className="h-4 w-full sm:w-3/4" />
      </SkeletonCard>

      <SkeletonCard className="top-4 -right-2 w-24 rotate-12 md:-right-14 md:w-60">
        <Skeleton className="h-8 w-1/2 md:h-10" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </SkeletonCard>

      <SkeletonCard className="bottom-28 left-2 w-56 rotate-12 md:-bottom-18 md:left-24 md:w-72">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </SkeletonCard>

      <SkeletonCard className="-bottom-30 sm:-bottom-10 -right-2 w-54 -rotate-12 md:-bottom-60 lg:-bottom-35 md:-right-12  lg:-right-16 md:w-80 lg:w-60">
        <Skeleton className="h-32 w-full md:h-48 lg:h-24" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </SkeletonCard>

      <SkeletonCard className="top-24 sm:top-14 lg:-top-12 left-24 sm:left-32 w-24 -rotate-12 md:left-44 lg:left-24 md:w-32">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-full" />
      </SkeletonCard>

      <SkeletonCard className="-bottom-24 -left-10 w-28 rotate-2 md:-bottom-44 md:-left-24 md:w-32">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
      </SkeletonCard>
    </div>
  );
}
