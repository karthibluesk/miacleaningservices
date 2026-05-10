export const siteConfig = {
  name: "Mia’s Cleaning Service",
  domain: "miacleaningservice.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://miacleaningservices.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mvuc2181715@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "219-385-5488",
  serviceArea: "Local homes, apartments, condos, and small offices",
  hours: [
    "Monday–Friday: 8:00 AM–6:00 PM",
    "Saturday: 9:00 AM–3:00 PM",
    "Sunday: Closed"
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/booking", label: "Book" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ]
};
