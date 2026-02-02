import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Category } from "@/typescript/types";
import { cn } from "@/lib/utils";

interface Args {
  category: Category;
}

const CategoryCard = ({ category }: Args) => {
  return (
    <Link href={"/categories"}>
      <Card className="px-[55px] h-full py-14 shadow-none group hover:shadow-xl hover:drop-shadow-[0_10px_15px_rgba(59,130,246,0.2)] hover:border-primary">
        <CardContent className="px-0">
          <div className="flex flex-col items-center gap-6">
            <div
              className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center",
                category.meta.bg,
              )}
            >
              <span className="text-black text-2xl">
                <DynamicIcon
                  size={32}
                  name={category.icon}
                  className={cn(category.meta.color)}
                />
              </span>
            </div>
            <div className="text-center space-y-3">
              <CardTitle className="text-black group-hover:bg-linear-to-l from-secondary to-primary bg-clip-text group-hover:text-transparent">
                {category.title}
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
              <p className="text-sm text-[#555555]">{category.count} Courses</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
