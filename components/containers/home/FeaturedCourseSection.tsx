import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { courses } from "@/data";
import CourseCard from "@/components/cards/CourseCard/CourseCard";

const FeaturedCourseSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="space-y-6">
          <div className="flex justify-center gap-6">
            <Badge className="px-4 py-2 gap-2 bg-purple-500/5 text-purple-500">
              <Sparkles
                size={16}
                style={{ width: 16, height: 16 }}
              />{" "}
              Featured Courses
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <SectionHeader
              title="Featured Courses"
              description="Explore our Popular Courses"
            />
            <Button
              asChild
              variant={"outline"}
              className="px-6 py-3 text-base h-auto rounded-full border-primary text-primary hover:text-primary"
            >
              <Link href="/courses">All Courses</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[52px]">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourseSection;
