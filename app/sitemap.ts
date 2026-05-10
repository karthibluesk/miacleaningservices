import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/services", "/booking", "/pricing", "/about", "/blog", "/contact", "/faq", "/privacy", "/terms"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() }));
  const posts = await getAllPosts();
  return [...routes, ...posts.map((post) => ({ url: `${siteConfig.url}/blog/${post.slug}`, lastModified: new Date(post.date) }))];
}
