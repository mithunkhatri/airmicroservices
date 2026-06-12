import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Air Microservices LLC | Backend Systems, Built with Clarity",
  description: "Air Microservices LLC partners with teams to design, build, and scale reliable backend platforms, APIs, and microservice-based systems.",
  keywords: [
    "Backend Development",
    "Microservices Architecture",
    "API Design",
    "Cloud-Native Systems",
    "System Integrations",
    "Scalable Infrastructure",
    "Technical Consulting"
  ],
  authors: [{ name: "Air Microservices LLC" }],
  openGraph: {
    title: "Air Microservices LLC | Backend Systems, Built with Clarity",
    description: "Your partner in backend development excellence. Designing, building, and scaling reliable backend platforms and microservices.",
    url: "https://airmicroservices.com",
    siteName: "Air Microservices LLC",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Microservices LLC | Backend Systems, Built with Clarity",
    description: "Your partner in backend development excellence. Designing, building, and scaling reliable backend platforms and microservices.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
