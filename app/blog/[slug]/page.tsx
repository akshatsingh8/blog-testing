import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, SiteNav } from "../../components/site-nav";
import { posts } from "../data";
import { ConversationalAiArticle } from "../articles/conversational-ai-customer-service";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) return {};

  const pageTitle = post.seoTitle ?? `${post.title} | QuickReach AI`;
  const pageDesc = post.metaDescription ?? post.excerpt;
  const canonical = post.canonicalUrl ?? `https://quickreachai.brandspiritlabs.com/blog/${post.slug}`;
  const imageUrl = post.image ?? "/images/blog-conversations.svg";

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: post.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonical,
      siteName: "QuickReach AI",
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 720,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [imageUrl],
    },
  };
}

export default function Article({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image ?? "/images/blog-conversations.svg",
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "QuickReach AI",
      url: "https://quickreachai.brandspiritlabs.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.canonicalUrl ?? `https://quickreachai.brandspiritlabs.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main className="article">
        <Link className="back-link" href="/blog">
          ← Back to all stories
        </Link>
        <div className="article-heading">
          <div className="post-meta">
            {post.category} <span>·</span> {post.date}
          </div>
          <h1>{post.title}</h1>
          <p className="lede">{post.excerpt}</p>
          <div className="article-byline">
            <span className="author-avatar">
              {post.author
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </span>
            <span>
              <strong>{post.author}</strong>
              <small>
                QuickReach editorial · {post.readTime}
              </small>
            </span>
          </div>
        </div>
        <div className="article-cover">
          <Image
            src={post.image ?? "/images/blog-conversations.svg"}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 960px"
          />
        </div>
        <div className="article-layout">
          <aside className="article-share">
            <span>Share</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=${encodeURIComponent(
                post.canonicalUrl ?? `https://quickreachai.brandspiritlabs.com/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
            >
              X
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `${post.title} - ${post.canonicalUrl ?? `https://quickreachai.brandspiritlabs.com/blog/${post.slug}`}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
            >
              W
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(
                post.title
              )}&body=${encodeURIComponent(
                post.canonicalUrl ?? `https://quickreachai.brandspiritlabs.com/blog/${post.slug}`
              )}`}
              aria-label="Share by email"
            >
              ✉
            </a>
          </aside>
          <div className="article-body">
            {post.slug === "conversational-ai-customer-service" ? (
              <ConversationalAiArticle />
            ) : (
              <>
                <p>
                  There’s a moment in every growing business when the inbox
                  starts to feel like a second office. Questions arrive at all
                  hours, great leads get buried between quick replies, and your
                  team spends more time catching up than moving forward.
                </p>
                <h2>Make every reply count</h2>
                <p>
                  QuickReach is built around a simple idea: your best
                  conversations should not depend on who happens to be online.
                  Give your assistant the context it needs, and it can handle the
                  repeatable moments with warmth and consistency.
                </p>
                <blockquote>
                  “The best automation doesn’t feel automated. It feels like
                  someone cared enough to reply.”
                </blockquote>
                <h2>A better kind of busy</h2>
                <p>
                  When the small questions are handled, your team gets time back
                  for the conversations that need a human touch. That’s the real
                  promise of a helpful AI assistant: not fewer conversations, but
                  better ones.
                </p>
              </>
            )}
          </div>
        </div>
        <section className="related-stories">
          <div className="latest-label">
            <span>Keep reading</span>
            <span className="label-line" />
          </div>
          <div className="related-grid">
            {related.map((item) => (
              <Link
                className="related-card"
                href={`/blog/${item.slug}`}
                key={item.slug}
              >
                <div className="related-image">
                  <Image
                    src={item.image ?? "/images/blog-conversations.svg"}
                    alt={item.title}
                    fill
                    sizes="240px"
                  />
                </div>
                <div className="post-meta">{item.category}</div>
                <h3>{item.title}</h3>
                <span className="read-more">Read story ↗</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
