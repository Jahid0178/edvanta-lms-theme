import dynamicIconImports from "lucide-react/dynamicIconImports";

export type HeaderNavigationLink = {
  label: string;
  href: string;
};

export type Category = {
  id: number;
  title: string;
  slug: string;
  count: number;
  icon: keyof typeof dynamicIconImports;
};

export type WhyChooseFeature = {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof dynamicIconImports;
};

export type Faq = {
  id: number;
  question: string;
  answer: string;
};

export type Instructor = {
  id: number;
  name: string;
  image: string;
  role: string;
  slug: string;
  socials: {
    name: string;
    href: string;
    icon: keyof typeof dynamicIconImports;
  }[];
  rating: number;
  courseCount: number;
  studentCount: number;
};

export type Course = {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  entryLevel: string;
  rating: number;
  reviewCount: number;
  price: number;
  instructor: {
    name: string;
    url: string;
  };
  metaData: {
    lesson: string;
    hours: string;
    enrolledStudents: number;
  };
};
