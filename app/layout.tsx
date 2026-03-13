import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Favour Olusesan - Frontend Engineer & React/Next.js Specialist",
  description:
    "Portfolio of Favour Olusesan, a frontend engineer building high-performance web apps with React, Next.js, and AI integration. 4+ years experience.",
  openGraph: {
    title: "Favour Olusesan - Frontend Engineer",
    description:
      "Building high-performance web apps with React, Next.js, and AI integration.",
    url: "https://bellomuhammed.com",
    siteName: "Favour Olusesan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-text-body antialiased selection:bg-primary/30 selection:text-text-heading`}
      >
        {children}
      </body>
    </html>
  );
}
