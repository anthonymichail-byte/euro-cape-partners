export const site = {
  name: "Euro-Cape Partners",
  tagline: "Your European Sales Office",
  email: "hello@eurocapepartners.com",
  location: "Athens, Greece",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/sectors", label: "Sectors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
