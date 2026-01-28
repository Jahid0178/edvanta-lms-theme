import {
  HeaderNavigationLink,
  Category,
  WhyChooseFeature,
  Faq,
  Instructor,
  Course,
  Feedback,
  Membership,
  HowItWork,
  FooterSocialLink,
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
    role: "Senior Software Engineer",
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
    rating: 4.9,
    courseCount: 12,
    studentCount: 1200,
  },
  {
    id: 2,
    name: "Sarah Williams",
    image: "/images/instructors/instructor-2.jpg",
    role: "UI/UX Designer",
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
    rating: 4.8,
    courseCount: 8,
    studentCount: 800,
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "/images/instructors/instructor-3.jpg",
    role: "Data Analyst",
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
    rating: 4.7,
    courseCount: 6,
    studentCount: 600,
  },
  {
    id: 4,
    name: "Emily Johnson",
    image: "/images/instructors/instructor-4.jpg",
    role: "Digital Marketing Specialist",
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
    rating: 4.6,
    courseCount: 4,
    studentCount: 400,
  },
];

export const courses: Course[] = [
  {
    id: 1,
    title: "Complete CCNA Training",
    slug: "complete-ccna-training",
    image: "/images/courses/course-1.jpg",
    category: "IT",
    entryLevel: "Beginner",
    rating: 4.8,
    reviewCount: 3200,
    price: 129,
    instructor: {
      name: "Michael Carter",
      url: "/images/instructors/instructor-1.jpg",
    },
    metaData: {
      lesson: "45",
      hours: "19h 30m",
      enrolledStudents: 35,
    },
  },
  {
    id: 2,
    title: "UI-UX Design Career Track Program",
    slug: "ui-ux-design-career-track-program",
    image: "/images/courses/course-2.jpg",
    category: "Design",
    entryLevel: "Beginner",
    rating: 4.9,
    reviewCount: 540,
    price: 149,
    instructor: {
      name: "Samantha Lee",
      url: "/images/instructors/instructor-2.jpg",
    },
    metaData: {
      lesson: "52",
      hours: "20h 20m",
      enrolledStudents: 182,
    },
  },
  {
    id: 3,
    title: "Full Stack Web Development with JavaScript (MERN) & AI",
    slug: "full-stack-web-development-mern-ai",
    image: "/images/courses/course-3.jpg",
    category: "Web Development",
    entryLevel: "Intermediate",
    rating: 4.7,
    reviewCount: 610,
    price: 199,
    instructor: {
      name: "Daniel Brooks",
      url: "/images/instructors/instructor-3.jpg",
    },
    metaData: {
      lesson: "78",
      hours: "15h 20m",
      enrolledStudents: 215,
    },
  },
  {
    id: 4,
    title: "Master AI Automation & Build AI Agents (No Code)",
    slug: "master-ai-automation-build-ai-agents-no-code",
    image: "/images/courses/course-4.jpg",
    category: "AI",
    entryLevel: "Beginner",
    rating: 4.8,
    reviewCount: 430,
    price: 179,
    instructor: {
      name: "Emily Watson",
      url: "/images/instructors/instructor-4.jpg",
    },
    metaData: {
      lesson: "40",
      hours: "10h 30m",
      enrolledStudents: 164,
    },
  },
  {
    id: 5,
    title: "Full Stack Digital Marketing 2026",
    slug: "full-stack-digital-marketing-2026",
    image: "/images/courses/course-5.jpg",
    category: "Digital Marketing",
    entryLevel: "Beginner",
    rating: 4.6,
    reviewCount: 290,
    price: 139,
    instructor: {
      name: "Alex Morgan",
      url: "/images/instructors/instructor-1.jpg",
    },
    metaData: {
      lesson: "55",
      hours: "12h 20m",
      enrolledStudents: 98,
    },
  },
  {
    id: 6,
    title: "Full Stack Web Development with Python, Django, React & AI",
    slug: "full-stack-web-development-python-django-react-ai",
    image: "/images/courses/course-6.jpg",
    category: "Web Development",
    entryLevel: "Intermediate",
    rating: 4.9,
    reviewCount: 720,
    price: 219,
    instructor: {
      name: "Jonathan Reed",
      url: "/images/instructors/instructor-2.jpg",
    },
    metaData: {
      lesson: "85",
      hours: "15h 20m",
      enrolledStudents: 243,
    },
  },
];

