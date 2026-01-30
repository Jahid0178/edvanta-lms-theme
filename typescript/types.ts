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

export type Feedback = {
  id: number;
  name: string;
  image: string;
  role: string;
  review: string;
};

export type Membership = {
  id: number;
  name: string;
  description: string;
  price: number;
  period: string;
  isPopular: boolean;
  features: string[];
  button: {
    label: string;
    link: string;
  };
};

export type HowItWork = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: keyof typeof dynamicIconImports;
  reverse: boolean;
  color: {
    text: string;
    background: string;
  };
};

export type FooterSocialLink = {
  id: number;
  icon: keyof typeof dynamicIconImports;
  url: string;
};

export type Stats = {
  id: number;
  icon: keyof typeof dynamicIconImports;
  title: string;
  subtitle: string;
};
