import {
  HeaderNavigationLink,
  Category,
  WhyChooseFeature,
  Faq,
  Instructor,
} from "@/typescript/types";
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

export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    id: 1,
    title: "Flexible Learning",
    description:
      "Choose between online video sessions or in- person meetings. Learn at your own pace.",
    icon: "zap",
  },
  {
    id: 2,
    title: "Verified Instructors",
    description:
      "All tutors are verified professionals with proven expertise in their fields. Learn with confidence.",
    icon: "shield",
  },
  {
    id: 3,
    title: "Personalized Sessions",
    description:
      "One-on-one attention tailored to your goals. Get the exact help you need to succeed.",
    icon: "target",
  },
];

export const faqs: Faq[] = [
  {
    id: 1,
    question: "How do I enroll in a course?",
    answer:
      "Enrolling is simple. Just create an account, choose your desired course, and complete the checkout process. Once enrolled, the course will be instantly available in your dashboard.",
  },
  {
    id: 2,
    question: "Can I access the courses on mobile devices?",
    answer:
      "Yes! Edvanta LMS is fully responsive. You can access all courses seamlessly from desktops, tablets, and mobile devices without any limitations.",
  },
  {
    id: 3,
    question: "Do the courses include certificates?",
    answer:
      "Absolutely. After successfully completing a course, you will receive a downloadable certificate that you can share on LinkedIn or include in your professional portfolio.",
  },
  {
    id: 4,
    question: "What payment methods are supported?",
    answer:
      "We support multiple secure payment methods including credit/debit cards and popular online payment gateways. All transactions are encrypted and safe.",
  },
  {
    id: 5,
    question: "Is there a refund policy?",
    answer:
      "Yes, we offer a 30-day refund policy. If you are not satisfied with a course, you can request a full refund within 30 days of purchase—no questions asked.",
  },
];

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Alex Carter",
    image: "/images/instructors/instructor-1.jpg",
    description:
      "Alex Carter is a senior software engineer with over 10 years of experience building scalable web applications. He enjoys mentoring developers and simplifying complex concepts.",
    slug: "alex-carter",
    socials: [
      {
        name: "X",
        href: "https://x.com",
        icon: "twitter",
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: 2,
    name: "Sarah Williams",
    image: "/images/instructors/instructor-2.jpg",
    description:
      "Sarah Williams is a UI/UX designer specializing in user-centered design. She has helped hundreds of students improve their design skills through practical projects.",
    slug: "sarah-williams",
    socials: [
      {
        name: "X",
        href: "https://x.com",
        icon: "twitter",
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "/images/instructors/instructor-3.jpg",
    description:
      "Michael Brown is a data analyst with expertise in data visualization and analytics. He focuses on making complex data easy to understand for learners.",
    slug: "michael-brown",
    socials: [
      {
        name: "X",
        href: "https://x.com",
        icon: "twitter",
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: 4,
    name: "Emily Johnson",
    image: "/images/instructors/instructor-4.jpg",
    description:
      "Emily Johnson is a digital marketing specialist with years of hands-on experience. She teaches practical strategies for growing brands and online businesses.",
    slug: "emily-johnson",
    socials: [
      {
        name: "X",
        href: "https://x.com",
        icon: "twitter",
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
];
