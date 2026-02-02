import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FieldGroup } from "@/components/ui/field";
import { cn } from "@/lib/utils";

const CourseFilterSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <FieldGroup className={cn("grid grid-cols-12 gap-4")}>
          {/* Search Input */}
          <div className="col-span-12 md:col-span-4">
            <Skeleton className="h-9 w-full rounded-md" />
          </div>

          {/* Category */}
          <div className="col-span-12 md:col-span-2">
            <Skeleton className="h-9 w-full rounded-md" />
          </div>

          {/* Level */}
          <div className="col-span-12 md:col-span-2">
            <Skeleton className="h-9 w-full rounded-md" />
          </div>

          {/* Popularity */}
          <div className="col-span-12 md:col-span-2">
            <Skeleton className="h-9 w-full rounded-md" />
          </div>

          {/* Search Button */}
          <div className="col-span-12 md:col-span-2">
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        </FieldGroup>
      </CardContent>
    </Card>
  );
};

export default CourseFilterSkeleton;
