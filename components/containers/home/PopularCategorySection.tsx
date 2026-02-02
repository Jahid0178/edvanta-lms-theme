import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data";
import CategoryCard from "@/components/cards/CategoryCard";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const PopularCategorySection = () => {
  return (
    <section className="py-[60px] bg-linear-to-b from-secondary/0 to-secondary/10">
      <div className="container">
        <div className="space-y-6">
          <div className="flex justify-center gap-6">
            <Badge className="px-4 py-2 gap-2 bg-secondary/5 text-secondary">
              <Sparkle
                size={16}
                style={{ width: 16, height: 16 }}
              />{" "}
              Popular Categories
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <SectionHeader
              title="Top Categories"
              description="Explore our Popular Categories"
            />
            <Button
              asChild
              variant={"outline"}
              className="px-6 py-3 text-base h-auto rounded-full border-primary text-primary hover:text-primary"
            >
              <Link href="/categories">All Categories</Link>
            </Button>
          </div>
        </div>
        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[52px] mt-[52px]">
          {categories.slice(0, 8).map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategorySection;
