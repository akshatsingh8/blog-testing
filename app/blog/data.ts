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
  seoTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
};

// Add new stories here. The templates automatically handle cards, featured
// stories, article headers, related stories, and optional images.
export const posts: BlogPost[] = [
  {
    slug: "conversational-ai-customer-service",
    category: "Guide",
    date: "Sep 08, 2026",
    title: "Conversational AI for Customer Service: How Indian Businesses Can Improve Customer Conversations",
    excerpt: "Learn how conversational AI for customer service helps Indian businesses improve response time, qualify leads, automate WhatsApp follow-ups, and connect customers with human teams.",
    visual: "30s",
    image: "/images/blog-customer-service.svg",
    readTime: "7 min read",
    author: "QuickReach Team",
    featured: true,
    seoTitle: "Conversational AI for Customer Service: A Guide for Indian Businesses",
    metaDescription: "Learn how conversational AI for customer service helps Indian businesses improve response time, qualify leads, automate WhatsApp follow-ups, and connect customers with human teams.",
    keywords: [
      "Conversational AI for customer service",
      "conversational AI",
      "AI customer service",
      "conversational AI customer service",
      "WhatsApp AI chatbot",
      "WhatsApp automation",
      "AI customer support",
      "WhatsApp customer service",
      "AI lead qualification",
      "WhatsApp lead generation",
      "automated customer service",
      "AI chatbot for business",
      "conversational AI in India",
      "WhatsApp AI for Indian businesses",
      "conversational AI for businesses in India",
      "AI customer service India",
      "WhatsApp automation India",
      "conversational AI India",
      "AI lead generation India",
    ],
    canonicalUrl: "https://quickreachai.brandspiritlabs.com/blog/conversational-ai-customer-service",
  },
  {
    slug: "welcome-to-quickreach",
    category: "Product notes",
    date: "May 08, 2025",
    title: "Say hello to your new favorite teammate",
    excerpt: "Why we built QuickReach AI to make every customer conversation feel a little more human.",
    visual: "hello",
    image: "/images/blog-conversations.svg",
    readTime: "4 min read",
    author: "Maya Chen",
    featured: false,
  },
  {
    slug: "whatsapp-conversations-that-convert",
    category: "Playbook",
    date: "Apr 21, 2025",
    title: "5 WhatsApp conversations that convert",
    excerpt: "Small changes to your replies can make a surprisingly big difference to your next sale.",
    visual: "5×",
    image: "/images/blog-playbook.svg",
    readTime: "6 min read",
    author: "Jon Bell",
  },
  {
    slug: "the-follow-up-guide",
    category: "Growth",
    date: "Mar 14, 2025",
    title: "The kind follow-up guide",
    excerpt: "How to stay top of mind without ever sounding pushy, robotic, or repetitive.",
    visual: "↗",
    image: "/images/blog-growth.svg",
    readTime: "5 min read",
    author: "Maya Chen",
  },
];
