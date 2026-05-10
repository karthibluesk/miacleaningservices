export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  duration: string;
  startingAt: number;
  includes: string[];
  faqs: { question: string; answer: string }[];
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  featured: boolean;
  image: string;
  author: string;
};
