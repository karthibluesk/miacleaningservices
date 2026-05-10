import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/blog";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return createMetadata({ title: post.meta.title, description: post.meta.description, path: `/blog/${slug}`, image: post.meta.image });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    const all = await getAllPosts();
    const related = all.filter((p) => p.category === post.meta.category && p.slug !== post.meta.slug).slice(0, 3);
    return (
      <Section>
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sage">{post.meta.category}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{post.meta.title}</h1>
          <p className="mt-4 text-lg leading-8 text-charcoal/70">{post.meta.description}</p>
          <div className="mt-5 rounded-2xl bg-mint p-4 text-sm font-bold">By {post.meta.author} · {new Date(post.meta.date).toLocaleDateString()}</div>
          <div className="prose-clean mt-8" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
        {related.length > 0 && <div className="mx-auto mt-14 max-w-3xl"><h2 className="text-2xl font-black">Related posts</h2><div className="mt-5 grid gap-3">{related.map((p) => <a className="rounded-2xl bg-white p-4 font-bold shadow-sm" key={p.slug} href={`/blog/${p.slug}`}>{p.title}</a>)}</div></div>}
      </Section>
    );
  } catch {
    notFound();
  }
}
