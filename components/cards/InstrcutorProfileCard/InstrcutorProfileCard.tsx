import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Instructor } from "@/typescript/types";
import { DynamicIcon } from "lucide-react/dynamic";
import { Button } from "@/components/ui/button";
import { numberFormatter } from "@/utils/numberFormatter";

interface Args {
  instructor: Instructor;
}

const InstrcutorProfileCard = ({ instructor }: Args) => {
  return (
    <Card className="pt-0 pb-3 rounded-[20px] gap-4 overflow-hidden group hover:drop-shadow-[0_10px_10px_rgba(74,22,189,0.2)] hover:-translate-y-1 hover:border-primary transition-all">
      <CardHeader className="px-0 relative">
        <Image
          src={instructor.image}
          alt={`Image of ${instructor.name}`}
          width={2000}
          height={1080}
          className="aspect-square object-cover w-full h-full"
        />
        {/* Socials */}
        <div className="opacity-0 group-hover:opacity-100 flex items-center gap-3 justify-center absolute bottom-2 left-1/2 -translate-x-1/2 group-hover:-translate-y-4 transition-all pointer-events-none group-hover:pointer-events-auto">
          {instructor.socials.map((social) => (
            <Link
              href={social.href}
              key={social.name}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500/50 hover:bg-primary transition-colors backdrop-blur-md"
            >
              <DynamicIcon
                name={social.icon}
                size={20}
                className="text-white"
              />
            </Link>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-3 space-y-3 text-center">
        <Link
          href={`/instructors/${instructor.slug}`}
          className="inline-block"
        >
          <CardTitle className="text-xl flex items-center gap-2">
            {instructor.name}{" "}
            <DynamicIcon
              name="arrow-up-right"
              size={20}
              className="text-primary"
            />
          </CardTitle>
        </Link>
        <CardDescription className="text-base">
          {instructor.role}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-3 justify-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <DynamicIcon
              name="star"
              size={16}
              className="text-orange-400"
              fill="currentColor"
            />
            <span className="text-sm">{instructor.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <DynamicIcon
              name="users"
              size={16}
            />
            <span className="text-sm">
              {numberFormatter(instructor.studentCount)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <DynamicIcon
              name="book-open"
              size={16}
            />
            <span className="text-sm">
              {numberFormatter(instructor.courseCount)}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default InstrcutorProfileCard;
