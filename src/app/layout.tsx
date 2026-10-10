import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";
import { siteUrl } from "@/lib/site-url";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Chanuka Gishen | Full-Stack Software Engineer",
    template: "%s | Chanuka Gishen",
  },

  description:
    "Full-Stack Software Engineer specializing in backend development, scalable web applications, e-commerce systems, and cloud infrastructure.",

  applicationName: "Chanuka Gishen Portfolio",

  keywords: [
    "Chanuka Gishen",
    "Chanuka Mendis",
    "Full-Stack Software Engineer",
    "Backend Developer",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Software Engineer Sri Lanka",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Chanuka Gishen",
    title: "Chanuka Gishen | Full-Stack Software Engineer",
    description:
      "Building scalable applications, robust backend systems, and thoughtful digital experiences.",

    images: [
      {
        url: "https://www.chanukagishen.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chanuka Gishen Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chanuka Gishen | Software Engineer",
    description:
      "Full-stack development, backend engineering, and cloud infrastructure.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} min-h-screen`}>
        <ThemeProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
