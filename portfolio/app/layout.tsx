import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Doe Smith — Developer & Designer",
  description: "Awwwards-inspired portfolio built with Next.js, Three.js, and GSAP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
