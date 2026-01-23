import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Category } from "@/typescript/types";

interface Args {
  category: Category;
}

const CategoryCard = ({ category }: Args) => {
  return (
    <Link href={"/categories"}>
      <Card className="px-[55px] py-14 shadow-none group hover:shadow-xl hover:drop-shadow-[0_10px_15px_rgba(59,130,246,0.2)] hover:border-primary">
        <CardContent className="px-0">
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-black text-2xl">
                <DynamicIcon
                  name={category.icon}
                  className="text-primary"
                  size={32}
                />
              </span>
            </div>
            <div className="text-center space-y-3">
              <CardTitle className="text-black group-hover:bg-linear-to-l from-secondary to-primary bg-clip-text group-hover:text-transparent">
                {category.title}
              </CardTitle>
              <p className="text-sm text-[#555555]">{category.count} Courses</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
