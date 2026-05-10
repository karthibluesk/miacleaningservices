import { getAllPosts, getCategories } from "@/lib/blog";
import { Section, SectionIntro } from "@/components/ui/Section";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Cleaning Blog", description: "Helpful home cleaning tips, maintenance routines, and seasonal checklists.", path: "/blog" });

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getCategories();
  return <Section><SectionIntro eyebrow="Blog" title="Helpful cleaning guides for a calmer home" /><BlogSearch posts={posts} categories={categories} /></Section>;
}
