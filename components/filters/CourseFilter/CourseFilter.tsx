"use client";

import React, { use } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoriesFilters, learningLevels, popularityLevels } from "@/data";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CourseFilterSchema, courseFilterSchema } from "@/validation";
import { Field, FieldGroup } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CourseFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const form = useForm<CourseFilterSchema>({
    resolver: zodResolver(courseFilterSchema),
    defaultValues: {
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
      level: searchParams.get("level") || "",
      popularity: searchParams.get("popularity") || "",
    },
  });

  const onSubmit = (data: CourseFilterSchema) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className={cn("grid grid-cols-12 gap-4")}>
            {/* Search */}
            <Controller
              name="search"
              control={form.control}
              render={({ field }) => (
                <Field className="col-span-12 md:col-span-4">
                  <Input
                    {...field}
                    placeholder="Search Courses"
                  />
                </Field>
              )}
            />

            {/* Category */}
            <Controller
              name="category"
              control={form.control}
              render={({ field }) => (
                <Field className="col-span-12 md:col-span-2">
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoriesFilters.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.value}
                        >
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />

            {/* Level */}
            <Controller
              name="level"
              control={form.control}
              render={({ field }) => (
                <Field className="col-span-12 md:col-span-2">
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a level" />
                    </SelectTrigger>
                    <SelectContent>
                      {learningLevels.map((level) => (
                        <SelectItem
                          key={level.id}
                          value={level.value}
                        >
                          {level.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />

            {/* Popularity */}
            <Controller
              name="popularity"
              control={form.control}
              render={({ field }) => (
                <Field className="col-span-12 md:col-span-2">
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a popularity" />
                    </SelectTrigger>
                    <SelectContent>
                      {popularityLevels.map((popular) => (
                        <SelectItem
                          key={popular.id}
                          value={popular.value}
                        >
                          {popular.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />

            {/* Button */}
            <Button
              type="submit"
              className="col-span-12 md:col-span-2 gradient-left-to-right text-base"
            >
              Search
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};

export default CourseFilter;
