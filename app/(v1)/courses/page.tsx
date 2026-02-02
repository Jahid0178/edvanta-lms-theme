import React, { Suspense } from "react";
import { courses } from "@/data";
import CourseCard from "@/components/cards/CourseCard/CourseCard";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import CourseFilter from "@/components/filters/CourseFilter/CourseFilter";
import CourseFilterSkeleton from "@/components/skeletons/CourseFilterSkeleton";
import PaginationWrapper from "@/components/common/PaginationWrapper/PaginationWrapper";

const CoursesPage = () => {
  return (
    <section className="section bg-linear-to-t from-white to-blue-200/50">
      <div className="container mt-[42px]">
        <div className="space-y-6">
          <header aria-labelledby="courses-heading">
            <SectionHeader
              title="Explore All"
              highlight="Courses"
              description="Discover 500+ expert-led courses designed to help you master new skills and advance your career"
              position="center"
              className="w-full max-w-[728px] mx-auto"
              titleClassName="text-5xl"
            />
          </header>
          <Suspense fallback={<CourseFilterSkeleton />}>
            <CourseFilter />
          </Suspense>
          <div className="space-y-1">
            <h4 className="text-xl">{courses.length} Courses Found</h4>
            <p className="text-base text-gray-500">
              Showing results for all skills and subjects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
          <PaginationWrapper totalPages={10} />
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
