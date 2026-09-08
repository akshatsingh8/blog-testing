import { notFound } from "next/navigation";
import { Footer, SiteNav } from "../../components/site-nav";
import { posts } from "../data";

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }

export default function Article({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <><SiteNav /><main className="article"><div className="post-meta">{post.category} · {post.date}</div><h1>{post.title}</h1><p className="lede">{post.excerpt}</p><div className="article-cover"><strong>{post.visual}</strong></div><div className="article-body"><p>There’s a moment in every growing business when the inbox starts to feel like a second office. Questions arrive at all hours, great leads get buried between quick replies, and your team spends more time catching up than moving forward.</p><h2>Make every reply count</h2><p>QuickReach is built around a simple idea: your best conversations should not depend on who happens to be online. Give your assistant the context it needs, and it can handle the repeatable moments with warmth and consistency.</p><blockquote>“The best automation doesn’t feel automated. It feels like someone cared enough to reply.”</blockquote><h2>A better kind of busy</h2><p>When the small questions are handled, your team gets time back for the conversations that need a human touch. That’s the real promise of a helpful AI assistant: not fewer conversations, but better ones.</p></div></main><Footer /></>;
}
