import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickReach AI — WhatsApp, on autopilot",
  description: "A friendly AI chat assistant that helps your business turn WhatsApp conversations into customers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
