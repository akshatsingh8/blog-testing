export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  visual: string;
  image?: string;
  readTime: string;
  author: string;
  featured?: boolean;
};

// Add new stories here. The templates automatically handle cards, featured
// stories, article headers, related stories, and optional images.
export const posts: BlogPost[] = [
  { slug: "welcome-to-quickreach", category: "Product notes", date: "May 08, 2025", title: "Say hello to your new favorite teammate", excerpt: "Why we built QuickReach AI to make every customer conversation feel a little more human.", visual: "hello", image: "/images/blog-conversations.svg", readTime: "4 min read", author: "Maya Chen", featured: true },
  { slug: "whatsapp-conversations-that-convert", category: "Playbook", date: "Apr 21, 2025", title: "5 WhatsApp conversations that convert", excerpt: "Small changes to your replies can make a surprisingly big difference to your next sale.", visual: "5×", image: "/images/blog-playbook.svg", readTime: "6 min read", author: "Jon Bell" },
  { slug: "the-follow-up-guide", category: "Growth", date: "Mar 14, 2025", title: "The kind follow-up guide", excerpt: "How to stay top of mind without ever sounding pushy, robotic, or repetitive.", visual: "↗", image: "/images/blog-growth.svg", readTime: "5 min read", author: "Maya Chen" },
];
