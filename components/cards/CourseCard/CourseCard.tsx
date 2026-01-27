import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Course } from "@/typescript/types";
import { BookMarked, Clock, Star, UserRound } from "lucide-react";
import { currencyFormat, formatWithComma } from "@/utils/numberFormatter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Args {
  course: Course;
}

const CourseCard = ({ course }: Args) => {
  return (
    <Card className="pt-0 rounded-3xl overflow-hidden shadow-none hover-effect">
      <CardHeader className="px-0">
        <Image
          src={course.image}
          alt={course.title}
          width={500}
          height={500}
          className="aspect-video w-full h-full"
        />
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <span className="text-green-700 font-semibold text-sm">
            {course.category}
          </span>
          {" - "}
          <span className="text-sm text-gray-500">{course.entryLevel}</span>
        </div>
        <div className="text-sm flex items-center gap-2">
          <span className="text-green-500 flex items-center gap-1">
            {course.rating}{" "}
            <span className="flex gap-1">
              <Star
                size={16}
                color="orange"
                fill="orange"
              />
              <Star
                size={16}
                color="orange"
                fill="orange"
              />
              <Star
                size={16}
                color="orange"
                fill="orange"
              />
              <Star
                size={16}
                color="orange"
                fill="orange"
              />
              <Star
                size={16}
                color="orange"
                fill="orange"
              />
            </span>
          </span>{" "}
          <span className="text-gray-500">
            ({formatWithComma(course.reviewCount)})
          </span>
        </div>
        <Link
          href={`/courses/${course.slug}`}
          className="block"
        >
          <CardTitle
            title={course.title}
            className="text-2xl truncate"
          >
            {course.title}
          </CardTitle>
        </Link>
        <div className="flex justify-between items-center gap-2">
          <p className="flex items-center gap-1 text-sm">
            <BookMarked size={16} /> Lesson {course.metaData.lesson}
          </p>{" "}
          <p className="flex items-center gap-1 text-sm">
            <Clock size={16} /> {course.metaData.hours}
          </p>{" "}
          <p className="flex items-center gap-1 text-sm">
            <UserRound size={16} /> Students {course.metaData.enrolledStudents}+
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <figure className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={course.instructor.url}
              alt={course.instructor.name}
            />
            <AvatarFallback>
              {course.instructor.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <figcaption className="text-base">
            {course.instructor.name}
          </figcaption>
        </figure>
        <p className="text-2xl font-semibold gradient-left-to-right bg-clip-text text-transparent">
          {currencyFormat(course.price)}
        </p>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
