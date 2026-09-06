import { NavItem } from "@/types";
export const navigation: NavItem[] = [
  {
    label: "About",
    href: "/",
    dropdown: [
      {
        label: "Who We Are",
        href: "/about",
      },
      {
        label: "Our Story",
        href: "/about/our-story",
      },
      {
        label: "Our Team",
        href: "/about/team",
      },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    dropdown: [
      {
        label: "Our Services",
        href: "/what-we-do",
      },
      {
        label: "Consulting",
        href: "/what-we-do/consulting",
      },
      {
        label: "Technology",
        href: "/what-we-do/technology",
      },
    ],
  },
  {
    label: "Jobs",
    href: "/jobs",
    dropdown: [
      {
        label: "Open Positions",
        href: "/jobs",
      },
      {
        label: "Internships",
        href: "/jobs/internships",
      },
      {
        label: "Join Our Team",
        href: "/jobs/join-us",
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "TG Academy",
    href: "/tg-academy",
  },
  {
    label: "Strategic Partnership",
    href: "/strategic-partnership",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Book a Consultant",
    href: "/book-a-consultant",
  },
];

export const MDPItems = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];
export const THubItems = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    avatar: "/images/avatar_1.png",
    content:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "David Okafor",
    role: "CEO, TechFlow Africa",
    avatar: "/images/avatar_2.png",
    content:
      "Tobams Group delivered exactly what we needed. The process was smooth, professional, and the final product exceeded our expectations.",
  },
  {
    name: "Chidinma Eze",
    role: "Founder, Bloom Africa",
    avatar: "/images/avatar_3.png",
    content:
      "The team understood our brand from day one. They created a beautiful digital experience that our customers absolutely love.",
  },
  {
    name: "Michael Adeyemi",
    role: "Product Lead, Paystack",
    avatar: "/images/avatar_4.jpg",
    content:
      "From design to implementation, Tobams Group was incredibly easy to work with. They were responsive, thoughtful, and delivered great results.",
  },
];
