import Link from "next/link";
import { Footer, SiteNav } from "../components/site-nav";
import { posts } from "./data";

export default function BlogPage() { return <><SiteNav /><main className="page-shell"><header className="page-header"><div className="eyebrow"><span className="eyebrow-dot" /> The QuickReach journal</div><h1>Good conversations start here.</h1><p>Ideas, playbooks, and field notes for teams building better customer relationships on WhatsApp.</p></header><section className="blog-grid">{posts.map((post, index) => <article className="post-card" key={post.slug}><div className={`post-visual ${index === 1 ? "orange" : index === 2 ? "blue" : ""}`}><span>{post.visual}</span></div><div className="post-meta">{post.category} · {post.date}</div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link className="read-more" href={`/blog/${post.slug}`}>Read story <span aria-hidden="true">↗</span></Link></article>)}</section></main><Footer /></>; }
