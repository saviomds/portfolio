import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "  Savior's Portfolio",
  description: "A showcase of my projects, skills, and experience as a software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f172a] text-slate-300 selection:bg-blue-500/30 selection:text-blue-200">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
       <p>© {new Date().getFullYear()} Saviomds. Crafted with Next.js & Tailwind CSS.</p>
        </footer>
      </body>
    </html>
  );
}
