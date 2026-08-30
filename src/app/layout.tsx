import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tanisha Maulik | MSc Cybersecurity Risk Management & IT Developer",
  description: "Portfolio of Tanisha Maulik — MSc Cybersecurity Risk Management (NUIG) & B.Tech IT (RAIT). Specializing in threat detection, network security, risk management, and web development.",
  keywords: ["Tanisha Maulik", "Cybersecurity", "Risk Management", "SOC Analyst", "Information Technology", "Galway Ireland", "Next.js", "React"],
  authors: [{ name: "Tanisha Maulik" }],
  icons: {
    icon: "/tanisha-profile.jpg",
    shortcut: "/tanisha-profile.jpg",
    apple: "/tanisha-profile.jpg",
  },
  openGraph: {
    title: "Tanisha Maulik | MSc Cybersecurity Risk Management",
    description: "Cybersecurity & Risk Management post-graduate with hands-on experience in security analysis, networking, and software development.",
    type: "website",
    images: ["/tanisha-profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${plusJakarta.className} bg-[#000000] text-zinc-100 antialiased selection:bg-red-500/30 selection:text-red-200`}>
        {children}
      </body>
    </html>
  );
}
