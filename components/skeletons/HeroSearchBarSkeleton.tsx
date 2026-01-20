import { Skeleton } from "@/components/ui/skeleton";

const HeroSearchBarSkeleton = () => {
  return (
    <div className="relative max-w-xl w-full">
      <Skeleton className="w-full h-[56px] md:h-[85px] rounded-full" />
      <Skeleton className="absolute top-1/2 right-[15px] -translate-y-1/2 h-[40px] md:h-[60px] w-[130px] rounded-full" />
    </div>
  );
};

export default HeroSearchBarSkeleton;
