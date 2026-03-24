import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // { label: "Our Work", href: "/portfolio" },
  {
    label: "More",
    href: "/blog",
    submenu: [
      { label: "View projects", href: "/blog" },
      { label: "Meet the teams", href: "/blog/Blog_1" },
    ],
  },

  // { label: "Contact", href: "/contact" },
  // { label: "Documentation", href: "/documentation" },
];  