export const feedbacks: Feedback[] = [
  {
    id: 1,
    name: "John Doe",
    image: "/images/feedbacks/feedback-1.jpg",
    role: "UI/UX Designer",
    review:
      "I had a great experience with Edvanta LMS. The platform is user-friendly, and the courses are well-structured. Highly recommended!",
  },
  {
    id: 2,
    name: "Samantha Lee",
    image: "/images/feedbacks/feedback-2.jpg",
    role: "UI/UX Designer",
    review:
      "The instructors are very knowledgeable and explain concepts clearly. I feel much more confident in my skills now!",
  },
  {
    id: 3,
    name: "Michael Carter",
    image: "/images/feedbacks/feedback-3.jpg",
    role: "Software Engineer",
    review:
      "Edvanta LMS has exceeded my expectations. The course content is engaging, and the platform is easy to navigate.",
  },
  {
    id: 4,
    name: "Emily Watson",
    image: "/images/feedbacks/feedback-4.jpg",
    role: "Digital Marketer",
    review:
      "I loved the hands-on projects in the courses. They really help to understand and apply what I’ve learned in real-world scenarios.",
  },
  {
    id: 5,
    name: "Alex Morgan",
    image: "/images/feedbacks/feedback-5.jpg",
    role: "Student",
    review:
      "The learning experience is top-notch! I appreciate the support from instructors and the detailed course materials.",
  },
  {
    id: 6,
    name: "Jonathan Reed",
    image: "/images/feedbacks/feedback-6.jpg",
    role: "Digital Marketer",
    review:
      "Fantastic LMS! The platform is smooth, and the courses are updated regularly. I highly recommend it to anyone looking to improve their skills.",
  },
];

// Membership Plans
export const memberships: Membership[] = [
  {
    id: 1,
    name: "Free Plan",
    description: "Perfect for getting started",
    price: 0,
    period: "month",
    isPopular: false,
    features: [
      "Browse all instructors & skills",
      "Book unlimited sessions",
      "Online & offline options",
      "Rate & review instructors",
    ],
    button: {
      label: "Get Started Free",
      link: "/pricing",
    },
  },
  {
    id: 2,
    name: "Premium Plan",
    description: "Unlock unlimited learning",
    price: 29,
    period: "month",
    isPopular: true,
    features: [
      "Everything in Free",
      "20% discount on all sessions",
      "Priority booking & scheduling",
      "Access to exclusive workshops",
      "Dedicated support team",
    ],
    button: {
      label: "Upgrade to Premium",
      link: "/pricing",
    },
  },
];

export const howItWorks: HowItWork[] = [
  {
    id: 1,
    title: "Choose Your Course",
    subtitle: "01",
    description:
      "Browse our extensive library and select a course that matches your goals.",
    icon: "search",
    reverse: false,
    color: {
      text: "text-blue-500",
      background: "bg-blue-500/10",
    },
  },
  {
    id: 2,
    title: "Learn from Experts",
    subtitle: "02",
    description:
      "Watch high-quality video lessons and interact with instructors.",
    icon: "upload",
    reverse: true,
    color: {
      text: "text-orange-500",
      background: "bg-orange-500/10",
    },
  },
  {
    id: 3,
    title: "Practice & Get Certified",
    subtitle: "03",
    description:
      "Complete projects, assessments, and earn certificates to showcase your skills.",
    icon: "award",
    reverse: false,
    color: {
      text: "text-fuchsia-500",
      background: "bg-fuchsia-500/10",
    },
  },
];

export const footerQuickLinks: { id: number; title: string; href: string }[] = [
  {
    id: 1,
    title: "Categories",
    href: "/categories",
  },
  {
    id: 2,
    title: "Courses",
    href: "/courses",
  },
  {
    id: 3,
    title: "Memberships",
    href: "/memberships",
  },
  {
    id: 4,
    title: "About Us",
    href: "/about-us",
  },
  {
    id: 5,
    title: "Contact Us",
    href: "/contact-us",
  },
];

export const footerSocialLinks: FooterSocialLink[] = [
  {
    id: 1,
    icon: "facebook",
    url: "#",
  },
  {
    id: 2,
    icon: "twitter",
    url: "#",
  },
  {
    id: 3,
    icon: "instagram",
    url: "#",
  },
  {
    id: 4,
    icon: "linkedin",
    url: "#",
  },
];
