import Link from "next/link";

export function SiteNav() {
  return (
    <nav className="site-nav">
      <Link className="brand" href="/"><span className="brand-mark"><span>↗</span></span>quickreach<span style={{ color: "#116b52" }}>ai</span></Link>
      <div className="nav-links">
        <Link href="/#how-it-works">How it works</Link>
        <Link href="/blog">Blog</Link>
        <Link className="nav-cta" href="/#get-started">Get started <span aria-hidden="true">↗</span></Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return <footer className="footer"><p>© 2025 QuickReach AI. Made for better conversations.</p><div className="footer-links"><Link href="/">Privacy</Link><Link href="/blog">Journal</Link></div></footer>;
}
