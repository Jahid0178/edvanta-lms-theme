import { HeaderNavigationLink, Category } from "@/typescript/types";
import { ChevronsLeftRightEllipsis } from "lucide-react";

export const headerNavigationLinks: HeaderNavigationLink[] = [
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Memberships",
    href: "/memberships",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export const clients: string[] = [
  "/images/clients/client-1.png",
  "/images/clients/client-2.png",
  "/images/clients/client-3.png",
  "/images/clients/client-4.png",
  "/images/clients/client-5.png",
  "/images/clients/client-6.png",
];

export const topCategories: Category[] = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    count: 12,
    icon: "chevrons-left-right-ellipsis",
  },
  {
    id: 2,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    count: 8,
    icon: "smartphone",
  },
  {
    id: 3,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    count: 6,
    icon: "figma",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    count: 4,
    icon: "brain-circuit",
  },
  {
    id: 5,
    title: "Data Science",
    slug: "data-science",
    count: 9,
    icon: "database",
  },
  {
    id: 6,
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    count: 3,
    icon: "cloudy",
  },
  {
    id: 7,
    title: "Business & Freelancing",
    slug: "business-freelancing",
    count: 12,
    icon: "handshake",
  },
  {
    id: 8,
    title: "Cyber Security",
    slug: "cyber-security",
    count: 6,
    icon: "shield-check",
  },
];
