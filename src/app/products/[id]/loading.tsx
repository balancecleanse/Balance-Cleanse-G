import { Card, Skeleton } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-4">
          <Skeleton className="rounded-lg">
            <div className="h-[500px]" />
          </Skeleton>
        </Card>
        <div className="space-y-6">
          <Skeleton className="rounded-lg">
            <div className="h-8 w-3/4" />
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-6 w-1/4" />
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-24 w-full" />
          </Skeleton>
          <div className="flex gap-4">
            <Skeleton className="rounded-lg">
              <div className="h-10 w-24" />
            </Skeleton>
            <Skeleton className="rounded-lg">
              <div className="h-10 flex-grow" />
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}
