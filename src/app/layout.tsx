import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tanisha Maulik | Full-Stack Engineer & Creative Developer",
  description: "Portfolio of Tanisha Maulik - Full-Stack Engineer specializing in Next.js, TypeScript, AI Workspaces, and modern dark-aesthetic web experiences.",
  keywords: ["Tanisha Maulik", "Full Stack Developer", "Software Engineer", "Next.js", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "Tanisha Maulik" }],
  openGraph: {
    title: "Tanisha Maulik | Software Engineer Portfolio",
    description: "Full-Stack Engineer & Creative Developer crafting dark-aesthetic high-performance web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${plusJakarta.className} bg-[#050505] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}>
        {children}
      </body>
    </html>
  );
}
