import Image from "next/image";
import Link from "next/link";
import { Footer, SiteNav } from "../components/site-nav";
import { posts } from "./data";

const categories = ["All stories", "Product notes", "Playbook", "Growth"];

export default function BlogPage() {
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const latest = posts.filter((post) => post.slug !== featured.slug);
  return <>
    <SiteNav />
    <main className="page-shell blog-home">
      <header className="page-header blog-header"><div className="eyebrow"><span className="eyebrow-dot" /> The QuickReach journal</div><h1>Good conversations <em>start here.</em></h1><p>Ideas, playbooks, and field notes for teams building better customer relationships on WhatsApp.</p></header>
      <nav className="category-nav" aria-label="Blog categories">{categories.map((category, index) => <span className={index === 0 ? "active" : ""} key={category}>{category}</span>)}</nav>
      <section className="featured-story" aria-label="Featured story"><div className="featured-image"><Image src={featured.image ?? "/images/blog-conversations.svg"} alt="" fill sizes="(max-width: 800px) 100vw, 55vw" priority /></div><div className="featured-copy"><div className="post-meta">{featured.category} <span>·</span> {featured.date}</div><h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.excerpt}</p><div className="story-byline"><span className="author-avatar">MC</span><span>By {featured.author} <b>·</b> {featured.readTime}</span></div><Link className="button-primary" href={`/blog/${featured.slug}`}>Read featured story <span aria-hidden="true">↗</span></Link></div></section>
      <div className="latest-label"><span>Latest stories</span><span className="label-line" /></div>
      <section className="blog-grid blog-grid-improved">{latest.map((post) => <article className="post-card" key={post.slug}><Link className="post-image" href={`/blog/${post.slug}`}><Image src={post.image ?? "/images/blog-conversations.svg"} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" /></Link><div className="post-meta">{post.category} <span>·</span> {post.date}</div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><div className="post-footer"><span>{post.readTime}</span><Link className="read-more" href={`/blog/${post.slug}`}>Read story <span aria-hidden="true">↗</span></Link></div></article>)}</section>
    </main>
    <Footer />
  </>;
}
