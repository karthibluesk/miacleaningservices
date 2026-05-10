import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { BlogPostMeta } from "@/types/site";

const blogDir = path.join(process.cwd(), "content/blog");

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      featured: Boolean(data.featured),
      image: data.image,
      author: data.author || "Mia Rivera"
    } satisfies BlogPostMeta;
  });
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPost(slug: string) {
  const raw = fs.readFileSync(path.join(blogDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      featured: Boolean(data.featured),
      image: data.image,
      author: data.author || "Mia Rivera"
    } satisfies BlogPostMeta,
    contentHtml: processed.toString()
  };
}

export async function getCategories() {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((post) => post.category))).sort();
}
