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
