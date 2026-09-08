import Link from "next/link";
import { Footer, SiteNav } from "./components/site-nav";

export default function Home() {
  return <>
    <SiteNav />
    <main>
      <section className="hero">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> WhatsApp, on autopilot</div>
          <h1>Turn chats into <em>customers.</em></h1>
          <p className="hero-copy">QuickReach AI gives your business a helpful, human-like assistant that answers questions, follows up, and sells — right inside WhatsApp.</p>
          <div className="hero-actions"><Link className="button-primary" href="#get-started">Start for free <span aria-hidden="true">↗</span></Link><Link className="button-secondary" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></Link></div>
          <p className="microcopy">No credit card needed · Set up in 5 minutes</p>
        </div>
        <div className="hero-art"><div className="floating-note"><span>24/7</span>always on, always helpful</div><div className="phone"><div className="phone-top"><div className="avatar">QR</div><div><strong>QuickReach AI</strong><small>online now</small></div></div><div className="chat"><div className="bubble ai">Hey there! 👋 I’m Mia, your QuickReach assistant. How can I help today?<span className="chat-time">10:41 AM</span></div><div className="bubble user">I’m looking for your starter plan<span className="chat-time">10:42 AM</span></div><div className="bubble ai">Great choice. It includes everything you need to start growing. Want me to send over the details?<span className="chat-time">10:42 AM</span></div></div><div className="phone-input"><div>Type a message</div><span className="send">↑</span></div></div></div>
      </section>
      <div className="trust"><p>Loved by teams who care about every reply</p><div className="trust-logos"><span>nordic</span><span>morrow</span><span>HATCH</span><span>○ orbit</span><span>STUDIO 08</span></div></div>
      <section className="section" id="how-it-works"><div className="section-heading"><h2>Every conversation, covered.</h2><p className="section-intro">The little things that make your customers feel seen — without adding another tab to your day.</p></div><div className="feature-grid"><div className="feature"><div className="feature-icon">✦</div><h3>Reply in your voice</h3><p>Train QuickReach on your products, tone, and FAQs. It sounds like you, only faster.</p></div><div className="feature"><div className="feature-icon">⌁</div><h3>Follow up that feels human</h3><p>Turn “just checking in” into thoughtful, timely conversations that move things forward.</p></div><div className="feature"><div className="feature-icon">↗</div><h3>Grow while you sleep</h3><p>Capture leads and answer questions around the clock, even when your team is offline.</p></div></div></section>
      <section className="cta-band" id="get-started"><h2>More replies. More revenue. Less busywork.</h2><p>Give your team a little more room to focus on the work that matters.</p><Link className="button-primary" href="mailto:hello@quickreach.ai">Bring QuickReach to your team ↗</Link></section>
    </main>
    <Footer />
  </>;
}
