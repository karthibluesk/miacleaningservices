"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPostMeta } from "@/types/site";

export function BlogSearch({ posts, categories }: { posts: BlogPostMeta[]; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const results = useMemo(() => posts.filter((p) => (category === "All" || p.category === category) && `${p.title} ${p.description}`.toLowerCase().includes(query.toLowerCase())), [posts, category, query]);
  return (
    <>
      <div className="mb-8 grid gap-3 rounded-3xl bg-mint p-4 md:grid-cols-[1fr_240px]">
        <input aria-label="Search blog" placeholder="Search articles..." value={query} onChange={(e) => setQuery(e.target.value)} className="focus-ring rounded-2xl border border-teal/25 px-4 py-3" />
        <select aria-label="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="focus-ring rounded-2xl border border-teal/25 px-4 py-3">
          {["All", ...categories].map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {results.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-3xl border border-teal/20 bg-white p-6 shadow-sm hover:shadow-glow"><p className="text-sm font-bold text-sage">{post.category}</p><h2 className="mt-2 text-xl font-black">{post.title}</h2><p className="mt-3 text-charcoal/70">{post.description}</p><p className="mt-5 text-sm font-bold">{new Date(post.date).toLocaleDateString()}</p></Link>)}
      </div>
    </>
  );
}
