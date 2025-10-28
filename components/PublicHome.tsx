import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCard } from "@/components/SkeletonCard";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function PublicHome() {
  return (
    <div className="relative border border-dashed border-border rounded-xl mx-auto p-12 h-96 w-1/2 flex items-center justify-center text-primary">
      <Card className="w-2/3 border-primary shadow-lg shadow-primary">
        <CardHeader>
          <CardTitle>Wallet not connected</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="uppercase text-2xl">
            Connect your wallet to start journaling
          </h1>
        </CardContent>
      </Card>

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
