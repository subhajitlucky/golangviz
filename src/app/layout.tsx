import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GolangViz | Visual Go Learning Platform",
  description:
    "Interactive, visual-first Golang learning platform with memory, concurrency, and compiler walkthroughs.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "GolangViz | Visual Go Learning Platform",
    description:
      "Visual explanations of Go memory, goroutines, channels, compiler pipeline, and more.",
    siteName: "GolangViz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GolangViz | Visual Go Learning Platform",
    description:
      "Visual explanations of Go memory, goroutines, channels, compiler pipeline, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
