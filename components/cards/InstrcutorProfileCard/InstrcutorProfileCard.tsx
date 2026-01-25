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

interface Args {
  instructor: Instructor;
}

const InstrcutorProfileCard = ({ instructor }: Args) => {
  return (
    <Card className="py-3 rounded-[10px] gap-3">
      <CardHeader className="px-3">
        <Image
          src={instructor.image}
          alt={`Image of ${instructor.name}`}
          width={2000}
          height={1080}
          className="aspect-square object-cover w-full h-full rounded-md"
        />
      </CardHeader>
      <CardContent className="px-3 space-y-3">
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
          {instructor.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-3">
        <div className="flex items-center gap-4">
          {instructor.socials.map((social) => (
            <Button
              key={social.name}
              variant={"outline"}
              size={"icon"}
              className="gradient-bottom-to-top"
              title={social.name}
            >
              <Link
                href={social.href}
                target="_blank"
              >
                <DynamicIcon
                  name={social.icon}
                  size={20}
                  color="white"
                  style={{ width: 20, height: 20 }}
                />
              </Link>
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default InstrcutorProfileCard;
